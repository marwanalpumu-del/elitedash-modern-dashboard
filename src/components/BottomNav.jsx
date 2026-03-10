/**
 * @component BottomNav
 * @description Ultra-premium navigation bar with dynamic active states and glassmorphism.
 * Optimized for: Mobile-first responsiveness and high-end Dark Mode aesthetics.
 */

import React from 'react';
import { Home, FileText, Shield, Bell } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, lang }) {
  
  // Navigation Configuration
  const navItems = [
    { id: 'home', icon: <Home size={22} />, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'invoices', icon: <FileText size={22} />, labelAr: 'الفواتير', labelEn: 'Billing' },
    { id: 'security', icon: <Shield size={22} />, labelAr: 'الأمان', labelEn: 'Security' },
    { id: 'alerts', icon: <Bell size={22} />, labelAr: 'التنبيهات', labelEn: 'Alerts' },
  ];

  return (
    <div className="w-full flex justify-center px-4 pb-6">
      {/* Main Container: Glassmorphism Effect */}
      <div className="w-full max-w-md bg-[#0b0f1a]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-around relative">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center py-3 px-4 rounded-3xl transition-all duration-500 group"
            >
              {/* Active Glow Indicator */}
              {isActive && (
                <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl animate-pulse" />
              )}

              {/* Icon Logic */}
              <div className={`relative z-10 transition-all duration-300 ${
                isActive 
                ? 'text-indigo-400 scale-110 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]' 
                : 'text-slate-500 group-hover:text-slate-300'
              }`}>
                {item.icon}
              </div>

              {/* Dynamic Label */}
              <span className={`relative z-10 text-[9px] font-black uppercase mt-1 tracking-widest transition-all duration-300 ${
                isActive ? 'text-white opacity-100' : 'text-slate-600 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto'
              }`}>
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </span>

              {/* Underline Dot */}
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
