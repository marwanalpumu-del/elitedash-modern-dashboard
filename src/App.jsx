/**
 * @file App.jsx
 * @description The main entry point for the EliteDash terminal. 
 * Manages global state, localization, and dynamic component rendering.
 * @author [Your Name/Brand]
 * @version 1.0.0
 * @license MIT
 */

import React, { useState, useCallback } from 'react';
import OrderTerminal from './OrderTerminal';
import ProfileSecurity from './ProfileSecurity';
import NotificationCenter from './NotificationCenter';
import { LayoutDashboard, ShieldCheck, Bell } from 'lucide-react';

/**
 * @component App
 * @description The root component that houses the navigation and sub-modules.
 * @returns {JSX.Element} The rendered dashboard layout.
 */
export default function App() {
  /** @state {string} activeTab - Determines which view is currently visible. */
  const [activeTab, setActiveTab] = useState('orders');

  /** @state {string} lang - Global language state ('ar' for Arabic, 'en' for English). */
  const [lang, setLang] = useState('ar');

  /**
   * @function toggleLanguage
   * @description Switches the dashboard language between Arabic and English.
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function renderActiveTab
   * @description Selectively renders the component based on the active tab state.
   * @returns {JSX.Element} The selected sub-component.
   */
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'orders':
        return <OrderTerminal lang={lang} />;
      case 'security':
        return <ProfileSecurity lang={lang} />;
      case 'alerts':
        return <NotificationCenter lang={lang} />;
      default:
        return <OrderTerminal lang={lang} />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 pb-24 ${lang === 'ar' ? 'font-sans-ar' : 'font-sans-en'}`}>
      
      {/* --- HEADER NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-3xl border-b border-white/5 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-black italic text-white uppercase tracking-tighter group cursor-default">
            ELITE<span className="text-indigo-500 transition-colors group-hover:text-indigo-400">DASH</span>
          </h1>
        </div>
        
        <button 
          onClick={toggleLanguage}
          className="px-5 py-2 border border-white/10 rounded-2xl text-[10px] font-black uppercase hover:bg-white/5 active:scale-95 transition-all tracking-widest"
        >
          {lang === 'ar' ? 'English Interface' : 'الواجهة العربية'}
        </button>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-6xl mx-auto p-6 lg:p-12">
        {renderActiveTab()}
      </main>

      {/* --- MOBILE-OPTIMIZED BOTTOM BAR --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-2xl border-t border-white/5 p-4 flex justify-around items-center shadow-2xl">
        <TabButton 
          active={activeTab === 'orders'} 
          icon={LayoutDashboard} 
          label={lang === 'ar' ? 'الأصول' : 'Orders'} 
          onClick={() => setActiveTab('orders')} 
        />
        <TabButton 
          active={activeTab === 'security'} 
          icon={ShieldCheck} 
          label={lang === 'ar' ? 'الأمان' : 'Security'} 
          onClick={() => setActiveTab('security')} 
        />
        <TabButton 
          active={activeTab === 'alerts'} 
          icon={Bell} 
          label={lang === 'ar' ? 'التنبيهات' : 'Alerts'} 
          onClick={() => setActiveTab('alerts')} 
        />
      </nav>
    </div>
  );
}

/**
 * @component TabButton
 * @description A reusable button component for the bottom navigation bar.
 * @param {Object} props - Component properties.
 * @param {boolean} props.active - Whether the tab is currently active.
 * @param {React.ElementType} props.icon - Lucide icon component.
 * @param {string} props.label - Display label for the button.
 * @param {Function} props.onClick - Click handler function.
 */
function TabButton({ active, icon: Icon, label, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${active ? 'text-indigo-400 scale-110' : 'text-slate-600 hover:text-slate-400'}`}
    >
      <Icon size={22} strokeWidth={active ? 2.5 : 2} />
      <span className="text-[9px] font-black uppercase tracking-[0.15em]">{label}</span>
      {active && <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>}
    </button>
  );
}
