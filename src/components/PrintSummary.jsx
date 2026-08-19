// src/components/PrintSummary.jsx
import React from 'react';
import { slides, presentationInfo } from '../data/slidesData';

export default function PrintSummary() {
  return (
    <div className="hidden print:block text-stone-900 bg-white p-8">
      <div className="text-center pb-6 border-b-2 border-stone-800 mb-8">
        <h1 className="text-2xl font-bold font-serif-title uppercase text-red-900">
          {presentationInfo.title}
        </h1>
        <p className="text-sm font-semibold text-stone-700 mt-1">
          {presentationInfo.subtitle} ({presentationInfo.period})
        </p>
      </div>

      <div className="space-y-8">
        {slides.map((s) => (
          <div key={s.id} className="border border-stone-300 rounded-xl p-6 print-page-break">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-3">
              <span className="font-mono font-bold text-xs bg-stone-100 px-2.5 py-1 rounded">
                SLIDE {s.slideNumber} - {s.badge} ({s.period})
              </span>
              <span className="text-xs text-stone-600 font-semibold">{s.badge}</span>
            </div>

            <h2 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
              {s.title}
            </h2>
            <p className="text-xs text-stone-600 italic mb-4 font-serif-body">
              {s.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs mb-4">
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2 font-serif-title">{s.content.leftPillar.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800">
                  {s.content.leftPillar.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2 font-serif-title">{s.content.rightPillar.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800">
                  {s.content.rightPillar.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-red-700 p-3 text-xs italic text-stone-900">
              "{s.historicalQuote.quote}" — <strong>{s.historicalQuote.speaker}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
