// src/components/TimelineView.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { timelineEvents, slides } from '../data/slidesData';

export default function TimelineView({ onSelectSlide, setViewMode }) {
  const getSlideIndexForEvent = (eventIndex) => {
    const mapping = [0, 1, 0, 1, 2, 2, 6, 7, 8, 10, 11, 13, 13];
    return mapping[eventIndex] || 0;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-900/15">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif-title flex items-center gap-2">
            <Clock className="w-7 h-7 text-red-700" />
            DÒNG THỜI GIAN LỊCH SỬ (1939 – 1945)
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            Diễn tiến chuyển hướng chiến lược & Thắng lợi Cách mạng Tháng Tám
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

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-red-700/40 ml-4 md:ml-32 space-y-8 pb-12">
        {timelineEvents.map((evt, idx) => {
          const slideTarget = getSlideIndexForEvent(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="relative pl-6 md:pl-8 group cursor-pointer"
              onClick={() => {
                onSelectSlide(slideTarget);
                setViewMode('slide');
              }}
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-700 border-2 border-amber-100 group-hover:scale-125 group-hover:bg-amber-600 transition" />

              {/* Year Badge */}
              <div className="md:absolute md:-left-32 md:top-0 md:text-right w-28 mb-1 md:mb-0">
                <span className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
                  {evt.year}
                </span>
              </div>

              {/* Event Card */}
              <div className="bg-white border border-amber-900/15 group-hover:border-red-700/50 rounded-2xl p-4 shadow-sm group-hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-stone-900 font-serif-title group-hover:text-red-800">
                    {evt.title}
                  </h3>
                  <span className="text-[10px] text-red-800 font-bold px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200">
                    Xem Slide {slides[slideTarget]?.slideNumber}
                  </span>
                </div>
                <p className="text-xs text-stone-700 mt-1 font-sans">
                  {evt.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
