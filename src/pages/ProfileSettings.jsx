/**
 * @component ProfileSettings
 * @version 1.2.0
 * @author Marwan & EliteDash UI
 * @description Advanced security & identity node configuration.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Key, Mail, Camera, CheckCircle, Smartphone } from 'lucide-react';

export default function ProfileSettings({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-reveal pb-10 px-2">
      
      {/* 1. SUCCESS NOTIFICATION */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -40, x: '-50%' }}
            className="fixed top-10 left-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.4)] flex items-center gap-4 font-black uppercase text-[10px] tracking-widest border border-emerald-400/20"
          >
            <CheckCircle size={20} />
            {isAr ? 'تم تحديث البروتوكولات بنجاح' : 'Security Protocols Synced'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PROFILE HEADER */}
      <div className="glass-panel p-8 md:p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent p-1 shadow-2xl group-hover:rotate-12 transition-transform duration-700">
             <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center overflow-hidden border-4 border-[#020617]">
                <User size={60} className="text-primary opacity-40 group-hover:scale-110 transition-transform" />
             </div>
          </div>
          <button className="absolute bottom-1 right-1 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 active:scale-90 transition-all border border-white/20">
            <Camera size={16} />
          </button>
        </div>
        
        <div className="text-center md:text-right flex-1">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter text-glow">
            {isAr ? 'مروان المبرمج' : 'Marwan Developer'}
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
               System Rank: <span className="text-primary">Root Administrator</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3. IDENTITY NODE */}
        <section className="glass-panel p-8 rounded-[2.5rem] space-y-6 card-interactive">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <Shield size={16} className="text-primary" />
            {isAr ? 'معلومات الهوية' : 'Identity Node'}
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2 group">
              <label className="text-[9px] font-black text-slate-600 uppercase tracking-widest px-2">{isAr ? 'البريد الإلكتروني' : 'Auth Email'}</label>
              <div className="relative">
                <Mail className={`absolute ${isAr ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors`} size={16} />
                <input 
                  type="email" 
                  defaultValue="admin@elitedash.com" 
                  className={`w-full bg-[#020617]/50 border border-white/5 rounded-2xl py-4 ${isAr ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'} text-xs text-white focus:border-primary/50 outline-none transition-all`} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECURITY NODE */}
        <section className="glass-panel p-8 rounded-[2.5rem] space-y-6 card-interactive">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <Key size={16} className="text-accent" />
            {isAr ? 'تشفير المفتاح' : 'Key Encryption'}
          </h3>
          
          <div className="space-y-4">
            <div className="relative group">
              <input 
                type="password" 
                placeholder="••••••••" 
                className={`w-full bg-[#020617]/50 border border-white/5 rounded-2xl py-4 px-6 text-xs text-white focus:border-accent/50 outline-none transition-all ${isAr ? 'text-right' : 'text-left'}`} 
              />
            </div>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                 <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="h-full bg-accent shadow-[0_0_10px_hsla(var(--accent),0.5)] rounded-full" />
               </div>
               <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest text-center">Entropy Strength: <span className="text-accent">High</span></p>
            </div>
          </div>
        </section>
      </div>

      {/* 5. GLOBAL SYNC ACTION */}
      <button 
        onClick={handleSave}
        disabled={isSaving}
        className="w-full py-6 bg-primary hover:brightness-110 disabled:bg-slate-800 text-white font-black uppercase text-[11px] tracking-[0.4em] rounded-3xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-3">
          {isSaving ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {isAr ? 'مزامنة كافة البروتوكولات' : 'Sync All Protocols'}
              <CheckCircle size={18} className="group-hover:scale-125 transition-transform" />
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
      </button>
    </div>
  );
}
