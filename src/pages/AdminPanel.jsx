/**
 * @component AdminPanel
 * @version 1.6.0
 * @author Marwan
 * @description Advanced Root Control Interface with HSL integration and Framer Motion.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Zap, Terminal } from 'lucide-react';
import ProtocolChart from '../components/ProtocolChart';

export default function AdminPanel({ lang = 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-reveal p-4 lg:p-0">
      
      {/* 1. SECURITY NODE HEADER */}
      <div className="glass-panel p-8 rounded-[2.5rem] flex justify-between items-center group relative overflow-hidden">
        {/* Glow Background Effect */}
        <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-rose-500/10 p-2 rounded-xl border border-rose-500/20 group-hover:border-rose-500/50 transition-colors">
              <Terminal size={20} className="text-rose-500" />
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-widest font-sans-ar">
              {isAr ? 'النظام المركزي' : 'Core System'}
            </h2>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            Access Level: <span className="text-rose-500 text-glow">Root Access</span>
          </p>
        </div>
        <ShieldCheck size={40} className="text-emerald-500 opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
      </div>

      {/* 2. PERFORMANCE MONITOR */}
      <div className="glass-panel rounded-[2.5rem] p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-sm font-black text-white uppercase flex items-center gap-2">
              <Activity size={16} className="text-primary" />
              {isAr ? 'مراقبة التدفق' : 'Flow Monitor'}
            </h3>
            <p className="text-[9px] text-slate-600 font-black uppercase mt-1 tracking-widest">Live System Throughput</p>
          </div>
          <div className="flex gap-1">
             {[1, 2, 3].map(i => (
               <div key={i} className={`w-1 h-3 rounded-full bg-primary/40 animate-pulse delay-${i*200}`} />
             ))}
          </div>
        </div>

        <div className="h-[280px]">
          <ProtocolChart />
        </div>
      </div>

      {/* 3. EMERGENCY PROTOCOL ZONE */}
      <div className="bg-rose-600/5 border border-rose-600/10 p-10 rounded-[2.5rem] text-center backdrop-blur-md relative overflow-hidden group">
        {/* Danger Warning Stripe */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
        
        <h4 className="text-rose-500 font-black uppercase text-[10px] tracking-[0.4em] mb-8 flex items-center justify-center gap-3">
           <Zap size={14} className="animate-bounce" />
           {isAr ? 'منطقة بروتوكول الطوارئ' : 'Emergency Protocol Zone'}
        </h4>
        
        <motion.button 
           animate={{ 
             boxShadow: [
               "0px 0px 0px hsla(349, 89%, 60%, 0)", 
               "0px 0px 30px hsla(349, 89%, 60%, 0.3)", 
               "0px 0px 0px hsla(349, 89%, 60%, 0)"
             ] 
           }}
           transition={{ duration: 2, repeat: Infinity }}
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           className="w-full py-5 bg-rose-600 text-white font-black uppercase text-[11px] tracking-[0.5em] rounded-2xl shadow-2xl hover:bg-rose-500 transition-all duration-300 relative z-10"
        >
           {isAr ? 'إغلاق النظام فوراً' : 'System Lockdown'}
        </motion.button>
        
        <p className="mt-8 text-[9px] text-slate-600 font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
          Critical Action Required • Admin Authentication Active
        </p>
      </div>
    </div>
  );
}
