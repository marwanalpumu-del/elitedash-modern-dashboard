import React, { useState } from 'react';
import { User, Mail, ShieldCheck, Key, Camera, Save, Globe, Fingerprint } from 'lucide-react';

export default function ProfileSecurity({ lang = 'ar' }) {
  const [profile] = useState({
    fullName: 'Ahmad Ali',
    email: 'ahmad.ali@elitedash.io',
    role: 'Terminal Administrator'
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
      <header className="flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-[2.3rem] bg-[#020617] flex items-center justify-center overflow-hidden border border-white/10">
               <User size={60} className="text-indigo-400 opacity-50" />
            </div>
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 text-white rounded-2xl shadow-xl border-4 border-[#020617]">
            <Camera size={18} />
          </button>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">{profile.fullName}</h2>
          <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
            <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[10px] font-black text-indigo-400 uppercase tracking-widest">{profile.role}</span>
          </div>
        </div>
      </header>

      <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8">
        <div className="flex items-center gap-4 mb-8">
          <ShieldCheck className="text-indigo-400" size={24} />
          <h3 className="text-xl font-black italic text-white uppercase">{lang === 'ar' ? 'بروتوكولات الأمان' : 'Security Protocols'}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Fingerprint className="text-emerald-400" size={20} />
              <div className="text-xs font-black text-white uppercase">{lang === 'ar' ? 'بصمة الإصبع' : 'Biometric'}</div>
            </div>
            <div className="w-10 h-5 bg-emerald-500/20 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-emerald-500 rounded-full"></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
