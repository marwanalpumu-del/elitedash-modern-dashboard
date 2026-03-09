/**
 * @module OrderTerminal
 * @version 3.5.0
 * @author EliteDash UI Team
 * @license MIT
 * * ARCHITECTURAL STANDARDS:
 * 1. PERSISTENCE: State-driven UI ensuring consistency during re-renders.
 * 2. PERFORMANCE: useMemo for O(n log n) sorting/filtering operations.
 * 3. UX: Glassmorphism aesthetic with high-contrast localized formatting.
 * 4. SCALABILITY: Decoupled logic from UI for easy API integration.
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { 
  Search, ArrowUpDown, ChevronLeft, ChevronRight, Plus,
  Trash2, MoreVertical, Inbox, Calendar, Edit3, Copy, 
  TrendingUp, Activity, DollarSign, X, Package, User, CheckCircle
} from 'lucide-react';

// --- DATA SCHEMA & MOCKUP ---
const INITIAL_DATA = [
  { id: "#8821", product: "Coding Template", customer: "Ahmad Ali", price: 49, status: "Delivered", date: "2026-03-09" },
  { id: "#8822", product: "SaaS Dashboard", customer: "John Doe", price: 299, status: "Shipping", date: "2026-03-08" },
  { id: "#8823", product: "React UI Kit", customer: "Sami", price: 89, status: "Processing", date: "2026-03-07" },
  { id: "#8824", product: "Icon Pack", customer: "Sara Kh.", price: 25, status: "Delivered", date: "2026-03-06" },
];

const STATUS_THEME = {
  Delivered: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Shipping: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  Processing: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

// ==========================================
// SUB-COMPONENT: ANALYTICS HEADER
// ==========================================
const AnalyticsStream = ({ data, lang }) => {
  const totalRevenue = useMemo(() => data.reduce((sum, item) => sum + item.price, 0), [data]);
  
  // Vector path generation for the trend line
  const chartPath = useMemo(() => {
    const points = data.slice(-5).map((d, i) => `${(i * 50) + 10},${60 - (d.price / 350 * 50)}`);
    return `M ${points.join(' L ')}`;
  }, [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 animate-in slide-in-from-top-10 duration-1000">
      <div className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between group hover:bg-white/[0.08] transition-all">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-indigo-400 font-black text-[10px] uppercase tracking-[0.4em]">
            <Activity size={14} className="animate-pulse" />
            {lang === 'ar' ? 'إجمالي القيمة' : 'Global Valuation'}
          </div>
          <h4 className="text-6xl font-black italic tracking-tighter text-white">
            ${totalRevenue.toLocaleString()}
          </h4>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">+24% vs Last Month</p>
        </div>
        <div className="w-full md:w-64 h-24 mt-8 md:mt-0 drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <path d={chartPath} fill="none" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center group hover:scale-[1.03] transition-transform shadow-2xl">
        <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center text-white mb-4 shadow-indigo-500/50 shadow-2xl">
          <TrendingUp size={28} />
        </div>
        <div className="text-indigo-400 font-black text-4xl italic tracking-tighter">+12.8%</div>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2">Efficiency Rating</span>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT: ORDER TERMINAL
// ==========================================
export default function OrderTerminal({ lang = 'en' }) {
  const [orders, setOrders] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // --- LOCALIZED FORMATTERS ---
  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  const formatDate = (dateStr) => new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(dateStr));

  // --- COMPUTED DATA: FILTER & SORT ---
  const filteredItems = useMemo(() => {
    let results = orders.filter(o => Object.values(o).some(v => v.toString().toLowerCase().includes(searchTerm.toLowerCase())));
    return results.sort((a, b) => {
      const aV = a[sortConfig.key], bV = b[sortConfig.key];
      if (aV < bV) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aV > bV) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [orders, searchTerm, sortConfig]);

  // --- ACTIONS ---
  const handleAddOrder = (newOrder) => {
    const asset = { ...newOrder, id: `#${Math.floor(Math.random() * 9000) + 1000}`, date: new Date().toISOString().split('T')[0] };
    setOrders([asset, ...orders]);
  };

  // Click-away listener for dropdown closure
  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] p-4 md:p-12 text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* 1. ANALYTICS ENGINE */}
      <AnalyticsStream data={orders} lang={lang} />

      {/* 2. TERMINAL CONTROLS */}
      <div className="flex flex-col xl:flex-row justify-between items-center gap-6 mb-10 px-2">
        <div className="w-full xl:w-auto">
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">
            {lang === 'ar' ? 'محطة الأصول' : 'Asset Terminal'}
          </h2>
          <div className="flex items-center gap-2 mt-4">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
             </span>
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">System Synchronized</span>
          </div>
        </div>

        <div className="flex w-full xl:w-auto gap-4">
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-3 px-8 py-5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all group">
            <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            {lang === 'ar' ? 'إضافة أصل' : 'Initialize Asset'}
          </button>
          <div className="relative flex-1 xl:w-96 group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-all" size={18} />
             <input 
               type="text" 
               placeholder={lang === 'ar' ? 'بحث شامل...' : 'Omni Cluster Search...'} 
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-sm text-white focus:border-indigo-500/50 outline-none transition-all" 
               onChange={(e) => setSearchTerm(e.target.value)} 
             />
          </div>
        </div>
      </div>

      {/* 3. DATA VISUALIZATION TABLE */}
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] overflow-visible shadow-2xl relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <thead className="bg-white/10 text-slate-500 text-[11px] font-black uppercase tracking-[0.25em]">
              <tr>
                <th className="p-10 w-4 text-center"><input type="checkbox" className="w-4 h-4 accent-indigo-500" /></th>
                <th className="p-10">{lang === 'ar' ? 'المنتج' : 'Asset Core'}</th>
                <th className="p-10">{lang === 'ar' ? 'الحالة' : 'Logic Status'}</th>
                <th 
                  className="p-10 cursor-pointer hover:text-white transition-colors" 
                  onClick={() => setSortConfig({key: 'price', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})}
                >
                  {lang === 'ar' ? 'القيمة' : 'Valuation'} <ArrowUpDown size={14} className="inline ml-1 opacity-30" />
                </th>
                <th className="p-10 text-center">{lang === 'ar' ? 'إجراء' : 'Control'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredItems.map((order) => (
                <tr key={order.id} className="group hover:bg-white/[0.04] transition-all relative">
                  <td className="p-10 text-center"><input type="checkbox" className="w-4 h-4 accent-indigo-500" /></td>
                  <td className="p-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-indigo-400 font-black italic border border-white/5 group-hover:rotate-6 transition-transform">
                        {order.id.replace('#', '')}
                      </div>
                      <div>
                        <div className="font-black text-sm text-white uppercase tracking-tight">{order.product}</div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mt-2 uppercase italic opacity-60">
                          <Calendar size={12} /> {formatDate(order.date)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-10">
                    <span className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-[10px] font-black border uppercase tracking-widest ${STATUS_THEME[order.status]}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]" />
                      {order.status}
                    </span>
                  </td>
                  <td className="p-10 font-black text-3xl italic tracking-tighter text-white group-hover:translate-x-2 transition-transform">
                    {formatCurrency(order.price)}
                  </td>
                  <td className="p-10 text-center relative overflow-visible">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === order.id ? null : order.id); }} 
                      className="p-4 bg-white/5 rounded-2xl text-slate-500 hover:text-indigo-400 transition-all border border-white/5 group-hover:bg-indigo-500/10"
                    >
                      <MoreVertical size={20} />
                    </button>
                    {activeMenu === order.id && (
                      <div className={`absolute ${lang === 'ar' ? 'left-10' : 'right-10'} top-24 w-52 bg-[#1e293b]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-3xl z-[500] p-3 animate-in fade-in zoom-in-95`}>
                        <button className="flex items-center gap-3 w-full p-4 text-[10px] font-black text-slate-400 hover:bg-white/10 hover:text-white rounded-2xl transition-all uppercase">
                          <Edit3 size={14} /> Edit Asset
                        </button>
                        <button className="flex items-center gap-3 w-full p-4 text-[10px] font-black text-rose-400 hover:bg-rose-500/10 rounded-2xl transition-all uppercase">
                          <Trash2 size={14} /> Terminate
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredItems.length === 0 && (
            <div className="py-40 flex flex-col items-center justify-center opacity-20">
              <Inbox size={80} strokeWidth={1} />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] mt-4">Buffer Empty</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. MODAL LAYER */}
      <AddOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddOrder} lang={lang} />
    </div>
  );
}

// ==========================================
// COMPONENT: ADD ASSET MODAL
// ==========================================
function AddOrderModal({ isOpen, onClose, onAdd, lang }) {
  const [f, setF] = useState({ product: '', customer: '', price: '', status: 'Processing' });
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(f);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white/5 border border-white/10 rounded-[3.5rem] shadow-3xl backdrop-blur-3xl overflow-hidden animate-in zoom-in-95 duration-500">
        <header className="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <h3 className="text-3xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none">
            {lang === 'ar' ? 'إضافة أصل' : 'Initialize Asset'}
          </h3>
          <button onClick={onClose} className="p-4 bg-white/5 rounded-2xl text-slate-500 hover:text-rose-400 transition-all">
            <X size={24} />
          </button>
        </header>
        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="space-y-3 group">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-1">Asset Name</label>
            <div className="relative">
              <Package className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={20} />
              <input 
                required 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white outline-none focus:border-indigo-500/50 transition-all" 
                placeholder="React SaaS Template" 
                onChange={(e) => setF({...f, product: e.target.value})} 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 group">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-1">Valuation ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input 
                  required 
                  type="number" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white outline-none focus:border-indigo-500/50" 
                  placeholder="299" 
                  onChange={(e) => setF({...f, price: Number(e.target.value)})} 
                />
              </div>
            </div>
            <div className="space-y-3 group">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-1">Client</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                <input 
                  required 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white outline-none focus:border-indigo-500/50" 
                  placeholder="Ahmad Ali" 
                  onChange={(e) => setF({...f, customer: e.target.value})} 
                />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full py-6 rounded-2xl bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all flex items-center justify-center gap-3">
            <CheckCircle size={18} /> Deploy Asset
          </button>
        </form>
      </div>
    </div>
  );
}
