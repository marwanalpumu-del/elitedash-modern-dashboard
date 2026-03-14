/**
 * @file App.jsx
 * @version 1.6.0
 * @author Marwan
 * @description Centralized Application Orchestrator for EliteDash.
 * Handles Global States: Auth, Routing, Theme (HSL), and Language (RTL/LTR).
 */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

// Page Imports
import DashboardHome from './pages/DashboardHome';
import Analytics from './pages/Analytics';
import AdminPanel from './pages/AdminPanel';
import ProfileSettings from './pages/ProfileSettings';
import Login from './pages/Login';

export default function App() {
  // --- GLOBAL STATES ---
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('purple'); // Options: purple, ocean, emerald, rose
  const [lang, setLang] = useState('ar');

  // --- SYSTEM CONFIGURATION ---
  const [appConfig, setAppConfig] = useState({
    audioEnabled: true,
  });

  /** * @effect SystemOrchestrator 
   * Syncs Theme, Language, and Document Direction (RTL/LTR)
   */
  useEffect(() => {
    // Sync Theme Attribute
    document.documentElement.setAttribute('data-theme', theme);
    
    // Sync Document Language and Direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [theme, lang]);

  // --- AUTH GUARD ---
  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} lang={lang} />;

  /**
   * @function renderView
   * @description Dynamic Router with transition key to trigger re-animation on tab change.
   */
  const renderView = () => {
    const views = {
      home: <DashboardHome lang={lang} />,
      analytics: <Analytics lang={lang} />,
      admin: <AdminPanel lang={lang} />,
      settings: <ProfileSettings lang={lang} />,
    };
    
    return (
      <div key={activeTab} className="animate-reveal">
        {views[activeTab] || <DashboardHome lang={lang} />}
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 pb-32 transition-colors duration-700 selection:bg-primary/30`}>
      
      {/* HEADER SECTION */}
      <Navbar 
        lang={lang} 
        toggleLanguage={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
        currentTheme={theme} 
        setTheme={setTheme}
        userRole="admin" 
        audioEnabled={appConfig.audioEnabled}
      />
      
      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 pt-4">
        {renderView()}
      </main>

      {/* NAVIGATION SECTION */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
      />
      
    </div>
  );
}
