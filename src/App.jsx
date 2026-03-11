/**
 * @file App.jsx
 * @description Main application controller. Manages dynamic theming and RBAC logic.
 */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import AdminPanel from './pages/AdminPanel';
import Analytics from './pages/Analytics';

export default function App() {
  const [activeTab, setActiveTab] = useState('admin');
  const [theme, setTheme] = useState('purple');
  const [lang, setLang] = useState('ar');

  /** @effect ThemeOrchestrator - Injects protocol colors into the DOM root. */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-300 pb-32 transition-all duration-700`}>
      <Navbar lang={lang} currentTheme={theme} setTheme={setTheme} />
      
      <main className="max-w-7xl mx-auto p-6 animate-in fade-in duration-1000">
        {activeTab === 'admin' && <AdminPanel lang={lang} />}
        {activeTab === 'analytics' && <Analytics lang={lang} />}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} />
    </div>
  );
}
