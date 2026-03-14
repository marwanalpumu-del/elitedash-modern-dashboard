/**
 * @file Analytics.jsx
 * @version 1.3.0
 * @description Advanced performance tracking engine.
 * Fully synchronized with HSL dynamic protocols and Glassmorphism standards.
 */

import React from 'react';
import { BarChart3, Globe2, ArrowUpRight, Target, Zap, Activity } from 'lucide-react';

const PERFORMANCE_STATS = [
  { label: 'Conversion Rate', value: '3.24%', trend: '+0.4%', color: 'var(--primary)' },
  { label: 'Avg. Session', value: '4m 32s', trend: '+12%', color: 'var(--accent)' },
  { label: 'Bounce Rate', value: '42.1%', trend: '-2.1%', color: 'var(--primary)' },
];

const REVENUE_CHART = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 70 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 95 },
  { month: 'May', value: 80 },
  { month: 'Jun', value: 100 },
];

export default function Analytics({ lang = 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-reveal p-4 lg:p-0">
      
      {/* 1. TOP PERFORMANCE METRICS - KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERFORMANCE_STATS.map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2rem] card-interactive group relative overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity rotate-12">
               <Activity size={100} />
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                <Target size={20} />
              </div>
              <span className="text-emerald-500 text-[10px] font-black flex items-center bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <ArrowUpRight size={14} className={isAr ? 'ml-1' : 'mr-1'} /> {stat.trend}
              </span>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            <h3 className="text-3xl font-black mt-2 tracking-tighter text-white uppercase text-glow">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. DYNAMIC REVENUE ENGINE (Visual Bars) */}
        <div className="lg:col-span-2 glass-panel p-8 md:p-10 rounded-[2.5rem] relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="font-black text-xl flex items-center gap-3 text-white uppercase tracking-tight font-sans-ar">
                <BarChart3 className="text-primary" />
                {isAr ? 'نمو الإيرادات' : 'Revenue Protocol'}
              </h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 opacity-60">Monthly Financial Pulse</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-72 gap-3 md:gap-6 px-2">
            {REVENUE_CHART.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full">
                <div className="relative w-full flex items-end justify-center h-full">
                  {/* Glowing Bar synced with HSL --primary */}
                  <div 
                    style={{ 
                        height: `${data.value}%`,
                    }} 
                    className="w-full max-w-[35px] rounded-t-2xl bg-gradient-to-t from-primary to-accent transition-all duration-1000 ease-out group-hover:brightness-125 relative shadow-[0_-5px_20px_hsla(var(--primary),0.2)]"
                  >
                    {/* Top Glow Tip */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-t-2xl" />
                  </div>
                  
                  <span className="absolute -top-10 text-[9px] font-black opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-2 bg-white text-black px-3 py-1.5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 whitespace-nowrap">
                    ${data.value}K
                  </span>
                </div>
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter group-hover:text-primary transition-colors">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GEOGRAPHICAL DISTRIBUTION */}
        <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] flex flex-col">
          <h3 className="font-black text-xl mb-10 flex items-center gap-3 text-white uppercase tracking-tight font-sans-ar">
            <Globe2 className="text-accent" />
            {isAr ? 'توزيع الجمهور' : 'Global Reach'}
          </h3>
          
          <div className="space-y-8 flex-1">
            {[
              { country: 'USA', val: 85, color: 'var(--primary)' },
              { country: 'Germany', val: 62, color: 'var(--accent)' },
              { country: 'UAE', val: 45, color: 'var(--primary)' },
            ].map((item, i) => (
              <div key={i} className="space-y-3 group">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400 group-hover:text-white transition-colors">{item.country}</span>
                  <span className="text-primary">{item.val}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                  <div 
                    style={{ width: `${item.val}%` }} 
                    className="h-full rounded-full bg-primary transition-all duration-1000 ease-out shadow-[0_0_10px_hsla(var(--primary),0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* NODE INSIGHT CALLOUT */}
          <div className="mt-12 p-6 rounded-2xl bg-primary relative overflow-hidden group cursor-pointer shadow-2xl transition-all hover:scale-[1.02] active:scale-95">
            <Zap className="absolute -right-8 -bottom-8 size-24 text-white/10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700" />
            <div className="relative z-10">
              <p className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em]">System Insight</p>
              <p className="text-white font-black text-sm mt-1 leading-tight uppercase tracking-tighter">
                {isAr ? 'حركة المرور زادت بنسبة 20%' : 'Terminal traffic peaked +20% today.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
