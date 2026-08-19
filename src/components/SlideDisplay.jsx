// src/components/SlideDisplay.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ShieldAlert, 
  Scroll, 
  Users, 
  Flag, 
  Award, 
  Landmark, 
  Star, 
  Flame, 
  Zap, 
  Shield, 
  HeartPulse, 
  BookOpen, 
  Swords, 
  Compass, 
  AlertTriangle, 
  FileText, 
  Target, 
  Wheat, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Megaphone, 
  Trophy, 
  Sparkles, 
  Heart,
  Quote,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const iconMap = {
  Globe, ShieldAlert, Scroll, Users, Flag, Award, Landmark, Star,
  Flame, Zap, Shield, HeartPulse, BookOpen, Swords, Compass, AlertTriangle,
  FileText, Target, Wheat, MapPin, CheckCircle, Clock, Megaphone, Trophy,
  Sparkles, Heart
};

export default function SlideDisplay({
  slide,
  currentSlideIndex,
  totalSlides,
  goToNextSlide,
  goToPrevSlide
}) {
  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Flag;
    return <IconComponent className="w-5 h-5 text-red-700 shrink-0" />;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between p-4 md:p-8 overflow-hidden select-none">
      {/* Background Heroic Warm Parchment Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 12, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.995 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-between z-10"
        >
          {/* Top Header Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-900/15">
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-gradient-to-r from-red-800 to-amber-800 text-amber-50 shadow-sm">
                SLIDE {slide.slideNumber}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300">
                {slide.badge}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/90 px-3.5 py-1 rounded-md border border-amber-300 shadow-xs">
                GIAI ĐOẠN: {slide.period}
              </span>
            </div>
          </div>

          {/* Main Slide Title & Subtitle */}
          <div className="text-center md:text-left mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 font-serif-title tracking-normal leading-snug mb-2">
              {slide.title}
            </h2>
            <p className="text-sm md:text-base text-amber-950/80 font-medium max-w-4xl">
              {slide.subtitle}
            </p>
          </div>

          {/* Core Content Grid (2 Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            {/* Left Pillar */}
            <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-red-700/40 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-100">
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 group-hover:scale-105 transition">
                    {renderIcon(slide.content.leftPillar.icon)}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 font-serif-title tracking-normal">
                    {slide.content.leftPillar.title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {slide.content.leftPillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-stone-800 text-xs md:text-sm leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                      <span className="font-sans">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Pillar */}
            <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-amber-700/40 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-100">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 group-hover:scale-105 transition">
                    {renderIcon(slide.content.rightPillar.icon)}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 font-serif-title tracking-normal">
                    {slide.content.rightPillar.title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {slide.content.rightPillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-stone-800 text-xs md:text-sm leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0 mt-1.5"></span>
                      <span className="font-sans">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Historical Quote Box (Light Parchment Callout Banner) */}
          <div className="mt-6">
            <div className="bg-gradient-to-r from-amber-50 via-red-50/50 to-amber-50 border-l-4 border-red-700 border-y border-r border-amber-900/15 rounded-r-xl p-4 shadow-sm relative overflow-hidden">
              <div className="flex items-start space-x-3 relative z-10">
                <Quote className="w-6 h-6 text-red-700 shrink-0 opacity-80 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs md:text-sm italic font-serif-body text-stone-900 leading-relaxed">
                    "{slide.historicalQuote.quote}"
                  </p>
                  <p className="text-[11px] font-bold text-red-800 mt-1.5 text-right font-sans">
                    — {slide.historicalQuote.speaker}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Bottom Quick Nav Hints */}
      <div className="flex items-center justify-between text-xs text-stone-500 mt-4 pt-3 border-t border-amber-900/15">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
          className="flex items-center space-x-1 font-bold hover:text-red-700 disabled:opacity-30 disabled:hover:text-stone-400 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Slide Trước</span>
        </button>

        <div className="flex space-x-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPrevSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentSlideIndex 
                  ? 'bg-red-700 w-6' 
                  : 'bg-stone-300 hover:bg-amber-600'
              }`}
              title={`Chuyển tới Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="flex items-center space-x-1 font-bold hover:text-red-700 disabled:opacity-30 disabled:hover:text-stone-400 transition"
        >
          <span>Slide Sau</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
