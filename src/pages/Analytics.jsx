/**
 * @file Analytics.jsx
 * @version 1.2.0
 * @description Advanced performance tracking synchronized with Global Protocols.
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

export default function Analytics({ lang }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* 1. TOP PERFORMANCE METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERFORMANCE_STATS.map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Activity size={60} />
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div 
                style={{ backgroundColor: `rgb(${stat.color} / 0.1)`, color: `rgb(${stat.color})` }}
                className="p-4 rounded-2xl"
              >
                <Target size={20} />
              </div>
              <span className="text-emerald-500 text-[10px] font-black flex items-center bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                <ArrowUpRight size={14} className="mr-1" /> {stat.trend}
              </span>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            <h3 className="text-3xl font-black mt-2 tracking-tighter text-white uppercase">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. DYNAMIC REVENUE ENGINE (Visualized) */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3.5rem] relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="font-black text-xl flex items-center gap-3 text-white uppercase tracking-tight">
                <BarChart3 className="text-indigo-400" style={{ color: 'rgb(var(--primary))' }} />
                {isAr ? 'نمو الإيرادات' : 'Revenue Protocol'}
              </h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Monthly Financial Pulse</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-72 gap-3 md:gap-6">
            {REVENUE_CHART.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full">
                <div className="relative w-full flex items-end justify-center h-full">
                  {/* Dynamic Gradient Bar synced with --primary */}
                  <div 
                    style={{ 
                        height: `${data.value}%`,
                        background: `linear-gradient(to top, rgb(var(--primary)), rgb(var(--accent)))`,
                        boxShadow: `0 0 25px rgb(var(--primary) / 0.2)`
                    }} 
                    className="w-full max-w-[32px] rounded-t-2xl group-hover:brightness-125 transition-all duration-700 relative"
                  />
                  <span className="absolute -top-10 text-[9px] font-black opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 bg-white text-black px-3 py-1.5 rounded-lg shadow-2xl">
                    ${data.value}K
                  </span>
                </div>
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GEOGRAPHICAL DISTRIBUTION */}
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3.5rem]">
          <h3 className="font-black text-xl mb-10 flex items-center gap-3 text-white uppercase tracking-tight">
            <Globe2 className="text-fuchsia-400" style={{ color: 'rgb(var(--accent))' }} />
            {isAr ? 'توزيع الجمهور' : 'Global Reach'}
          </h3>
          
          <div className="space-y-10">
            {[
              { country: 'USA', val: 85, color: 'var(--primary)' },
              { country: 'Germany', val: 62, color: 'var(--accent)' },
              { country: 'UAE', val: 45, color: 'var(--primary)' },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-300">{item.country}</span>
                  <span className="text-slate-500">{item.val}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                  <div 
                    style={{ 
                        width: `${item.val}%`,
                        backgroundColor: `rgb(${item.color})`,
                        boxShadow: `0 0 10px rgb(${item.color} / 0.5)`
                    }} 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>

          <div 
            style={{ backgroundColor: 'rgb(var(--primary))' }}
            className="mt-16 p-8 rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-2xl transition-transform active:scale-95"
          >
            <Zap className="absolute right-[-20px] bottom-[-20px] size-32 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
            <div className="relative z-10">
              <p className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em]">Node Insight</p>
              <p className="text-white font-black text-md mt-2 leading-tight uppercase tracking-tighter">
                {isAr ? 'حركة المرور زادت بنسبة 20%' : 'Terminal traffic peaked +20% today.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
