import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import DashboardHome from './pages/DashboardHome';
import Analytics from './pages/Analytics'; 
import AdminPanel from './pages/AdminPanel';
import SystemSettings from './pages/SystemSettings';
import Login from './pages/Login';

/**
 * @file App.jsx
 * @author Marwan
 * @version 1.3.0
 * @description Centralized Application Controller.
 * Manages Global States: Authentication, Role-Based Access Control (RBAC), 
 * Localization (i18n), and Dynamic Theme Protocols.
 */
export default function App() {
  // --- STATE MANAGEMENT ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); 
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('ar');
  const [theme, setTheme] = useState('purple'); 

  /**
   * @constant appConfig
   * @description Global configuration object for UI behaviors and system features.
   */
  const [appConfig, setAppConfig] = useState({
    siteName: 'ELITEDASH',
    audioEnabled: true, 
  });

  /**
   * @effect ThemeOrchestrator
   * @description Synchronizes the 'data-theme' attribute on the document root 
   * to trigger CSS variable swaps defined in index.css.
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * @function toggleLanguage
   * @description Memoized callback to switch between Arabic (RTL) and English (LTR).
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function handleLogin
   * @param {string} email - User identifier to determine access level.
   * @description Validates user credentials and assigns 'admin' or 'user' roles.
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

  if (!isAuthenticated) return <Login onLogin={handleLogin} lang={lang} />;

  /**
   * @function renderActiveTab
   * @returns {JSX.Element} The component corresponding to the current activeTab state.
   */
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':      return <DashboardHome lang={lang} />;
      case 'analytics': return <Analytics lang={lang} />;
      case 'admin':     return <AdminPanel lang={lang} />; 
      case 'settings':  return <SystemSettings lang={lang} config={appConfig} setConfig={setAppConfig} />;
      default:          return <DashboardHome lang={lang} />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 pb-28 ${lang === 'ar' ? 'font-sans-ar' : 'font-sans-en'}`}>
      <Navbar lang={lang} toggleLanguage={toggleLanguage} userRole={userRole} currentTheme={theme} setTheme={setTheme} />
      <main className="max-w-[1440px] mx-auto p-4 lg:p-10">
        {renderActiveTab()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} />
    </div>
  );
}
