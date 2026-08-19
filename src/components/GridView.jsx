// src/components/GridView.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Grid, CheckCircle2, ArrowRight } from 'lucide-react';
import { slides } from '../data/slidesData';

export default function GridView({ currentSlideIndex, onSelectSlide, setViewMode }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-900/15">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif-title flex items-center gap-2">
            <Grid className="w-7 h-7 text-red-700" />
            TỔNG QUAN 17 SLIDE BÀI THUYẾT TRÌNH
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            Nhấp vào bất kỳ slide nào để xem chi tiết hoặc trình chiếu
          </p>
        </div>
        <button
          onClick={() => setViewMode('slide')}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-800 hover:bg-red-700 text-amber-50 font-bold text-xs shadow-md transition"
        >
          <span>Về Trình Chiếu</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12">
        {slides.map((s, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <motion.div
              key={s.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onSelectSlide(idx);
                setViewMode('slide');
              }}
              className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 relative flex flex-col justify-between ${
                isActive
                  ? 'bg-amber-50/90 border-red-700 shadow-md ring-2 ring-red-700/40'
                  : 'bg-white border-amber-900/15 hover:border-red-600/40 hover:bg-amber-50/40 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-900 border border-red-200">
                    SLIDE {s.slideNumber}
                  </span>
                  {isActive && (
                    <span className="flex items-center text-[11px] text-red-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-red-700" />
                      Đang xem
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-stone-900 font-serif-title line-clamp-2 mb-1">
                  {s.title}
                </h3>
                <p className="text-[11px] text-stone-600 line-clamp-2 font-sans">
                  {s.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-amber-100 flex items-center justify-between text-[10px] text-amber-900 font-bold">
                <span>{s.badge}</span>
                <span>{s.period}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
