import React from 'react';
import { TrendingUp, Users, Activity, DollarSign, ArrowUpRight } from 'lucide-react';

export default function DashboardHome({ lang }) {
  const isAr = lang === 'ar';

  const stats = [
    { 
      id: 1, 
      label: isAr ? "إجمالي المبيعات" : "Total Revenue", 
      value: "$45,200", 
      growth: "+2.4%", 
      icon: DollarSign, 
      color: "from-emerald-400 to-cyan-400" 
    },
    { 
      id: 2, 
      label: isAr ? "العملاء الجدد" : "Active Users", 
      value: "1,240+", 
      growth: "+12.5%", 
      icon: Users, 
      color: "from-purple-400 to-pink-400" 
    },
  ];

  return (
    <div className="space-y-8 animate-reveal">
      
      {/* 1. Header Section - الترحيب الذكي */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-white tracking-tight">
          {isAr ? "مرحباً، مروان" : "Welcome, Marwan"}
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
            {isAr ? "النظام متصل وآمن" : "System Online & Secure"}
          </p>
        </div>
      </div>

      {/* 2. Stats Grid - كروت الإحصائيات المشعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="glass-panel group relative overflow-hidden p-8 hover:scale-[1.02] transition-all duration-500">
            {/* تأثير الضوء الخلفي عند الحوم (Hover) */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded-2xl w-fit border border-white/10">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-3xl font-black text-white mt-1 tracking-tighter">{stat.value}</h3>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {stat.growth}
                  <TrendingUp size={12} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Chart Area - منطقة الرسم البياني الاحترافية */}
      <div className="glass-panel p-8 relative">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-black text-white">{isAr ? "تحليل التدفق" : "Flow Analysis"}</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Real-time data synchronization</p>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white">
            <ArrowUpRight size={20} />
          </button>
        </div>
        
        {/* مكان الرسم البياني - سنضع هنا لاحقاً مكتبة Recharts */}
        <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
          {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
            <div 
              key={i} 
              className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-lg transition-all duration-1000 animate-reveal"
              style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
