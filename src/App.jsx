/**
 * @project: EliteDash - Premium Glassmorphism Admin Dashboard
 * @version: 1.0.0
 * @author: Marwan Al-Pumu
 * @description: Core application logic handling routing, localization (RTL/LTR), 
 * and dynamic theme management (Dark/Light mode).
 */

import React, { useState } from 'react';
import { 
  LayoutGrid, FileText, ShoppingCart, Users, Settings, 
  Globe, Sun, Moon, Menu, X, Bell, BarChart3, MessageSquare 
} from 'lucide-react';

// --- PAGE COMPONENTS ---
// Modular imports for better code splitting and maintainability
import DashboardHome from './pages/DashboardHome';
import Invoices from './pages/Invoices';
import Orders from './pages/Orders';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import Analytics from './pages/Analytics'; 
import ChatPage from './pages/ChatPage'; 

export default function App() {
  // --- APPLICATION STATE ---
  // Tracks the active view for conditional rendering
  const [activePage, setActivePage] = useState('dashboard');
  // Localization state: 'ar' for Arabic (RTL), 'en' for English (LTR)
  const [lang, setLang] = useState('ar');
  // Visual theme state: toggle between Dark and Light mode
  const [dark, setDark] = useState(true);
  // Mobile navigation state: controls the sidebar visibility on small screens
  const [sidebar, setSidebar] = useState(false);

  // --- NAVIGATION DATA ---
  // Centralized configuration for the sidebar menu items
  const menu = [
    { id: 'dashboard', icon: <LayoutGrid />, label: lang === 'ar' ? 'الرئيسية' : 'Dashboard' },
    { id: 'analytics', icon: <BarChart3 />, label: lang === 'ar' ? 'التحليلات' : 'Analytics' },
    { id: 'invoices', icon: <FileText />, label: lang === 'ar' ? 'الفواتير' : 'Invoices' },
    { id: 'orders', icon: <ShoppingCart />, label: lang === 'ar' ? 'الطلبات' : 'Orders' },
    { id: 'chat', icon: <MessageSquare />, label: lang === 'ar' ? 'المحادثة' : 'Messages' },
    { id: 'users', icon: <Users />, label: lang === 'ar' ? 'المستخدمين' : 'Users' },
    { id: 'settings', icon: <Settings />, label: lang === 'ar' ? 'الإعدادات' : 'Settings' },
  ];

  return (
    <div 
      className={`min-h-screen flex transition-all duration-500 ${dark ? 'bg-[#030712] text-white' : 'bg-slate-50 text-slate-900'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      
      {/* --- BACKGROUND DECORATION ---
          Floating blur effects to create the premium Glassmorphism atmosphere 
      */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden no-print">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* --- SIDEBAR NAVIGATION ---
          Responsive aside menu with backdrop-blur filters
      */}
      <aside className={`fixed inset-y-0 z-50 w-64 transition-all bg-white/5 backdrop-blur-3xl border-white/10 border-x no-print
        ${sidebar ? 'translate-x-0' : (lang === 'ar' ? 'translate-x-full' : '-translate-x-full')} lg:translate-x-0`}>
        
        <div className="p-8 flex justify-between items-center text-2xl font-black text-indigo-500 italic uppercase tracking-tighter">
          EliteDash
          <button className="lg:hidden text-white" onClick={() => setSidebar(false)}><X /></button>
        </div>

        <nav className="px-4 space-y-2">
          {menu.map(item => (
            <button 
              key={item.id} 
              onClick={() => {setActivePage(item.id); setSidebar(false);}} 
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-[1.5rem] transition-all duration-300 
              ${activePage === item.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
            >
              {item.icon} <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN LAYOUT --- */}
      <main className={`flex-1 lg:p-6 transition-all ${lang === 'ar' ? 'lg:mr-64' : 'lg:ml-64'}`}>
        
        {/* TOP BAR: Controls & Notifications */}
        <header className="sticky top-4 z-40 mx-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 flex justify-between items-center shadow-2xl no-print">
          <button className="lg:hidden p-3 bg-white/5 rounded-xl text-indigo-400" onClick={() => setSidebar(true)}>
            <Menu size={22}/>
          </button>

          <div className="flex items-center gap-3">
            {/* Multi-language Toggle */}
            <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition">
              <Globe size={18}/>
            </button>

            {/* Theme Toggle (Sun/Moon) */}
            <button onClick={() => setDark(!dark)} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>

            {/* Notification Indicator */}
            <div className="relative p-3 bg-white/5 rounded-2xl cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </div>

            {/* User Account Avatar */}
            <div className="w-10 h-10 rounded-full border-2 border-indigo-500 bg-slate-800" />
          </div>
        </header>

        {/* --- DYNAMIC VIEWPORT ---
            Renders the active component based on user selection
        */}
        <div className="p-4 md:p-8 mt-4">
          {activePage === 'dashboard' && <DashboardHome lang={lang} />}
          {activePage === 'analytics' && <Analytics lang={lang} />}
          {activePage === 'invoices' && <Invoices lang={lang} />}
          {activePage === 'orders' && <Orders lang={lang} />}
          {activePage === 'chat' && <ChatPage lang={lang} />}
          {activePage === 'users' && <UsersPage lang={lang} />}
          {activePage === 'settings' && <SettingsPage lang={lang} />}
        </div>
      </main>
    </div>
  );
}
