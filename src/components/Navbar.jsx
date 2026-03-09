import React from 'react';

/**
 * @component Navbar
 * @description الشعار وزر تغيير اللغة كقطعة مستقلة
 */
export default function Navbar({ lang, toggleLanguage }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-3xl border-b border-white/5 px-6 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-black italic text-white uppercase tracking-tighter">
        ELITE<span className="text-indigo-500">DASH</span>
      </h1>
      <button 
        onClick={toggleLanguage}
        className="px-5 py-2 border border-white/10 rounded-2xl text-[10px] font-black uppercase hover:bg-white/5 transition-all"
      >
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>
    </nav>
  );
}
