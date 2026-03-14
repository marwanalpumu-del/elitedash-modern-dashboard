export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="premium-card group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors">
               <div className="w-6 h-6 bg-purple-500/20 rounded-lg" />
            </div>
            <span className="text-emerald-400 font-bold text-xs">+12.5%</span>
          </div>
          <h3 className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">System Metric {item}</h3>
          <p className="text-3xl font-black text-white">$42,850</p>
        </div>
      ))}
      <div className="md:col-span-3 premium-card h-64 flex items-center justify-center border-dashed border-white/5">
         <p className="text-slate-600 text-xs uppercase tracking-[1em]">Main Graph Protocol</p>
      </div>
    </div>
  );
}
