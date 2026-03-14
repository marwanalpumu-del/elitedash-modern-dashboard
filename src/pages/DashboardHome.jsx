import React from 'react';

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* كروت الإحصائيات الذكية */}
      {[
        { title: 'Efficiency', value: '99.9%', trend: '+0.2%', color: 'purple' },
        { title: 'Active Nodes', value: '1,402', trend: '+12.5%', color: 'teal' },
        { title: 'Total Revenue', value: '$42,850', trend: '+8.4%', color: 'indigo' }
      ].map((item, index) => (
        <div key={index} className="premium-card group hover:scale-[1.02] transition-all duration-500">
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors`}>
               <div className="w-6 h-6 bg-purple-500/20 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
            </div>
            <span className="text-emerald-400 font-black text-[10px] bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
              {item.trend}
            </span>
          </div>
          <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">
            {item.title}
          </h3>
          <p className="text-3xl font-black text-white tracking-tighter">
            {item.value}
          </p>
        </div>
      ))}
      
      {/* منطقة الرسم البياني الاحترافية */}
      <div className="md:col-span-3 premium-card h-72 flex flex-col items-center justify-center border-dashed border-white/10 relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
         
         <div className="relative z-10 flex flex-col items-center">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[1em] mb-8 animate-pulse text-center">
              Main Graph Protocol
            </p>
            
            <div className="flex gap-2 items-end h-24">
               {[40, 65, 45, 90, 55, 80, 60, 95, 70].map((h, i) => (
                 <div 
                   key={i} 
                   className="w-2 bg-gradient-to-t from-purple-600 to-teal-400 rounded-full opacity-40 group-hover:opacity-100 transition-all duration-1000" 
                   style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }} 
                 />
               ))}
            </div>
            
            <p className="mt-6 text-[9px] text-slate-600 font-bold uppercase tracking-widest">
              Real-time data synchronization active
            </p>
         </div>
      </div>
    </div>
  );
}
