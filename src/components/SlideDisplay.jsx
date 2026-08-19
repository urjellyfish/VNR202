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
  ChevronLeft,
  ArrowRight,
  UserCheck
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
  const renderIcon = (iconName, extraClass = "w-5 h-5 text-red-700 shrink-0") => {
    const IconComponent = iconMap[iconName] || Flag;
    return <IconComponent className={extraClass} />;
  };

  // Render specific layout based on slide.layoutType
  const renderSlideContent = () => {
    switch (slide.layoutType) {
      /* 1. HERO LAYOUT (Slide 1) */
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {slide.heroMetrics.map((m, idx) => (
                <div key={idx} className="bg-white border border-amber-900/15 rounded-xl p-4 shadow-sm hover:border-red-600 transition">
                  <div className="text-xs font-mono font-bold text-red-800 bg-red-50 inline-block px-2.5 py-0.5 rounded border border-red-200 mb-1">
                    {m.label}
                  </div>
                  <div className="text-base font-bold text-stone-900 font-serif-title">{m.value}</div>
                  <div className="text-xs text-stone-600 mt-1 font-sans">{m.desc}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4 pb-2 border-b border-stone-100">
                  <div className="p-2 rounded-lg bg-red-50 text-red-700">{renderIcon(slide.content.leftPillar.icon)}</div>
                  <h3 className="font-bold text-lg text-stone-900 font-serif-title">{slide.content.leftPillar.title}</h3>
                </div>
                <ul className="space-y-3 text-xs md:text-sm text-stone-800">
                  {slide.content.leftPillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-700 shrink-0 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4 pb-2 border-b border-stone-100">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800">{renderIcon(slide.content.rightPillar.icon)}</div>
                  <h3 className="font-bold text-lg text-stone-900 font-serif-title">{slide.content.rightPillar.title}</h3>
                </div>
                <ul className="space-y-3 text-xs md:text-sm text-stone-800">
                  {slide.content.rightPillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      /* 2. TIMELINE STEPPER LAYOUT (Slide 2, 11) */
      case 'timeline-stepper':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-auto">
            {slide.steps.map((st, idx) => (
              <div key={idx} className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:border-red-700 transition relative flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                  <span className="text-2xl font-black font-mono text-red-800/30">STEP {st.stepNumber}</span>
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
                    {st.time}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-title mb-1">{st.title}</h3>
                  {st.location && <p className="text-xs font-semibold text-red-800 mb-3">📍 {st.location}</p>}
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    {st.points.map((p, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );

      /* 3. SPLIT FEATURE LAYOUT (Slide 3, 9) */
      case 'split-feature':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-2 bg-gradient-to-br from-red-900 to-amber-900 text-amber-50 rounded-2xl p-6 shadow-lg flex flex-col justify-between border border-amber-500/40">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 bg-black/30 px-3 py-1 rounded-full uppercase border border-amber-400/30 inline-block mb-4">
                  {slide.featureCard.tag}
                </span>
                <div className="text-xs font-mono text-amber-200 mb-1">{slide.featureCard.date}</div>
                <h3 className="text-xl font-bold font-serif-title text-amber-100 mb-3 leading-snug">
                  {slide.featureCard.title}
                </h3>
                <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
                  {slide.featureCard.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-400/20 text-xs font-bold text-amber-300 flex items-center justify-between">
                <span>Pắc Bó, Cao Bằng (1941)</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {slide.decisions.map((dec, idx) => (
                <div key={idx} className="bg-white border border-amber-900/15 rounded-xl p-4 shadow-sm flex items-start space-x-4 hover:border-red-600 transition">
                  <div className="p-3 rounded-xl bg-amber-50 text-red-800 border border-amber-200 shrink-0">
                    {renderIcon(dec.icon, "w-6 h-6 text-red-800")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-serif-title mb-1">{dec.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{dec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      /* 4. COMPARISON LAYOUT (Slide 4) */
      case 'comparison':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="bg-stone-50 border border-stone-300 rounded-2xl p-6 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-stone-600 bg-stone-200 px-3 py-1 rounded-full uppercase mb-3 inline-block">
                {slide.comparison.leftBox.tag}
              </span>
              <h3 className="text-lg font-bold text-stone-800 font-serif-title mb-4 pb-2 border-b border-stone-200">
                {slide.comparison.leftBox.title}
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-stone-700">
                {slide.comparison.leftBox.points.map((p, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0 mt-1.5"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-red-700/60 rounded-2xl p-6 shadow-md relative">
              <span className="text-[10px] font-mono font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full uppercase mb-3 inline-block border border-red-300">
                {slide.comparison.rightBox.tag}
              </span>
              <h3 className="text-lg font-bold text-stone-900 font-serif-title mb-4 pb-2 border-b border-amber-100">
                {slide.comparison.rightBox.title}
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-stone-800">
                {slide.comparison.rightBox.points.map((p, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                    <span className="font-semibold">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      /* 5. CARDS 3-COLUMNS LAYOUT (Slide 5, 13, 16) */
      case 'cards-3col':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
            {slide.cards.map((c, idx) => (
              <div key={idx} className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:border-red-700 transition flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                    <div className="p-2.5 rounded-xl bg-red-50 text-red-800 group-hover:scale-105 transition">
                      {renderIcon(c.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      {c.time}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-title mb-1">{c.title}</h3>
                  {c.location && <p className="text-xs font-semibold text-red-800 mb-3">📍 {c.location}</p>}
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      /* 6. TRIBUTE GRID LAYOUT (Slide 6) */
      case 'tribute-grid':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
            {slide.tributes.map((tr, idx) => (
              <div key={idx} className="bg-white border border-amber-900/20 rounded-2xl p-5 shadow-md hover:border-red-700 transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-bold font-serif mb-3 border border-red-300">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-title">{tr.name}</h3>
                  <p className="text-xs font-bold text-red-800 mb-2">{tr.role}</p>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{tr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      /* 7. DOCUMENT BANNER LAYOUT (Slide 7, 10) */
      case 'document-banner':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-900 to-amber-900 text-amber-50 rounded-2xl p-6 shadow-lg border border-amber-400/30 text-center">
              <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 bg-black/30 px-3 py-1 rounded-full uppercase border border-amber-400/30 inline-block mb-2">
                VĂN KIỆN LỊCH SỬ TỐI QUAN TRỌNG
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif-title text-amber-100 mb-1">{slide.documentHeader.title}</h3>
              <p className="text-xs font-semibold text-amber-300 mb-1">{slide.documentHeader.author}</p>
              <p className="text-xs text-amber-100/80 italic">{slide.documentHeader.sub}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.principles.map((pr, idx) => (
                <div key={idx} className="bg-white border border-amber-900/15 rounded-2xl p-5 shadow-md hover:border-red-700 transition">
                  <div className="text-2xl font-black font-mono text-red-800/30 mb-2">PRINCIPIUM {pr.num}</div>
                  <h4 className="text-sm font-bold text-stone-900 font-serif-title mb-2 text-red-900">{pr.title}</h4>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      /* 8. STAT CALLOUT LAYOUT (Slide 8, 12) */
      case 'stat-callout':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
            {slide.statBoxes.map((sb, idx) => (
              <div key={idx} className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:border-red-700 transition text-center flex flex-col justify-between group">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-serif-title text-red-800 mb-1 group-hover:scale-105 transition duration-300">
                    {sb.bigNum}
                  </div>
                  <div className="text-xs font-bold font-mono text-amber-900 uppercase tracking-wider mb-2">{sb.unit}</div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-title mb-2">{sb.label}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{sb.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      /* 9. TRIUMPHANT HERO LAYOUT (Slide 14) */
      case 'triumphant-hero':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {slide.victoryMilestones.map((vm, idx) => (
                <div key={idx} className={`rounded-2xl p-4 border shadow-md transition ${idx === 3 ? 'bg-gradient-to-br from-red-900 to-amber-900 text-amber-50 border-amber-400' : 'bg-white border-amber-900/15'}`}>
                  <div className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full inline-block mb-2 ${idx === 3 ? 'bg-amber-400 text-stone-950' : 'bg-red-100 text-red-900'}`}>
                    {vm.date}
                  </div>
                  <h3 className={`text-lg font-bold font-serif-title mb-1 ${idx === 3 ? 'text-amber-100' : 'text-stone-900'}`}>{vm.city}</h3>
                  <p className={`text-xs leading-relaxed font-sans ${idx === 3 ? 'text-amber-100/90' : 'text-stone-600'}`}>{vm.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-100/80 border border-amber-300 rounded-2xl p-5 shadow-inner text-center">
              <span className="text-xs font-mono font-bold text-red-900 uppercase tracking-wider block mb-1">CỘT MỐC LỊCH SỬ KHÔNG BAO GIỜ PHAI</span>
              <p className="text-sm font-bold text-stone-900 font-serif-title">
                Chỉ trong 15 ngày (14 - 28/8/1945), Tổng khởi nghĩa đã hoàn toàn thắng lợi trong toàn quốc, dẫn tới Ngày 2/9/1945 Tuyên ngôn Độc lập tại Ba Đình.
              </p>
            </div>
          </div>
        );

      /* 10. MATRIX 4-GRID LAYOUT (Slide 15) */
      case 'matrix-4grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            {slide.matrixPillars.map((mp, idx) => (
              <div key={idx} className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md hover:border-red-700 transition flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-red-800 text-amber-100 flex items-center justify-center text-lg font-black font-mono shrink-0 shadow-sm">
                  {mp.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-title mb-1.5">{mp.title}</h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">{mp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      /* 11. IMPACT DUAL LAYOUT (Slide 17) */
      case 'impact-dual':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="bg-white border-2 border-red-700/60 rounded-2xl p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-red-200">
                <div className="p-2.5 rounded-xl bg-red-100 text-red-800">{renderIcon(slide.impactColumns.national.icon)}</div>
                <h3 className="font-bold text-base md:text-lg text-red-900 font-serif-title">{slide.impactColumns.national.title}</h3>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-stone-800">
                {slide.impactColumns.national.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                    <span className="font-semibold">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-200">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900">{renderIcon(slide.impactColumns.international.icon)}</div>
                <h3 className="font-bold text-base md:text-lg text-amber-950 font-serif-title">{slide.impactColumns.international.title}</h3>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-stone-800">
                {slide.impactColumns.international.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0 mt-1.5"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      /* FALLBACK 2-PILLAR LAYOUT */
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-100">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-700">{renderIcon(slide.content?.leftPillar?.icon)}</div>
                <h3 className="text-base md:text-lg font-bold text-stone-900 font-serif-title">{slide.content?.leftPillar?.title}</h3>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-stone-800">
                {slide.content?.leftPillar?.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1.5"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-amber-900/15 rounded-2xl p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-amber-100">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800">{renderIcon(slide.content?.rightPillar?.icon)}</div>
                <h3 className="text-base md:text-lg font-bold text-stone-900 font-serif-title">{slide.content?.rightPillar?.title}</h3>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-stone-800">
                {slide.content?.rightPillar?.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0 mt-1.5"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
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

          {/* Dynamic Layout Content */}
          {renderSlideContent()}

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
