/**
 * @file App.jsx
 * @description The Ultimate Orchestrator for EliteDash.
 * Combines advanced memoization, dynamic routing, and premium UI standards.
 * Standards: Global Marketplace Ready (Anti-Print, Multi-Lang, Smooth Transitions).
 */

import React, { useState, useCallback, useMemo } from 'react';

// --- Shared Components ---
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

// --- Page & Module Imports ---
import DashboardHome from './pages/DashboardHome';
import Invoices from './pages/Invoices';
import ProfileSecurity from './pages/ProfileSecurity';
import NotificationCenter from './pages/NotificationCenter';

// --- Global Styles ---
import './index.css';

export default function App() {
  /** * @state activeTab - State-based routing for instant page switching.
   * Options: 'home', 'invoices', 'security', 'alerts'
   */
  const [activeTab, setActiveTab] = useState('home');

  /** @state lang - Global localization controller */
  const [lang, setLang] = useState('ar');

  /**
   * @function toggleLanguage
   * @description Professional memoized toggle to prevent unnecessary re-renders.
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function renderActiveTab
   * @description Centralized rendering engine with smooth entry animations.
   */
  const renderActiveTab = () => {
    const content = (() => {
      switch (activeTab) {
        case 'home':
          return <DashboardHome lang={lang} />;
        case 'invoices':
          return <Invoices lang={lang} />;
        case 'security':
          return <ProfileSecurity lang={lang} />;
        case 'alerts':
          return <NotificationCenter lang={lang} />;
        default:
          return <DashboardHome lang={lang} />;
      }
    })();

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        {content}
      </div>
    );
  };

  return (
    <div className={`
      min-h-screen bg-[#020617] text-slate-300 pb-28 transition-colors duration-500
      ${lang === 'ar' ? 'font-sans-ar tracking-normal' : 'font-sans-en tracking-tight'}
      selection:bg-indigo-500/30 selection:text-indigo-200
    `}>
      
      {/* 1. TOP NAVIGATION: Anti-Print enabled for clean reports */}
      <header className="no-print sticky top-0 z-[60]">
        <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      </header>

      {/* 2. VIEWPORT: Responsive container with dynamic max-width */}
      <main className="max-w-[1440px] mx-auto p-4 lg:p-10 min-h-[calc(100vh-160px)]">
        {renderActiveTab()}
      </main>

      {/* 3. CONTROLLER: Fixed position with glass effect overlay */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 no-print">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none h-24 -top-24" />
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
        />
      </nav>
      
    </div>
  );
}
