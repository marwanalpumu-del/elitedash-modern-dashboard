/**
 * @component Login
 * @version 1.1.0
 * @author Marwan
 * @description Ultra-Premium Entry Portal. 
 * High-end Glassmorphism with dynamic HSL support and RTL/LTR logic.
 */

import React, { useState } from 'react';
import { Lock, User, ArrowRight, ArrowLeft, Eye, EyeOff, Cpu } from 'lucide-react';

export default function Login({ onLogin, lang = 'ar' }) {
  const [showPassword, setShowPassword] = useState(false);
  const isAr = lang === 'ar';

  const t = {
    ar: { 
      welcome: "دخول المحطة", 
      subtitle: "نظام النخبة لتشفير الأصول", 
      user: "اسم المستخدم", 
      pass: "كلمة المرور", 
      btn: "تخويل الدخول",
      forgot: "نسيت المفتاح؟" 
    },
    en: { 
      welcome: "Terminal Login", 
      subtitle: "Elite Asset Encryption System", 
      user: "Username / Email", 
      pass: "Password", 
      btn: "Authorize Entry",
      forgot: "Forgot Key?" 
    }
  }[isAr ? 'ar' : 'en'];

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-sans-ar">
      
      {/* 1. Dynamic Background Shaders */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />

      {/* 2. Login Module */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Identity */}
        <div className="flex flex-col items-center mb-10 animate-reveal">
          <div className="w-20 h-20 glass-panel rounded-3xl flex items-center justify-center mb-4 shadow-2xl group border-white/10 hover:border-primary/50 transition-all duration-700">
            <Cpu className="text-primary group-hover:rotate-180 transition-transform duration-1000" size={40} />
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase text-glow">{t.welcome}</h1>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-3 opacity-60">{t.subtitle}</p>
        </div>

        {/* The Glass Vault */}
        <div className="glass-panel rounded-[3rem] p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] border-white/5 animate-reveal delay-200">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Field: Identity */}
            <div className="space-y-3">
              <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest px-2">{t.user}</label>
              <div className="relative group">
                <User className={`absolute ${isAr ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors`} size={18} />
                <input 
                  type="text" 
                  dir={isAr ? 'rtl' : 'ltr'}
                  className={`w-full bg-[#020617]/60 border border-white/5 rounded-2xl py-4 ${isAr ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-white text-xs outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all`}
                  placeholder="admin@elitedash.io"
                />
              </div>
            </div>

            {/* Field: Cipher */}
            <div className="space-y-3">
              <div className="flex justify-between px-2">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.pass}</label>
                <button className="text-[9px] text-primary font-black uppercase hover:text-white transition-colors">{t.forgot}</button>
              </div>
              <div className="relative group">
                <Lock className={`absolute ${isAr ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors`} size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  dir={isAr ? 'rtl' : 'ltr'}
                  className={`w-full bg-[#020617]/60 border border-white/5 rounded-2xl py-4 ${isAr ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-white text-xs outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all`}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${isAr ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors`}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Authorization Action */}
            <button 
              onClick={onLogin}
              className="w-full bg-primary py-5 rounded-2xl text-white font-black text-[11px] uppercase tracking-[0.3em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.btn}
                {isAr ? <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> : <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </form>
        </div>

        {/* System Credentials */}
        <div className="mt-12 text-center">
           <p className="text-[8px] text-slate-600 font-black uppercase tracking-[0.5em] animate-pulse">
             Secure Terminal Link: <span className="text-emerald-500">Active</span>
           </p>
        </div>

      </div>
    </div>
  );
}
