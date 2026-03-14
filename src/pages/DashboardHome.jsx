/**
 * @file DashboardHome.jsx
 * @path /src/pages/DashboardHome.jsx
 * @version 1.5.0
 * @description The primary KPI landing page for EliteDash.
 */

import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowUpRight, Activity, Zap } from 'lucide-react';

// Importing from your local components folder as per your screenshot
import ProtocolChart from '../components/ProtocolChart';
import GlassCard from '../components/GlassCard'; 

const RECENT_ACTIVITIES = [
  { id: '01', user: 'Marwan', amount: '+$250', time: '2 mins ago' },
  { id: '02', user: 'Ali Ahmed', amount: '+$180', time: '15 mins ago' },
  { id: '03', user: 'Sara', amount: '+$420', time: '1 hour ago' },
];

export default function DashboardHome({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  
  const stats = [
    { label: isAr ? 'إجمالي المبيعات' : 'Total Sales', value: '$45,200', icon: <DollarSign />, color: 'emerald' },
    { label: isAr ? 'العملاء الجدد' : 'New Customers', value: '+1,240', icon: <Users />, color: 'indigo' },
    { label: isAr ? 'معدل النمو' : 'Growth Rate', value: '12.5%', icon: <TrendingUp />, color: 'fuchsia' },
  ];

  return (
    <div className="space-y-8 p-4 lg:p-10 animate-reveal font-sans-ar max-w-[1600px] mx-auto">
      
      {/* 1. KEY PERFORMANCE INDICATORS (KPIs) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="relative group">
            {/* Glow Animation Backdrop */}
            <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r 
              ${stat.color === 'emerald' ? 'from-emerald-600 to-teal-600' : 
                stat.color === 'indigo' ? 'from-indigo-600 to-purple-600' : 
                'from-fuchsia-600 to-pink-600'} 
              opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 animate-tilt-slow`}>
            </div>

            {/* Metric Content */}
            <div className="relative glass-panel p-5 md:p-8 rounded-[2rem] card-interactive overflow-hidden h-full">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 md:mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
                {React.cloneElement(stat.icon, { 
                  className: stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'indigo' ? 'text-indigo-400' : 'text-fuchsia-400', 
                  size: 24 
                })}
              </div>
              <p className="text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] mb-2">
                {stat.label}
              </p>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                <h2 className="text-xl md:text-4xl font-black text-white tracking-tighter leading-none">
                  {stat.value}
                </h2>
                <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold">
                  <ArrowUpRight size={12}/> 2.4%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. ANALYTICS ENGINE SECTION */}
      <section className="glass-panel rounded-[2.5rem] p-6 md:p-10 card-interactive shadow-inner">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                <Activity size={16} className="text-primary"/>
                {isAr ? 'مراقبة التدفق المالي' : 'Financial Analytics'}
              </h3>
              <p className="text-[10px] text-slate-500 mt-1 uppercase">Cloud synchronization active</p>
           </div>
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[9px] font-black text-primary uppercase tracking-tighter">Protocol Secure</span>
           </div>
        </div>
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
           <ProtocolChart />
        </div>
      </section>

      {/* 3. TRANSACTIONAL LOGS (RECENT ACTIVITY) */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
           <Zap size={14} className="text-fuchsia-500" />
           <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
             {isAr ? 'النشاط الأخير' : 'Recent Events'}
           </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECENT_ACTIVITIES.map(item => (
            <div key={item.id} className="group flex items-center gap-4 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-black text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                {item.id}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  {isAr ? `طلب من ${item.user}` : `Order from ${item.user}`}
                </p>
                <p className="text-[9px] text-slate-500 font-bold uppercase mt-0.5 tracking-tighter">{item.time}</p>
              </div>
              <span className="text-xs font-black text-emerald-400 tabular-nums">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
