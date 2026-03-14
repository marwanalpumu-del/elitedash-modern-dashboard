/**
 * @component BottomNav
 * @version 1.7.1 - Optimized Contrast Update
 */
import React from 'react';
import { Home, BarChart3, Shield, Settings } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, lang = 'ar' }) {
  const isAr = lang === 'ar';

  const navItems = [
    { id: 'home', icon: <Home size={20} />, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'analytics', icon: <BarChart3 size={20} />, labelAr: 'التحليلات', labelEn: 'Stats' },
    { id: 'admin', icon: <Shield size={20} />, labelAr: 'الإدارة', labelEn: 'Admin' },
    { id: 'settings', icon: <Settings size={20} />, labelAr: 'الإعدادات', labelEn: 'Setup' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 px-6 pb-8 flex justify-center z-[100] pointer-events-none">
      <div className="w-full max-w-[440px] glass-panel rounded-[2.5rem] p-2 flex items-center justify-around pointer-events-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-white/5">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                // ميزة إضافية: اهتزاز خفيف إذا كان الجوال يدعم ذلك
                if (window.navigator.vibrate) window.navigator.vibrate(10);
              }}
              className="relative flex-1 flex flex-col items-center py-2 transition-all duration-300 outline-none select-none active:scale-90 group"
            >
              {isActive && (
                <div 
                  className="absolute inset-x-2 inset-y-1 bg-primary/5 rounded-[1.5rem] animate-reveal border border-primary/10"
                />
              )}
              
              <div 
                className={`relative z-10 transition-all duration-500 ease-out ${
                  isActive ? 'scale-110 -translate-y-1.5' : 'text-slate-400 opacity-50'
                }`}
                style={{ color: isActive ? 'hsl(var(--primary))' : undefined }}
              >
                <div className={isActive ? 'text-glow' : ''}>
                  {item.icon}
                </div>
              </div>
              
              <span className={`text-[9px] font-black uppercase mt-1 tracking-[0.15em] transition-all duration-500 font-sans-ar ${
                isActive ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-2'
              }`}>
                {isAr ? item.labelAr : item.labelEn}
              </span>

              {/* Active Indicator Dot */}
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 mt-1 ${
                isActive ? 'bg-primary scale-100 shadow-[0_0_10px_hsl(var(--primary))]' : 'opacity-0 scale-0'
              }`} 
              style={{ backgroundColor: 'hsl(var(--primary))' }}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
