/**
 * @component BottomNav
 * @version 1.7.0
 * @description Advanced Mobile Navigation UI with HSL dynamic colors.
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
    // Fixed container with safe area padding for modern smartphones
    <nav className="fixed bottom-0 left-0 right-0 px-4 pb-6 flex justify-center z-[100] pointer-events-none">
      <div className="w-full max-w-[420px] glass-panel rounded-[2rem] p-1.5 flex items-center justify-around pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex-1 flex flex-col items-center py-2.5 transition-all duration-500 outline-none select-none active:scale-95 group"
            >
              {/* Dynamic Indicator Background */}
              {isActive && (
                <div 
                  className="absolute inset-x-1 inset-y-1 bg-white/[0.03] rounded-[1.5rem] animate-reveal"
                  style={{ border: '1px solid hsla(var(--primary), 0.1)' }}
                />
              )}
              
              <div 
                className={`relative z-10 transition-all duration-500 ease-out ${
                  isActive ? 'scale-110 -translate-y-1 text-white' : 'text-slate-500 opacity-60'
                }`}
                style={{ color: isActive ? 'hsl(var(--primary))' : undefined }}
              >
                {/* Icon with glow effect when active */}
                <div className={isActive ? 'text-glow' : ''}>
                  {item.icon}
                </div>
              </div>
              
              <span className={`text-[8px] font-black uppercase mt-1 tracking-widest transition-all duration-500 font-sans-ar ${
                isActive ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-2'
              }`}>
                {isAr ? item.labelAr : item.labelEn}
              </span>

              {/* Minimalist Active Dot */}
              <div className={`w-1 h-1 rounded-full transition-all duration-700 mt-0.5 ${
                isActive ? 'bg-primary opacity-100 scale-100 shadow-[0_0_8px_hsl(var(--primary))]' : 'opacity-0 scale-0'
              }`} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
