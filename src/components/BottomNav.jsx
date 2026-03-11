/**
 * @component BottomNav
 * @version 1.6.0
 * @description Advanced Navigation Orchestrator. 
 * Linked to: Home, Analytics, Admin Center, and Security Settings.
 */
import React from 'react';
import { Home, BarChart3, Shield, Settings, Bell } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, lang }) {
  const isAr = lang === 'ar';

  /** * @constant navItems
   * @description Updated navigation schema to include all system modules.
   */
  const navItems = [
    { id: 'home', icon: <Home size={22} />, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'analytics', icon: <BarChart3 size={22} />, labelAr: 'التحليلات', labelEn: 'Charts' },
    { id: 'admin', icon: <Shield size={22} />, labelAr: 'الإدارة', labelEn: 'Admin' },
    { id: 'settings', icon: <Settings size={22} />, labelAr: 'الإعدادات', labelEn: 'Settings' },
  ];

  return (
    <div className="w-full flex justify-center px-4 pb-6 fixed bottom-0 z-50">
      <div className="w-full max-w-[440px] bg-[#0b0f1a]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-2 flex items-center justify-between shadow-2xl relative overflow-hidden">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex-1 flex flex-col items-center py-3 px-1 transition-all duration-300 active:scale-90"
            >
              {/* INDICATOR: DYNAMIC GLOW */}
              {isActive && (
                <div 
                  className="absolute inset-x-2 inset-y-1 bg-white/5 rounded-2xl"
                  style={{ boxShadow: '0 0 20px rgba(var(--primary), 0.1)' }}
                />
              )}
              
              <div 
                className={`relative z-10 transition-transform duration-500 ${isActive ? 'scale-110 -translate-y-1' : 'text-slate-500 hover:text-slate-400'}`}
                style={{ color: isActive ? 'rgb(var(--primary))' : undefined }}
              >
                {item.icon}
              </div>
              
              <span className={`text-[8px] font-black uppercase mt-1 tracking-tighter transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-2'}`}>
                {isAr ? item.labelAr : item.labelEn}
              </span>

              {/* ACTIVE DOT */}
              {isActive && (
                <div className="w-1 h-1 rounded-full mt-1 animate-pulse" style={{ backgroundColor: 'rgb(var(--primary))' }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
