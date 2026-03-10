/**
 * @page Invoices
 * @description Main Billing Terminal combining data visualization and table management.
 */

import React, { useState } from 'react';
import { Search, Printer, Download, CheckCircle2, Clock } from 'lucide-react';
import RevenueChart from '../components/charts/RevenueChart';

const INVOICE_DATA = [
  { id: "INV-102", client: "Marwan Al-Pumu", date: "2026-03-09", amount: "$1,500", status: "Paid" },
  { id: "INV-103", client: "Global Tech", date: "2026-03-08", amount: "$2,300", status: "Pending" },
  { id: "INV-104", client: "Creative Agency", date: "2026-03-07", amount: "$850", status: "Paid" }
];

export default function Invoices({ lang = 'ar' }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-10 p-4 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* 1. Analytic Section */}
      <section className="no-print">
        <RevenueChart lang={lang} />
      </section>

      {/* 2. Control Toolbar */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-4 no-print">
        <div className="relative flex-1 w-full lg:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder={lang === 'ar' ? 'بحث سريع عن فاتورة...' : 'Quick invoice search...'}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-xs outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none bg-white/5 border border-white/10 p-4 rounded-2xl text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all active:scale-90">
            <Download size={20}/>
          </button>
          <button 
            onClick={() => window.print()}
            className="flex-1 lg:flex-none bg-indigo-600 px-10 py-4 rounded-2xl text-white font-black text-[10px] tracking-widest uppercase hover:bg-indigo-500 shadow-2xl shadow-indigo-600/30 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Printer size={18}/> {lang === 'ar' ? 'طباعة التقارير' : 'Print Reports'}
          </button>
        </div>
      </div>

      {/* 3. Data Presentation Table */}
      <div className="bg-[#020617]/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl border-t-indigo-500/10">
        <div className="overflow-x-auto">
          <table className="w-full text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <thead className="bg-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] border-b border-white/5">
              <tr>
                <th className="p-8">{lang === 'ar' ? 'المعرف' : 'ID'}</th>
                <th className="p-8 text-center sm:text-right">{lang === 'ar' ? 'العميل' : 'Client'}</th>
                <th className="p-8 text-center">{lang === 'ar' ? 'الحالة' : 'Status'}</th>
                <th className="p-8">{lang === 'ar' ? 'المبلغ' : 'Amount'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {INVOICE_DATA.map((inv) => (
                <tr key={inv.id} className="group hover:bg-white/[0.02] transition-colors cursor-default">
                  <td className="p-8 font-mono text-indigo-400 font-black">{inv.id}</td>
                  <td className="p-8">
                    <div className="text-white font-black text-sm uppercase tracking-tight italic group-hover:text-indigo-300 transition-colors">{inv.client}</div>
                    <div className="text-[9px] text-slate-600 font-bold mt-1 uppercase">{inv.date}</div>
                  </td>
                  <td className="p-8 text-center">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase border ${
                      inv.status === 'Paid' 
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    }`}>
                      {inv.status === 'Paid' ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                      {lang === 'ar' ? (inv.status === 'Paid' ? 'مكتمل' : 'معلق') : inv.status}
                    </span>
                  </td>
                  <td className="p-8 text-2xl font-black text-white italic tracking-tighter">${inv.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
