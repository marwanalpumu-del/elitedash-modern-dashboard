/**
 * @component DashboardHome
 * @description The main overview page showcasing key performance indicators (KPIs), 
 * sales charts, and recent transaction logs.
 */

import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowUpRight, Activity } from 'lucide-react';

// --- MOCK DATA ---
// Move data out of the JSX to demonstrate professional data handling
const RECENT_ACTIVITIES = [
  { id: '01', user: 'Marwan', amount: '+$250', time: '2 mins ago' },
  { id: '02', user: 'Ali Ahmed', amount: '+$180', time: '15 mins ago' },
  { id: '03', user: 'Sara', amount: '+$420', time: '1 hour ago' },
];

const CHART_DATA = [40, 65, 45, 90, 55, 75, 50];

export default function DashboardHome({ lang }) {
  
  // Dynamic labels based on localization
  const stats = [
    { label: lang === 'ar' ? 'إجمالي المبيعات' : 'Total Sales', value: '$45,200', icon: <DollarSign />, color: 'emerald' },
    { label: lang === 'ar' ? 'العملاء الجدد' : 'New Customers', value: '+1,240', icon: <Users />, color: 'indigo' },
    { label: lang === 'ar' ? 'معدل النمو' : 'Growth Rate', value: '12.5%', icon: <TrendingUp />, color: 'fuchsia' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
      
      {/* SECTION: KPI Cards with Glassmorphism & Hover Glow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-xl hover:bg-white/[0.08] transition-all relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${stat.color}-500/10 blur-3xl rounded-full group-hover:bg-${stat.color}-500/20 transition-all`} />
            
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
              {React.cloneElement(stat.icon, { className: `text-${stat.color}-400`, size: 24 })}
            </div>
            
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h2 className="text-4xl font-black tracking-tighter">{stat.value}</h2>
              <span className="text-emerald-500 text-xs font-bold flex items-center">
                <ArrowUpRight size={12}/> 2.4%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION: Visual Analytics & Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Sales Mini-Chart Block */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Activity className="text-indigo-500" size={20}/>
              {lang === 'ar' ? 'إحصائيات المبيعات' : 'Sales Overview'}
            </h3>
          </div>
          
          <div className="flex items-end gap-3 h-40">
            {CHART_DATA.map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-xl hover:bg-indigo-500/40 transition-all relative group">
                {/* Visual Representation of Bar */}
                <div style={{ height: `${h}%` }} className="bg-indigo-500 rounded-t-xl w-full absolute bottom-0 shadow-[0_0_20px_rgba(99,102,241,0.3)]" />
                {/* Tooltip on Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition shadow-xl font-bold">
                  {h}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed Block */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem]">
          <h3 className="font-bold text-lg mb-6">{lang === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}</h3>
          <div className="space-y-6">
            {RECENT_ACTIVITIES.map(item => (
              <div key={item.id} className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold group-hover:border-indigo-500/50 transition">
                  {item.id}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">
                    {lang === 'ar' ? `طلب جديد من ${item.user}` : `New Order from ${item.user}`}
                  </p>
                  <p className="text-[10px] text-slate-500">{item.time}</p>
                </div>
                <span className="text-xs font-black text-indigo-400">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
