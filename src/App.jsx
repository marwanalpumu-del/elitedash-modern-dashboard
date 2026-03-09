/**
 * @file App.jsx
 * @description Main entry point for EliteDash. 
 * Handles routing logic, internationalization state, and core layout structure.
 * @version 1.0.0
 * @license MIT
 */

import React, { useState, useCallback } from 'react';

// --- Component Imports ---
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

// --- Page Imports ---
import OrderTerminal from './pages/OrderTerminal';
import ProfileSecurity from './pages/ProfileSecurity';
import NotificationCenter from './pages/NotificationCenter';

// --- Global Styles ---
import './index.css';

/**
 * @component App
 * @description Root component implementing the main dashboard architecture.
 */
export default function App() {
  /** @state {string} activeTab - Manages current navigation state */
  const [activeTab, setActiveTab] = useState('orders');

  /** @state {string} lang - Manages localization state (ar/en) */
  const [lang, setLang] = useState('ar');

  /**
   * @function toggleLanguage
   * @description Memoized function to toggle between RTL and LTR layouts.
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function renderActiveTab
   * @description Dynamic content renderer based on navigation state.
   * @returns {JSX.Element}
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
      
      {/* Shared Header Component */}
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />

      {/* Main Viewport */}
      <main className="max-w-6xl mx-auto p-6 lg:p-12">
        {renderActiveTab()}
      </main>

      {/* Navigation Controller */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
      />
      
    </div>
  );
}
