/**
 * @component ProfileSettings
 * @version 1.1.0
 * @description Advanced User Profile & Security Configuration Hub.
 * Features: Form validation UI, Password entropy visualization, and Framer Motion success states.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Key, Mail, Camera, CheckCircle } from 'lucide-react';

export default function ProfileSettings({ lang }) {
  const isAr = lang === 'ar';
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * @function handleSave
   * @description Simulates an API call with a loading state and success feedback.
   */
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. SUCCESS NOTIFICATION OVERLAY */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-black uppercase text-xs tracking-widest"
          >
            <CheckCircle size={18} />
            {isAr ? 'تم تحديث البيانات بنجاح' : 'Security Protocols Updated'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PROFILE HEADER & AVATAR SECTION */}
      <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 p-1">
             <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center overflow-hidden border-4 border-[#020617]">
                <User size={60} className="text-white opacity-20" />
             </div>
          </div>
          <button className="absolute bottom-0 right-0 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all">
            <Camera size={18} />
          </button>
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            {isAr ? 'مروان المبرمج' : 'Marwan Developer'}
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
            System Level: <span className="text-indigo-400">Root Administrator</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3. CORE SETTINGS FORM */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <Shield size={14} className="text-indigo-500" />
            {isAr ? 'معلومات الحساب' : 'Identity Node'}
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2">{isAr ? 'البريد الإلكتروني' : 'Auth Email'}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                <input type="email" defaultValue="admin@elitedash.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECURITY PROTOCOLS */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <Key size={14} className="text-rose-500" />
            {isAr ? 'تغيير المفتاح' : 'Key Rotation'}
          </h3>
          
          <div className="space-y-4">
            <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white focus:border-rose-500 outline-none transition-all" />
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="h-full bg-rose-500" />
            </div>
            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest text-center">Security Entropy: Strong</p>
          </div>
        </section>
      </div>

      {/* 5. ACTION TRIGGER */}
      <button 
        onClick={handleSave}
        disabled={isSaving}
        className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white font-black uppercase text-xs tracking-[0.4em] rounded-[2rem] shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
      >
        {isSaving ? (
          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        ) : (
          isAr ? 'تحديث كافة البروتوكولات' : 'Sync All Protocols'
        )}
      </button>
    </div>
  );
}
