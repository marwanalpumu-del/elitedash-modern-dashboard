import React, { useState } from 'react'; // هنا تم تصحيح حرف i
import { motion, AnimatePresence } from 'framer-motion';
import DashboardHome from './pages/DashboardHome';
import ProfileSettings from './pages/ProfileSettings';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen relative bg-[#020617] overflow-hidden">
      {/* 🌌 إضاءة خلفية سينمائية - لرفع الجودة البصرية */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="relative z-10 container mx-auto px-6 pt-12 pb-32">
        <header className="mb-12 flex justify-between items-center">
          <div className="animate-reveal">
            <h1 className="text-4xl selling-text">ELITEDASH</h1>
            <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 mt-2">Protocol v2.0.4 Premium</p>
          </div>
          <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'home' ? <DashboardHome /> : <ProfileSettings />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 📱 شريط التنقل السفلي - التصميم البيعي النظيف */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-[3rem] flex gap-12 z-50 shadow-2xl">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'home' ? 'text-purple-400 scale-110' : 'text-slate-500'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setActiveTab('settings')} 
          className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'text-purple-400 scale-110' : 'text-slate-500'}`}
        >
          Settings
        </button>
      </nav>
    </div>
  );
}
