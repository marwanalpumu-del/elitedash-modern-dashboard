import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import DashboardHome from './pages/DashboardHome';
import Invoices from './pages/Invoices';
import ProfileSecurity from './pages/ProfileSecurity';
import NotificationCenter from './pages/NotificationCenter';
import Login from './pages/Login'; // أضفنا صفحة اللوجن
import './index.css';

export default function App() {
  // 1. أضفنا حالة الدخول (تبدأ بـ false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('ar');

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  // دالة لتسجيل الدخول
  const handleLogin = () => setIsAuthenticated(true);

  // --- إذا لم يسجل الدخول، اعرض صفحة اللوجن فقط ---
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} lang={lang} />;
  }

  // --- إذا سجل الدخول، اعرض الكود الخاص بك كما هو ---
  const renderActiveTab = () => {
    const content = (() => {
      switch (activeTab) {
        case 'home': return <DashboardHome lang={lang} />;
        case 'invoices': return <Invoices lang={lang} />;
        case 'security': return <ProfileSecurity lang={lang} />;
        case 'alerts': return <NotificationCenter lang={lang} />;
        default: return <DashboardHome lang={lang} />;
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
      <header className="no-print sticky top-0 z-[60]">
        <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      </header>

      <main className="max-w-[1440px] mx-auto p-4 lg:p-10 min-h-[calc(100vh-160px)]">
        {renderActiveTab()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 no-print">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none h-24 -top-24" />
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          lang={lang} 
        />
      </nav>
    </div>
  );
}
