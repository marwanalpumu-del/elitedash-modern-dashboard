import React from 'react';
import { Home, FileText, BarChart3, Shield, Bell } from 'lucide-react';

/**
 * @component BottomNav
 * @version 1.2.0
 * @description High-end mobile navigation controller featuring glassmorphism effects, 
 * dynamic active states, and cross-protocol color synchronization.
 * Supports dual-language labels (AR/EN) and smooth micro-interactions.
 */
export default function BottomNav({ activeTab, setActiveTab, lang }) {
  
  /**
   * @constant navItems
   * @description Data structure for navigation nodes. 
   * Includes icons and localized string identifiers.
   */
  const navItems = [
    { id: 'home', icon: <Home size={22} />, labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'invoices', icon: <FileText size={22} />, labelAr: 'الفواتير', labelEn: 'Billing' },
    { id: 'analytics', icon: <BarChart3 size={22} />, labelAr: 'التحليلات', labelEn: 'Analytics' },
    { id: 'security', icon: <Shield size={22} />, labelAr: 'الأمان', labelEn: 'Security' },
    { id: 'alerts', icon: <Bell size={22} />, labelAr: 'التنبيهات', labelEn: 'Alerts' },
  ];

  return (
    <div className="w-full flex justify-center px-4 pb-6">
      {/* Main Dock: Implementing Backdrop Blur (Glassmorphism) 
          and Dynamic Shadow Protocols for high-end depth.
      */}
      <div className="w-full max-w-lg bg-[#0b0f1a]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-around relative">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center py-3 px-3 sm:px-4 rounded-3xl transition-all duration-500 group outline-none"
            >
              {/* Active Pulse Indicator: 
                  Synchronized with the Global Theme Variable (--primary).
              */}
              {isActive && (
                <div 
                  style={{ backgroundColor: 'rgb(var(--primary) / 0.1)' }}
                  className="absolute inset-0 rounded-3xl animate-pulse" 
                />
              )}

              {/* Icon Engine: 
                  Features conditional scaling and CSS Filter-based glow.
              */}
              <div className={`relative z-10 transition-all duration-300 ${
                isActive 
                ? 'scale-110' 
                : 'text-slate-500 group-hover:text-slate-300'
              }`}
              style={{ 
                color: isActive ? 'rgb(var(--primary))' : undefined,
                filter: isActive ? 'drop-shadow(0 0 8px rgb(var(--primary) / 0.6))' : 'none'
              }}>
                {item.icon}
              </div>

              {/* Localized Label Logic: 
                  Toggles between Arabic/English based on global lang state.
              */}
              <span className={`relative z-10 text-[8px] font-black uppercase mt-1.5 tracking-tighter transition-all duration-300 ${
                isActive ? 'text-white opacity-100 scale-100' : 'text-slate-600 opacity-0 h-0 overflow-hidden'
              }`}>
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </span>

              {/* Tactile Underline Indicator: 
                  A minimal dot signifying the current active protocol node.
              */}
              {isActive && (
                <div 
                  style={{ backgroundColor: 'rgb(var(--primary))', boxShadow: '0 0 10px rgb(var(--primary))' }}
                  className="absolute -bottom-1 w-1 h-1 rounded-full" 
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
