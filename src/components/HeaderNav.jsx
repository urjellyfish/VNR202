// src/components/HeaderNav.jsx
import React from 'react';
import { 
  Play, 
  Grid, 
  Clock, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Award,
  Printer,
  Presentation,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { exportToPptx } from '../utils/exportToPptx';


export default function HeaderNav({
  currentSlideIndex,
  totalSlides,
  viewMode,
  setViewMode,
  soundEnabled,
  setSoundEnabled,
  isFullscreen,
  toggleFullscreen,
  setShowHelp,
  goToNextSlide,
  goToPrevSlide
}) {
  return (
    <header className="no-print bg-[#F5EFE6]/95 backdrop-blur-md border-b border-amber-900/15 text-stone-800 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-40">
      {/* Brand & Title */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 to-amber-700 flex items-center justify-center text-amber-100 shadow-md border border-amber-500/40">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-base md:text-lg font-bold text-stone-900 tracking-tight font-serif-title leading-tight">
            Cách Mạng Tháng Tám (1939 – 1945)
          </h1>
          <p className="text-xs text-amber-900/80 font-medium">
            Đảng lãnh đạo chuyển hướng chiến lược giải phóng dân tộc
          </p>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center space-x-2 bg-white border border-amber-900/15 rounded-full px-3 py-1.5 shadow-inner">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
          className="p-1 rounded-full text-stone-600 hover:text-red-700 hover:bg-stone-100 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title="Slide trước (Phím Phải / Phím Trái)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter */}
        <div className="flex items-center space-x-1 font-mono text-xs font-bold text-stone-700 px-2">
          <span className="text-sm text-red-700 font-extrabold">{currentSlideIndex + 1}</span>
          <span className="text-stone-400">/</span>
          <span className="text-stone-500">{totalSlides}</span>
        </div>

        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-1 rounded-full text-stone-600 hover:text-red-700 hover:bg-stone-100 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title="Slide sau (Phím Phải / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* View Mode Buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setViewMode('slide')}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
            viewMode === 'slide'
              ? 'bg-red-800 text-amber-50 shadow-md border border-red-900'
              : 'bg-white text-stone-700 border border-stone-300 hover:bg-amber-50 hover:text-red-800'
          }`}
          title="Trình chiếu Slide (S)"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span className="hidden md:inline">Trình Chiếu</span>
        </button>

        <button
          onClick={() => setViewMode('grid')}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
            viewMode === 'grid'
              ? 'bg-red-800 text-amber-50 shadow-md border border-red-900'
              : 'bg-white text-stone-700 border border-stone-300 hover:bg-amber-50 hover:text-red-800'
          }`}
          title="Tổng quan 17 Slide (G)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Tổng Quan</span>
        </button>

        <button
          onClick={() => setViewMode('timeline')}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
            viewMode === 'timeline'
              ? 'bg-red-800 text-amber-50 shadow-md border border-red-900'
              : 'bg-white text-stone-700 border border-stone-300 hover:bg-amber-50 hover:text-red-800'
          }`}
          title="Dòng Thời Gian 1939-1945 (T)"
        >
          <Clock className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Dòng Thời Gian</span>
        </button>

        {/* Separator */}
        <div className="h-5 w-px bg-stone-300 mx-1 hidden sm:block"></div>

        {/* Utilities */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2 rounded-lg transition border border-stone-300 ${
            soundEnabled ? 'bg-amber-100 text-amber-900 border-amber-400' : 'bg-white text-stone-400 hover:bg-stone-100'
          }`}
          title={soundEnabled ? "Tắt âm thanh hiệu ứng" : "Bật âm thanh hiệu ứng"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={() => window.print()}
          className="p-2 rounded-lg bg-white border border-stone-300 text-stone-600 hover:text-red-800 hover:bg-amber-50 transition"
          title="Xuất / In bài thuyết trình"
        >
          <Printer className="w-4 h-4" />
        </button>

        <button
          onClick={exportToPptx}
          className="p-2 rounded-lg bg-white border border-stone-300 text-stone-600 hover:text-red-800 hover:bg-amber-50 transition"
          title="Xuất bài thuyết trình sang PowerPoint (.pptx)"
        >
          <Presentation className="w-4 h-4" />
        </button>


        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-white border border-stone-300 text-stone-600 hover:text-red-800 hover:bg-amber-50 transition"
          title="Toàn màn hình (F)"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setShowHelp(true)}
          className="p-2 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 hover:bg-amber-200 transition"
          title="Hướng dẫn phím tắt (?)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
