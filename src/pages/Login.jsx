/**
 * @component Login
 * @description Ultra-Premium Entry Portal for EliteDash.
 * Features: High-end Glassmorphism, Floating UI, and Dynamic localization.
 */

import React, { useState } from 'react';
import { Shield, Lock, User, ArrowRight, Eye, EyeOff, Cpu } from 'lucide-react';

export default function Login({ onLogin, lang = 'ar' }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

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
  }[lang === 'ar' ? 'ar' : 'en'];

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 1. Background Visual Effects (Glow Spheres) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />

      {/* 2. Main Login Card */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Identity */}
        <div className="flex flex-col items-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 shadow-2xl group transition-all hover:border-indigo-500/50">
            <Cpu className="text-indigo-400 group-hover:rotate-90 transition-transform duration-500" size={32} />
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">{t.welcome}</h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-2">{t.subtitle}</p>
        </div>

        {/* The Glass Container */}
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] animate-in zoom-in-95 duration-700">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input: Username */}
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest px-2">{t.user}</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input 
                  type="text" 
                  className="w-full bg-[#020617]/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-xs outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                  placeholder="admin@elitedash.io"
                />
              </div>
            </div>

            {/* Input: Password */}
            <div className="space-y-2">
              <div className="flex justify-between px-2">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.pass}</label>
                <a href="#" className="text-[9px] text-indigo-400 font-bold uppercase hover:underline">{t.forgot}</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full bg-[#020617]/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-xs outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Entry Button */}
            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 py-5 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              {t.btn}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center opacity-40 hover:opacity-100 transition-opacity">
           <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 EliteDash Terminal Protocol</p>
        </div>

      </div>
    </div>
  );
}
