import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import DashboardHome from './pages/DashboardHome';
import Invoices from './pages/Invoices';
import ProfileSecurity from './pages/ProfileSecurity';
import NotificationCenter from './pages/NotificationCenter';
import AdminPanel from './pages/AdminPanel'; 
import Login from './pages/Login';
import './index.css';

/**
 * @file App.jsx
 * @version 1.1.0
 * @description Master Controller for EliteDash. 
 * Features: RBAC, Multi-language Support, and Dynamic "Color Protocol" System.
 */

export default function App() {
  // --- 1. Application States ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); 
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('ar');
  
  // --- COLOR PROTOCOL STATE ---
  const [theme, setTheme] = useState('purple'); // Options: 'purple' | 'ocean' | 'emerald'

  /**
   * @effect Theme Orchestrator
   * @description Injects the selected theme protocol into the DOM root
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * @function toggleLanguage
   * @description Handlers RTL/LTR switching for Internationalization
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function handleLogin
   * @param {string} email - Auth identifier
   * @description Determines access level and initial view upon login
   */
  const handleLogin = (email = "") => {
    const isRoot = email.toLowerCase().includes('admin');
    
    if (isRoot) {
      setUserRole('admin');
      setActiveTab('admin');
    } else {
      setUserRole('user');
      setActiveTab('home');
    }
    
    setIsAuthenticated(true);
  };

  // --- 2. Auth Guard Component ---
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} lang={lang} />;
  }

  /**
   * @function renderActiveTab
   * @description View Engine for dynamic page rendering
   */
  const renderActiveTab = () => {
    const content = (() => {
      switch (activeTab) {
        case 'home':      return <DashboardHome lang={lang} />;
        case 'invoices':  return <Invoices lang={lang} />;
        case 'admin':     return <AdminPanel lang={lang} />; 
        case 'security':  return <ProfileSecurity lang={lang} />;
        case 'alerts':    return <NotificationCenter lang={lang} />;
        default:          return <DashboardHome lang={lang} />;
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
      min-h-screen bg-[#020617] text-slate-300 pb-28 transition-all duration-700
      ${lang === 'ar' ? 'font-sans-ar' : 'font-sans-en'}
      selection:bg-indigo-500/30
    `}>
      {/* Global Header with Color Protocol Controls */}
      <header className="no-print sticky top-0 z-[60]">
        <Navbar 
          lang={lang} 
          toggleLanguage={toggleLanguage} 
          userRole={userRole}
          currentTheme={theme}
          setTheme={setTheme} // Passing setter to allow Navbar to switch colors
        />
      </header>

      {/* Main Viewport */}
      <main className="max-w-[1440px] mx-auto p-4 lg:p-10 min-h-[calc(100vh-160px)]">
        {renderActiveTab()}
      </main>

      {/* Persistent Navigation Dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 no-print">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none h-24 -top-24" />
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
          userRole={userRole}
        />
      </nav>
    </div>
  );
}
