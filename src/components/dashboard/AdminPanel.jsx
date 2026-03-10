/**
 * @component AdminPanel
 * @description Advanced member management with matching EliteDash UI aesthetics.
 * Standards: Global Market Compliance (No Arabic Comments).
 */

import React from 'react';
import { ShieldCheck, UserPlus, MoreVertical, Trash2, Edit3, Activity, Mail } from 'lucide-react';

// Mock Data for Global Compliance Testing
const TEAM_MEMBERS = [
  { id: 1, name: "Ahmad Ali", role: "Terminal Admin", email: "ahmad.ali@elitedash.io", status: "Online" },
  { id: 2, name: "Sami Rayan", role: "Security Analyst", email: "sami.r@elitedash.io", status: "Offline" },
  { id: 3, name: "Noor Saeed", role: "UI/UX Developer", email: "noor.s@elitedash.io", status: "Online" },
];

export default function AdminPanel({ lang = 'ar' }) {
  // Multilingual Labels for UI
  const t = {
    ar: { title: "إدارة النظام", add: "إضافة عضو", role: "الرتبة", status: "الحالة", contact: "بيانات الاتصال" },
    en: { title: "System Admin", add: "Add Member", role: "Role", status: "Status", contact: "Contact Info" }
  }[lang === 'ar' ? 'ar' : 'en'];

  return (
    <div className="p-4 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-center px-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase flex items-center gap-3">
            <ShieldCheck className="text-indigo-500 animate-pulse" size={28} /> {t.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-transparent mt-2 rounded-full"></div>
        </div>
        
        <button className="bg-white/5 border border-white/10 text-white p-4 rounded-[1.5rem] hover:bg-indigo-600 hover:border-indigo-500 transition-all active:scale-90 shadow-xl shadow-indigo-600/10">
          <UserPlus size={22} />
        </button>
      </div>

      {/* --- MEMBERS LIST SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div 
            key={member.id} 
            className="bg-[#0b0f1a]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col lg:flex-row items-center justify-between group hover:border-indigo-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10 text-center lg:text-right">
              {/* Avatar with Gradient Border */}
              <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0b0f1a] rounded-[1.3rem] flex items-center justify-center font-black text-white text-xl italic uppercase">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-black text-lg italic uppercase tracking-tighter group-hover:text-indigo-300 transition-colors">
                  {member.name}
                </h4>
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-1">
                  <span className="text-[10px] text-indigo-400 font-black tracking-[0.2em] uppercase bg-indigo-500/10 px-3 py-1 rounded-lg">
                    {member.role}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <Mail size={12} className="text-slate-600" /> {member.email}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 lg:mt-0 relative z-10">
              {/* Status Indicator */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border ${
                member.status === 'Online' 
                ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500' 
                : 'bg-slate-500/5 border-white/5 text-slate-500'
              }`}>
                <span className={`w-2 h-2 rounded-full ${member.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-slate-600'}`}></span>
                <span className="text-[9px] font-black uppercase tracking-widest">{member.status}</span>
              </div>
              
              <button className="bg-white/5 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 border border-white/5">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
