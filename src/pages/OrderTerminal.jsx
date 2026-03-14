/**
 * @module OrderTerminal
 * @version 3.6.0
 * @author Marwan & EliteDash UI
 * @description Advanced asset management terminal with high-performance filtering.
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, ArrowUpDown, Plus, Trash2, MoreVertical, 
  Inbox, Calendar, Edit3, TrendingUp, Activity, 
  X, Package, User, CheckCircle, DollarSign 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const STATUS_THEME = {
  Delivered: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Shipping: "text-primary bg-primary/10 border-primary/20",
  Processing: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

// --- ANALYTICS STREAM SUB-COMPONENT ---
const AnalyticsStream = ({ data, lang }) => {
  const isAr = lang === 'ar';
  const totalRevenue = useMemo(() => data.reduce((sum, item) => sum + item.price, 0), [data]);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 animate-reveal">
      <div className="lg:col-span-2 glass-panel p-10 flex flex-col md:flex-row items-center justify-between group">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
            <Activity size={14} className="animate-pulse" />
            {isAr ? 'إجمالي القيمة' : 'Global Valuation'}
          </div>
          <h4 className="text-6xl font-black italic tracking-tighter text-white text-glow">
            ${totalRevenue.toLocaleString()}
          </h4>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">+24% vs Last Month</p>
        </div>
        {/* Trend Indicator */}
        <div className="hidden md:flex flex-col items-end">
             <TrendingUp size={48} className="text-emerald-500 opacity-20 group-hover:opacity-100 transition-all duration-700" />
             <div className="h-1 w-32 bg-emerald-500/20 mt-4 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[70%] animate-shimmer" />
             </div>
        </div>
      </div>
      
      <div className="bg-primary/10 border border-primary/20 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center group hover:scale-[1.03] transition-all shadow-2xl">
        <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white mb-4 shadow-primary/50 shadow-2xl group-hover:rotate-12 transition-transform">
          <TrendingUp size={28} />
        </div>
        <div className="text-primary font-black text-4xl italic tracking-tighter text-glow">+12.8%</div>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2">Efficiency Rating</span>
      </div>
    </div>
  );
};

export default function OrderTerminal({ lang = 'ar' }) {
  const [orders, setOrders] = useState([
    { id: "#8821", product: "Coding Template", customer: "Ahmad Ali", price: 49, status: "Delivered", date: "2026-03-09" },
    { id: "#8822", product: "SaaS Dashboard", customer: "John Doe", price: 299, status: "Shipping", date: "2026-03-08" },
    { id: "#8823", product: "React UI Kit", customer: "Sami", price: 89, status: "Processing", date: "2026-03-07" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const isAr = lang === 'ar';

  const filteredItems = useMemo(() => {
    return orders.filter(o => 
      o.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
      o.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [orders, searchTerm]);

  return (
    <div className="animate-reveal space-y-8">
      
      <AnalyticsStream data={orders} lang={lang} />

      {/* HEADER & SEARCH */}
      <div className="flex flex-col xl:flex-row justify-between items-center gap-6 px-2">
        <div className="w-full xl:w-auto">
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase font-sans-ar">
            {isAr ? 'محطة الأصول' : 'Asset Terminal'}
          </h2>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-2">System Synchronized • v3.6.0</p>
        </div>

        <div className="flex w-full xl:w-auto gap-4">
          <div className="relative flex-1 xl:w-96 group">
             <Search className={`absolute ${isAr ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-all`} size={18} />
             <input 
               type="text" 
               placeholder={isAr ? 'بحث شامل...' : 'Omni Cluster Search...'} 
               className={`w-full bg-white/5 border border-white/10 rounded-2xl py-5 ${isAr ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-sm text-white focus:border-primary/50 outline-none transition-all`} 
               onChange={(e) => setSearchTerm(e.target.value)} 
             />
          </div>
          <button className="p-5 bg-primary text-white rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="glass-panel rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" dir={isAr ? 'rtl' : 'ltr'}>
            <thead className="bg-white/5 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="p-8">{isAr ? 'الأصل' : 'Asset'}</th>
                <th className="p-8">{isAr ? 'الحالة' : 'Status'}</th>
                <th className="p-8">{isAr ? 'القيمة' : 'Valuation'}</th>
                <th className="p-8 text-center">{isAr ? 'التحكم' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredItems.map((order) => (
                <tr key={order.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs">
                        {order.id.replace('#', '')}
                      </div>
                      <div>
                        <div className="text-white font-black text-sm uppercase">{order.product}</div>
                        <div className="text-[10px] text-slate-500 font-bold">{order.customer}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className={`px-4 py-2 rounded-xl text-[9px] font-black border uppercase tracking-widest ${STATUS_THEME[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-8 font-black text-2xl italic text-white text-glow">
                    ${order.price}
                  </td>
                  <td className="p-8 text-center">
                    <button className="p-3 bg-white/5 rounded-xl text-slate-500 hover:text-primary transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
