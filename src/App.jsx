// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import HeaderNav from './components/HeaderNav';
import SlideDisplay from './components/SlideDisplay';
import GridView from './components/GridView';
import TimelineView from './components/TimelineView';
import KeyboardHelp from './components/KeyboardHelp';
import AudioPlayer from './components/AudioPlayer';
import PrintSummary from './components/PrintSummary';
import { slides } from './data/slidesData';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slide'); // 'slide' | 'grid' | 'timeline'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [triggerSound, setTriggerSound] = useState(0);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setTriggerSound((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      setTriggerSound((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
      setTriggerSound((prev) => prev + 1);
    }
  }, [totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setViewMode((prev) => (prev === 'grid' ? 'slide' : 'grid'));
          break;
        case 't':
        case 'T':
          e.preventDefault();
          setViewMode((prev) => (prev === 'timeline' ? 'slide' : 'timeline'));
          break;
        case '?':
          e.preventDefault();
          setShowHelp((prev) => !prev);
          break;
        case 'Escape':
          setShowHelp(false);
          if (viewMode !== 'slide') setViewMode('slide');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, goToSlide, toggleFullscreen, totalSlides, viewMode]);

  return (
    <div className="min-h-screen bg-parchment-light flex flex-col justify-between overflow-x-hidden">
      {/* Top Header Navigation */}
      <HeaderNav
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        viewMode={viewMode}
        setViewMode={setViewMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        setShowHelp={setShowHelp}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        goToSlide={goToSlide}
      />

      {/* Dynamic Content Views */}
      <main className="flex-1 flex flex-col justify-center">
        {viewMode === 'slide' && (
          <SlideDisplay
            slide={currentSlide}
            currentSlideIndex={currentSlideIndex}
            totalSlides={totalSlides}
            goToNextSlide={goToNextSlide}
            goToPrevSlide={goToPrevSlide}
          />
        )}

        {viewMode === 'grid' && (
          <GridView
            currentSlideIndex={currentSlideIndex}
            onSelectSlide={goToSlide}
            setViewMode={setViewMode}
          />
        )}

        {viewMode === 'timeline' && (
          <TimelineView
            onSelectSlide={goToSlide}
            setViewMode={setViewMode}
          />
        )}
      </main>

      {/* Keyboard Shortcuts Help Modal */}
      <KeyboardHelp
        showHelp={showHelp}
        setShowHelp={setShowHelp}
      />

      {/* Web Audio API Sound Trigger */}
      <AudioPlayer
        soundEnabled={soundEnabled}
        triggerSlideChange={triggerSound}
      />

      {/* Print / PDF Document Layout */}
      <PrintSummary />
    </div>
  );
}
