import React from 'react';
import { ShieldCheck, Activity, Users, Zap, Terminal } from 'lucide-react';
import ProtocolChart from '../components/ProtocolChart'; // High-end Analytics Engine

/**
 * @component AdminPanel
 * @version 1.4.0
 * @description The Root-level control center for EliteDash. 
 * Features: System Performance Analytics, User Management, and Real-time Throughput Monitoring.
 */
export default function AdminPanel({ lang }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* 1. TOP LEVEL SECURITY HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <ShieldCheck size={120} className="text-rose-500" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-rose-500/20 p-2 rounded-xl border border-rose-500/30">
              <Terminal size={18} className="text-rose-500" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              {isAr ? 'مركز التحكم في النظام' : 'Root Control Center'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.3em]">
            Security Level: <span className="text-rose-500">Maximum Overdrive</span>
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10">
           <div className="text-right">
              <p className="text-[10px] text-slate-500 font-black uppercase">Server Health</p>
              <p className="text-emerald-500 font-bold tracking-widest">STABLE: 99.9%</p>
           </div>
           <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
        </div>
      </div>

      {/* 2. ANALYTICS ENGINE: PROTOCOL CHART INTEGRATION */}
      <div className="bg-white/5 border border-white/10 rounded-[3.5rem] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden group">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-black text-white uppercase flex items-center gap-3">
              <Activity className="text-indigo-400" style={{ color: 'rgb(var(--primary))' }} />
              {isAr ? 'معدل تدفق البيانات' : 'System Throughput'}
            </h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Real-time Node Monitoring</p>
          </div>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-slate-300 transition-all active:scale-95">
             {isAr ? 'تحديث السجلات' : 'Refresh Logs'}
          </button>
        </div>
        
        {/* Integrating our specialized chart component */}
        <ProtocolChart />
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: 'Uptime', val: '142 Days' },
             { label: 'Latency', val: '12ms' },
             { label: 'Threads', val: '1.2k Active' },
             { label: 'IOPS', val: '45.2k' }
           ].map((metric, i) => (
             <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                <p className="text-[9px] text-slate-600 font-black uppercase mb-1">{metric.label}</p>
                <p className="text-sm font-black text-white tracking-widest">{metric.val}</p>
             </div>
           ))}
        </div>
      </div>

      {/* 3. QUICK ACTIONS & USER PRIVILEGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl">
            <h4 className="font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
               <Users size={18} className="text-sky-400" />
               {isAr ? 'إدارة الوصول' : 'Access Management'}
            </h4>
            <div className="space-y-4">
               {[1, 2, 3].map((u) => (
                 <div key={u} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10" />
                       <div>
                          <p className="text-xs font-bold text-white uppercase">User_Node_0{u}</p>
                          <p className="text-[9px] text-slate-500">Last Active: 2m ago</p>
                       </div>
                    </div>
                    <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[8px] font-black text-indigo-400 uppercase">
                       Active
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <h4 className="font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Zap size={18} className="text-amber-400" />
                 {isAr ? 'إجراءات سريعة' : 'Emergency Protocols'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-8">
                Execution of emergency protocols will terminate all active user sessions and initiate system-wide encryption.
              </p>
            </div>
            <button className="w-full py-5 bg-rose-500 hover:bg-rose-600 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-3xl shadow-[0_10px_30px_rgba(244,63,94,0.3)] transition-all active:scale-95">
               {isAr ? 'تفعيل بروتوكول الإغلاق' : 'Execute Lockdown'}
            </button>
         </div>
      </div>
    </div>
  );
}
