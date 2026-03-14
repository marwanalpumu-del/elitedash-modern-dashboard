import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowUpRight, Globe, Zap } from 'lucide-react';

export default function DashboardHome({ lang }) {
  const isAr = lang === 'ar';

  const stats = [
    { 
      id: 1, 
      label: isAr ? "إجمالي المبيعات" : "Total Revenue", 
      value: "$45,200", 
      growth: "+2.4%", 
      icon: DollarSign, 
      color: "from-emerald-400 to-cyan-400",
      glow: "shadow-emerald-500/20"
    },
    { 
      id: 2, 
      label: isAr ? "العملاء الجدد" : "Active Users", 
      value: "1,240+", 
      growth: "+12.5%", 
      icon: Users, 
      color: "from-purple-400 to-pink-400",
      glow: "shadow-purple-500/20"
    },
  ];

  return (
    <div className="space-y-10 animate-reveal pb-20">
      
      {/* 1. الترحيب الذكي - تم تحسين التباين */}
      <div className="flex justify-between items-end px-2">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-white tracking-tighter text-glow">
            {isAr ? "مرحباً، مروان" : "Welcome, Marwan"}
          </h2>
          <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">
              {isAr ? "النظام متصل" : "System Online"}
            </p>
          </div>
        </div>
        <div className="hidden md:block p-3 glass-panel rounded-2xl">
           <Globe size={20} className="text-slate-400 animate-spin-slow" />
        </div>
      </div>

      {/* 2. كروت الإحصائيات - تم إضافة حدود زجاجية أوضح */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="glass-panel group relative overflow-hidden p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* توهج خلفي ديناميكي */}
            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${stat.color} opacity-10 blur-[80px] group-hover:opacity-30 transition-opacity`} />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-6">
                <div className={`p-4 bg-white/5 rounded-3xl w-fit border border-white/10 shadow-xl ${stat.glow}`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                  <h3 className="text-4xl font-black text-white mt-2 tracking-tighter">$45,200</h3>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                <span className="flex items-center gap-1 text-[10px] font-black text-emerald-400">
                  {stat.growth}
                  <TrendingUp size={12} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. منطقة الرسم البياني - تحويل الأعمدة إلى قطع فنية */}
      <div className="glass-panel p-8 relative border border-white/10">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              <Zap size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">{isAr ? "تحليل التدفق" : "Flow Analysis"}</h3>
              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.3em] mt-1">Real-time sync active</p>
            </div>
          </div>
          <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white border border-white/5">
            <ArrowUpRight size={20} />
          </button>
        </div>
        
        {/* الأعمدة المتوهجة */}
        <div className="h-56 w-full flex items-end justify-between gap-3 px-2">
          {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
              <div 
                className="w-full bg-gradient-to-t from-primary/5 via-primary/40 to-primary rounded-t-2xl transition-all duration-1000 animate-reveal relative overflow-hidden"
                style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
              >
                {/* تأثير لمعان داخل العمود */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </div>
              <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest">Day {i+1}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
