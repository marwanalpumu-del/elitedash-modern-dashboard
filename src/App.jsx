/**
 * @file App.jsx
 * @version 1.6.1
 * @author Marwan
 * @description Centralized Application Orchestrator for EliteDash with Safe-Area padding.
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
  // --- 1. GLOBAL STATES ---
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('purple'); 
  const [lang, setLang] = useState('ar');

  // --- 2. SYSTEM CONFIGURATION ---
  const [appConfig] = useState({
    audioEnabled: true,
  });

  /** * @effect SystemOrchestrator 
   * لمزامنة اللغة، الاتجاه، والثيم
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    if (lang === 'ar') {
      document.body.classList.add('font-sans-ar');
    } else {
      document.body.classList.remove('font-sans-ar');
    }
  }, [theme, lang]);

  // --- 3. AUTH GUARD ---
  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} lang={lang} />;

  /**
   * @function renderView
   * نظام التوجيه الداخلي
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
    <div className="min-h-screen bg-[#020617] text-slate-200 transition-colors duration-700">
      
      {/* 1. NAVBAR: القائمة العلوية */}
      <Navbar 
        lang={lang} 
        toggleLanguage={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
        currentTheme={theme} 
        setTheme={setTheme}
        userRole="admin" 
        audioEnabled={appConfig.audioEnabled}
      />
      
      {/* 2. MAIN CONTENT: منطقة المحتوى مع مساحة الأمان الجديدة */}
      <main className="container mx-auto px-4 pb-24 pt-6 md:px-8 lg:px-12 lg:pt-10">
        <div className="max-w-[1600px] mx-auto">
          {renderView()}
        </div>
      </main>

      {/* 3. NAVIGATION: شريط التنقل السفلي */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
      />
      
    </div>
  );
}
