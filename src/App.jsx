import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import DashboardHome from './pages/DashboardHome';
import Invoices from './pages/Invoices';
import ProfileSecurity from './pages/ProfileSecurity';
import NotificationCenter from './pages/NotificationCenter';
import AdminPanel from './pages/AdminPanel'; // Integrated Admin Module
import Login from './pages/Login';
import './index.css';

/**
 * @file App.jsx
 * @description Master Controller for EliteDash. 
 * Handles Authentication, Role-Based Access Control (RBAC), and Localization.
 */

export default function App() {
  // --- 1. Core Application State ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); // Options: 'user' | 'admin'
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('ar');

  /**
   * @function toggleLanguage
   * @description Switches UI between Arabic (RTL) and English (LTR)
   */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * @function handleLogin
   * @param {string} email - Passed from Login.jsx
   * @description Smart Login Logic: Detects Admin role based on email signature
   */
  const handleLogin = (email = "") => {
    const isRoot = email.toLowerCase().includes('admin');
    
    if (isRoot) {
      setUserRole('admin');
      setActiveTab('admin'); // Redirect Admin to Control Center immediately
    } else {
      setUserRole('user');
      setActiveTab('home'); // Redirect regular users to Home
    }
    
    setIsAuthenticated(true);
  };

  // --- 2. Authentication Guard ---
  // If not logged in, only the Login portal is rendered
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} lang={lang} />;
  }

  /**
   * @function renderActiveTab
   * @description Dynamic Router Switch for Tab Navigation
   * @returns {JSX.Element} The active page component
   */
  const renderActiveTab = () => {
    const content = (() => {
      switch (activeTab) {
        case 'home':      return <DashboardHome lang={lang} />;
        case 'invoices':  return <Invoices lang={lang} />;
        case 'admin':     return <AdminPanel lang={lang} />; // Secured Admin Module
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
      min-h-screen bg-[#020617] text-slate-300 pb-28 transition-colors duration-500
      ${lang === 'ar' ? 'font-sans-ar' : 'font-sans-en'}
      selection:bg-indigo-500/30
    `}>
      {/* Global Header & Navigation */}
      <header className="no-print sticky top-0 z-[60]">
        <Navbar 
          lang={lang} 
          toggleLanguage={toggleLanguage} 
          userRole={userRole} // Pass role to customize navbar UI
        />
      </header>

      {/* Main Application Content */}
      <main className="max-w-[1440px] mx-auto p-4 lg:p-10 min-h-[calc(100vh-160px)]">
        {renderActiveTab()}
      </main>

      {/* Responsive Navigation for Mobile/Desktop */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 no-print">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none h-24 -top-24" />
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
          userRole={userRole} // Restricted tabs for unauthorized users
        />
      </nav>
    </div>
  );
}
