/**
 * @file App.jsx
 * @version 1.7.0
 * @author Marwan
 * @description Centralized Application Orchestrator with Dynamic Background Glows.
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
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('purple'); 
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang === 'ar' ? 'font-sans-ar' : '';
  }, [theme, lang]);

  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} lang={lang} />;

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
    <div className="min-h-screen bg-[#020617] text-slate-200 transition-colors duration-700 relative overflow-hidden">
      
      {/* 🌌 تأثيرات الإضاءة الخلفية (Glows) - لمنع "البهذلة" والسواد القاتل */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. NAVBAR */}
      <div className="relative z-50">
        <Navbar 
          lang={lang} 
          toggleLanguage={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
          currentTheme={theme} 
          setTheme={setTheme}
          userRole="admin" 
        />
      </div>
      
      {/* 2. MAIN CONTENT */}
      <main className="container mx-auto px-4 pb-28 pt-8 relative z-10 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {renderView()}
        </div>
      </main>

      {/* 3. NAVIGATION */}
      <div className="relative z-50">
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
        />
      </div>
      
    </div>
  );
}
