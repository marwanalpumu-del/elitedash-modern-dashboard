/**
 * @component Analytics
 * @description Advanced performance tracking page featuring data visualization,
 * audience insights, and regional sales distribution.
 */

import React from 'react';
import { BarChart3, Globe2, ArrowUpRight, Target, Zap } from 'lucide-react';

// --- MOCK DATA ---
const PERFORMANCE_STATS = [
  { label: 'Conversion Rate', value: '3.24%', trend: '+0.4%', color: 'indigo' },
  { label: 'Avg. Session', value: '4m 32s', trend: '+12%', color: 'fuchsia' },
  { label: 'Bounce Rate', value: '42.1%', trend: '-2.1%', color: 'emerald' },
];

const REVENUE_CHART = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 70 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 95 },
  { month: 'May', value: 80 },
  { month: 'Jun', value: 100 },
];

// --- STYLING DICTIONARY ---
// This ensures Tailwind JIT compiler recognizes the classes
const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-400 bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]',
  fuchsia: 'bg-fuchsia-500/10 text-fuchsia-400 bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]',
  emerald: 'bg-emerald-500/10 text-emerald-400 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]',
};

export default function Analytics({ lang }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. TOP PERFORMANCE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERFORMANCE_STATS.map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${colorMap[stat.color].split(' ')[0]} ${colorMap[stat.color].split(' ')[1]}`}>
                <Target size={20} />
              </div>
              <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} /> {stat.trend}
              </span>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-3xl font-black mt-1 tracking-tighter">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. MAIN REVENUE CHART */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-bold text-xl flex items-center gap-2">
                <BarChart3 className="text-indigo-400" />
                {lang === 'ar' ? 'نمو الإيرادات' : 'Revenue Growth'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">Monthly earnings overview</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-64 gap-4">
            {REVENUE_CHART.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="relative w-full flex items-end justify-center h-full">
                  <div 
                    style={{ height: `${data.value}%` }} 
                    className="w-full max-w-[40px] bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-xl group-hover:to-fuchsia-400 transition-all duration-500 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                  />
                  <span className="absolute -top-8 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2 py-1 rounded shadow-xl">
                    ${data.value}k
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. AUDIENCE GEOGRAPHY */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem]">
          <h3 className="font-bold text-xl mb-8 flex items-center gap-2">
            <Globe2 className="text-fuchsia-400" />
            {lang === 'ar' ? 'توزيع الجمهور' : 'Audience Reach'}
          </h3>
          
          <div className="space-y-8">
            {[
              { country: 'USA', val: 85, color: 'indigo' },
              { country: 'Germany', val: 62, color: 'fuchsia' },
              { country: 'UAE', val: 45, color: 'emerald' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>{item.country}</span>
                  <span className="text-slate-400">{item.val}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${item.val}%` }} 
                    className={`h-full rounded-full transition-all duration-1000 ${colorMap[item.color].split(' ')[2]} ${colorMap[item.color].split(' ')[3]}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-indigo-600 rounded-[2rem] relative overflow-hidden group cursor-pointer">
            <Zap className="absolute right-[-10px] bottom-[-10px] size-24 text-white/10 group-hover:rotate-12 transition-transform" />
            <p className="text-white/70 text-[10px] font-black uppercase">Pro Insight</p>
            <p className="text-white font-bold text-sm mt-1 leading-tight">
              {lang === 'ar' ? 'حركة المرور زادت بنسبة 20%' : 'Traffic increased by 20% this week.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
