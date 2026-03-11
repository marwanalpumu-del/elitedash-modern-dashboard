/**
 * @component AdminPanel
 * @version 1.5.0
 * @author Marwan
 * @description Advanced Root Control Interface.
 * Features: Framer Motion-driven UI, real-time throughput analytics, and emergency protocol logic.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Zap, Terminal } from 'lucide-react';
import ProtocolChart from '../components/ProtocolChart';

export default function AdminPanel({ lang }) {
  /** @constant {boolean} isAr - Local logic to handle bidirectional text support */
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* 1. SECURITY NODE HEADER - Minimalist Design */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-3xl flex justify-between items-center shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-rose-500/20 p-2 rounded-xl border border-rose-500/30">
              <Terminal size={20} className="text-rose-500" />
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-widest">
              {isAr ? 'النظام المركزي' : 'Core System'}
            </h2>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            Status: <span className="text-emerald-500">Operational</span>
          </p>
        </div>
        <ShieldCheck size={40} className="text-emerald-500 opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
      </div>

      {/* 2. PERFORMANCE CHART SECTION - Dynamic Sync with --primary color */}
      <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-3xl shadow-2xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-sm font-black text-white uppercase flex items-center gap-2">
              <Activity size={16} style={{ color: 'rgb(var(--primary))' }} />
              {isAr ? 'مراقبة التدفق' : 'Flow Monitor'}
            </h3>
            <p className="text-[9px] text-slate-600 font-black uppercase mt-1">Real-time Data Streaming</p>
          </div>
        </div>

        {/* High-fidelity visualization engine */}
        <ProtocolChart />
      </div>

      {/* 3. EMERGENCY PROTOCOL ZONE - Framer Motion Integrated */}
      <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[2.5rem] text-center backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-20" />
        
        <h4 className="text-rose-500 font-black uppercase text-[10px] tracking-[0.4em] mb-6 flex items-center justify-center gap-2">
           <Zap size={14} className="animate-pulse" />
           Emergency Protocol Zone
        </h4>
        
        <motion.button 
           /** * @description Pulsating shadow animation created via Framer Motion. 
            * Visualizes the high-risk nature of the action.
            */
           animate={{ 
             boxShadow: [
               "0px 0px 0px rgba(244,63,94,0)", 
               "0px 0px 30px rgba(244,63,94,0.3)", 
               "0px 0px 0px rgba(244,63,94,0)"
             ] 
           }}
           transition={{ 
             duration: 2.5, 
             repeat: Infinity, 
             ease: "easeInOut" 
           }}
           whileHover={{ scale: 1.01 }}
           whileTap={{ scale: 0.97 }}
           className="w-full py-5 bg-rose-500 text-white font-black uppercase text-[11px] tracking-[0.5em] rounded-2xl shadow-2xl hover:bg-rose-600 transition-colors"
        >
           {isAr ? 'إغلاق النظام' : 'System Lockdown'}
        </motion.button>
        
        <p className="mt-6 text-[9px] text-slate-600 font-bold uppercase tracking-widest">
          Authorized Admin Access Only
        </p>
      </div>
    </div>
  );
}
