/**
 * @file App.jsx
 * @version 1.6.0
 * @author Marwan
 * @description Centralized Application Orchestrator for EliteDash.
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
  const [theme, setTheme] = useState('purple'); // purple, ocean, emerald, rose
  const [lang, setLang] = useState('ar');

  // --- 2. SYSTEM CONFIGURATION ---
  const [appConfig] = useState({
    audioEnabled: true,
  });

  /** * @effect SystemOrchestrator 
   * يقوم بمزامنة اللغة، الاتجاه (RTL/LTR)، والثيم مع الـ DOM الأساسي
   */
  useEffect(() => {
    // تحديث السمة الخاصة بالثيم (يمكن استخدامها في CSS لتغيير المتغيرات)
    document.documentElement.setAttribute('data-theme', theme);
    
    // ضبط اتجاه الصفحة واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // إضافة كلاس للتحكم في الخطوط بناءً على اللغة
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
   * @description نظام توجيه داخلي (Internal Router) مع أنيميشن عند التبديل
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
    <div className="min-h-screen bg-[#020617] text-slate-200 pb-28 md:pb-10 transition-colors duration-700">
      
      {/* 1. NAVBAR: ثابت في الأعلى (Desktop) أو مدمج (Mobile) */}
      <Navbar 
        lang={lang} 
        toggleLanguage={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
        currentTheme={theme} 
        setTheme={setTheme}
        userRole="admin" 
        audioEnabled={appConfig.audioEnabled}
      />
      
      {/* 2. MAIN CONTENT: حاوية متجاوبة بذكاء */}
      <main className="container mx-auto px-4 md:px-8 lg:px-12 pt-6 lg:pt-10">
        <div className="max-w-[1600px] mx-auto">
          {renderView()}
        </div>
      </main>

      {/* 3. NAVIGATION: شريط سفلي للجوال والتابلت */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
      />
      
    </div>
  );
}
