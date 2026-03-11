/**
 * @file App.jsx
 * @version 1.5.0
 * @description Centralized Application Orchestrator. 
 * Manages Auth, RBAC, Protocols, and Routing.
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
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to false for production
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('purple');
  const [lang, setLang] = useState('ar');

  // --- SYSTEM CONFIGURATION ---
  const [appConfig, setAppConfig] = useState({
    audioEnabled: true,
  });

  /** @effect ThemeOrchestrator - Syncs UI with selected Protocol */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // --- AUTH GUARD ---
  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} lang={lang} />;

  /**
   * @function renderView
   * @description Dynamic Router based on activeTab state.
   */
  const renderView = () => {
    switch (activeTab) {
      case 'home':      return <DashboardHome lang={lang} />;
      case 'analytics': return <Analytics lang={lang} />;
      case 'admin':     return <AdminPanel lang={lang} />;
      case 'settings':  return <ProfileSettings lang={lang} />;
      default:          return <DashboardHome lang={lang} />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 pb-32 transition-all duration-700 ${lang === 'ar' ? 'font-sans-ar text-right' : 'font-sans-en text-left'}`}>
      
      <Navbar 
        lang={lang} 
        toggleLanguage={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
        currentTheme={theme} 
        setTheme={setTheme}
        userRole="admin" 
        audioEnabled={appConfig.audioEnabled}
      />
      
      <main className="max-w-7xl mx-auto p-4 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {renderView()}
      </main>

      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
      />
      
    </div>
  );
}
