// src/components/KeyboardHelp.jsx
import React from 'react';
import { X, Keyboard } from 'lucide-react';

export default function KeyboardHelp({ showHelp, setShowHelp }) {
  if (!showHelp) return null;

  const shortcuts = [
    { key: "→ / Space / PgDn", desc: "Chuyển tới Slide tiếp theo" },
    { key: "← / PgUp", desc: "Quay lại Slide trước" },
    { key: "Home / End", desc: "Về Slide đầu tiên / Slide cuối cùng" },
    { key: "F", desc: "Bật / Tắt chế độ Toàn màn hình" },
    { key: "G", desc: "Bật / Tắt chế độ Lưới Tổng quan 17 Slide" },
    { key: "T", desc: "Xem Dòng thời gian 1939 - 1945" },
    { key: "Esc", desc: "Thoát chế độ Toàn màn hình / Đóng bảng trợ giúp" },
  ];

  return (
    <div className="no-print fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF6F0] border border-amber-900/20 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-900/15">
          <div className="flex items-center space-x-2 text-red-800">
            <Keyboard className="w-5 h-5" />
            <h3 className="font-bold text-base font-serif-title text-stone-900">
              HƯỚNG DẪN PHÍM TẮT ĐIỀU KHIỂN
            </h3>
          </div>
          <button
            onClick={() => setShowHelp(false)}
            className="p-1 rounded-md text-stone-500 hover:text-stone-900 hover:bg-amber-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2.5 mb-6">
          {shortcuts.map((sc, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-amber-900/10">
              <span className="font-mono font-bold text-red-800 px-2.5 py-0.5 rounded bg-amber-100/80 border border-amber-300">
                {sc.key}
              </span>
              <span className="text-stone-700 font-sans">{sc.desc}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowHelp(false)}
          className="w-full py-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-amber-50 font-bold text-xs shadow-md transition"
        >
          Đã Hiểu (Đóng)
        </button>
      </div>
    </div>
  );
}
