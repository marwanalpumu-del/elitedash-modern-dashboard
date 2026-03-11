import React from 'react';
import { Home, FileText, BarChart3, Shield, Bell } from 'lucide-react';

/**
 * @component BottomNav
 * @description Specialized mobile-first navigation dock.
 * Features: High-fidelity backdrop blur, reactive scaling, and micro-animations.
 * @param {string} activeTab - Currently selected navigation node.
 * @param {function} setActiveTab - Dispatcher function to update parent state.
 */
export default function BottomNav({ activeTab, setActiveTab, lang }) {
  
  const navItems = [
    { id: 'home', icon: <Home size={22} />, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'analytics', icon: <BarChart3 size={22} />, labelAr: 'التحليلات', labelEn: 'Charts' },
    { id: 'alerts', icon: <Bell size={22} />, labelAr: 'التنبيهات', labelEn: 'Alerts' },
  ];

  return (
    <div className="w-full flex justify-center px-4 pb-6 fixed bottom-0 z-50">
      <div className="w-full max-w-lg bg-[#0b0f1a]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-2 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center py-3 px-4 transition-all duration-500"
            >
              {/* Active Indicator Glow */}
              {isActive && <div className="absolute inset-0 bg-white/5 rounded-3xl animate-pulse" />}
              
              <div className={`relative z-10 ${isActive ? 'scale-110' : 'text-slate-500'}`}
                   style={{ color: isActive ? 'rgb(var(--primary))' : undefined }}>
                {item.icon}
              </div>
              
              <span className={`text-[8px] font-black uppercase mt-1 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
