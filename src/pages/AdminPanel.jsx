import React from 'react';
import { Users, Activity, ShieldAlert, Database, ArrowUpRight, Cpu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const performanceData = [
  { name: '00:00', load: 12, traffic: 45 },
  { name: '04:00', load: 18, traffic: 52 },
  { name: '08:00', load: 45, traffic: 89 },
  { name: '12:00', load: 30, traffic: 70 },
  { name: '16:00', load: 65, traffic: 95 },
  { name: '20:00', load: 40, traffic: 60 },
];

export default function AdminPanel({ lang }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-6 animate-in fade-in duration-1000">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-xl">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
            {isAr ? 'نظام الإدارة المركزية' : 'Root Admin Console'}
          </h1>
          <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-[4px] mt-1">
            {isAr ? 'حالة السيرفر: مستقرة' : 'Server Status: Operational'}
          </p>
        </div>
        <div className="flex gap-2 text-[10px] font-bold">
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full uppercase">v1.0.4 Secure</span>
          <span className="px-3 py-1 bg-white/5 text-slate-400 border border-white/10 rounded-full">ID: #8892-XT</span>
        </div>
      </div>

      {/* 2. Admin Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: isAr ? 'المستخدمين' : 'Total Users', val: '1,284', icon: Users, color: 'text-blue-400' },
          { label: isAr ? 'أداء المعالج' : 'CPU Load', val: '42%', icon: Cpu, color: 'text-purple-400' },
          { label: isAr ? 'البيانات' : 'DB Sync', val: '99.9%', icon: Database, color: 'text-emerald-400' },
          { label: isAr ? 'تهديدات' : 'Threats', val: '0', icon: ShieldAlert, color: 'text-rose-400' },
        ].map((item, i) => (
          <div key={i} className="bg-[#0f172a]/50 border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition-all">
            <item.icon size={20} className={`${item.color} mb-3`} />
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{item.label}</p>
            <h4 className="text-xl font-black text-white mt-1">{item.val}</h4>
          </div>
        ))}
      </div>

      {/* 3. System Load Chart (Performance) */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[3px] flex items-center gap-2">
            <Activity size={14} className="text-indigo-500" />
            {isAr ? 'أداء النظام المباشر' : 'Live System Performance'}
          </h3>
        </div>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#020617', border: '1px solid #ffffff10', borderRadius: '15px', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="load" stroke="#6366f1" fillOpacity={1} fill="url(#colorLoad)" strokeWidth={3} />
              <Area type="monotone" dataKey="traffic" stroke="#10b981" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
