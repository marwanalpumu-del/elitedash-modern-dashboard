/**
 * @component DashboardHome
 * @description The main overview page showcasing key performance indicators (KPIs), 
 * sales charts, and admin panels.
 * Standards: Global Market Compliance (Clean Code & Professional Structure).
 */

import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowUpRight, Activity, ShieldCheck } from 'lucide-react';
// استيراد المكونات التي أنشأناها سابقاً
import RevenueChart from '../components/charts/RevenueChart'; 
import AdminPanel from '../components/dashboard/AdminPanel';

// --- MOCK DATA ---
const RECENT_ACTIVITIES = [
  { id: '01', user: 'Marwan', amount: '+$250', time: '2 mins ago' },
  { id: '02', user: 'Ali Ahmed', amount: '+$180', time: '15 mins ago' },
  { id: '03', user: 'Sara', amount: '+$420', time: '1 hour ago' },
];

export default function DashboardHome({ lang = 'ar' }) {
  
  const stats = [
    { label: lang === 'ar' ? 'إجمالي المبيعات' : 'Total Sales', value: '$45,200', icon: <DollarSign />, color: 'emerald' },
    { label: lang === 'ar' ? 'العملاء الجدد' : 'New Customers', value: '+1,240', icon: <Users />, color: 'indigo' },
    { label: lang === 'ar' ? 'معدل النمو' : 'Growth Rate', value: '12.5%', icon: <TrendingUp />, color: 'fuchsia' },
  ];

  return (
    <div className="space-y-12 p-4 lg:p-8 animate-in fade-in zoom-in-95 duration-700">
      
      {/* 1. SECTION: KPI Cards (بطاقات المؤشرات الرئيسية) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-xl hover:bg-white/[0.08] transition-all relative overflow-hidden">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
              {React.cloneElement(stat.icon, { className: `text-${stat.color}-400`, size: 24 })}
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h2 className="text-4xl font-black tracking-tighter text-white">{stat.value}</h2>
              <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                <ArrowUpRight size={12}/> 2.4%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. SECTION: Advanced Revenue Chart (استدعاء الرسم البياني المتطور) */}
      <section className="animate-in slide-in-from-bottom-5 duration-1000 delay-200">
        <RevenueChart lang={lang} />
      </section>

      {/* 3. SECTION: Two-Column Layout (Activity + Admin Quick View) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Activity Block */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
          <h3 className="font-black text-lg mb-8 italic uppercase tracking-tighter text-white">
            {lang === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
          </h3>
          <div className="space-y-6">
            {RECENT_ACTIVITIES.map(item => (
              <div key={item.id} className="flex items-center gap-4 group cursor-default p-2 rounded-2xl hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-black text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {item.id}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white tracking-tight">
                    {lang === 'ar' ? `طلب جديد من ${item.user}` : `New Order from ${item.user}`}
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.time}</p>
                </div>
                <span className="text-xs font-black text-emerald-400 italic">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Panel Preview (استدعاء لوحة الإدارة كقسم معاينة) */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
           <AdminPanel lang={lang} />
        </div>

      </div>
    </div>
  );
}
