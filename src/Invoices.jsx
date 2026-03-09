/**
 * @component Invoices
 * @description Professional billing management system with dynamic status tags, 
 * print capability, and glassmorphism styling.
 */

import React from 'react';
import { Download, Printer, CheckCircle2, Clock } from 'lucide-react';

// --- MOCK DATA ---
// Centralized data for easier API integration later
const INVOICE_DATA = [
  { id: "INV-102", client: "Marwan Al-Pumu", date: "2026-03-09", amount: "$1,500", status: "Paid" },
  { id: "INV-103", client: "Global Tech", date: "2026-03-08", amount: "$2,300", status: "Pending" },
  { id: "INV-104", client: "Creative Agency", date: "2026-03-07", amount: "$850", status: "Paid" }
];

export default function Invoices({ lang }) {

  /**
   * @function handlePrint
   * @description Opens the browser print dialog. CSS in index.css handles 
   * hiding sidebar/buttons for a clean PDF.
   */
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* HEADER SECTION - No Print Area */}
      <div className="flex justify-between items-center px-4 no-print">
        <h2 className="text-2xl font-black italic tracking-tighter uppercase text-indigo-500">
          {lang === 'ar' ? 'نظام الفواتير' : 'Billing System'}
        </h2>
        <button 
          onClick={handlePrint}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition shadow-lg shadow-indigo-600/30 active:scale-95"
        >
          <Printer size={18} /> {lang === 'ar' ? 'طباعة التقارير' : 'Print Reports'}
        </button>
      </div>

      {/* GLASSMORPHISM TABLE CONTAINER */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl print:bg-white print:text-black">
        <table className="w-full text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <thead className="bg-white/5 text-slate-400 text-[10px] uppercase tracking-[0.2em] print:bg-slate-100 print:text-black">
            <tr>
              <th className="p-6">{lang === 'ar' ? 'رقم الفاتورة' : 'ID'}</th>
              <th className="p-6">{lang === 'ar' ? 'العميل' : 'Client'}</th>
              <th className="p-6">{lang === 'ar' ? 'الحالة' : 'Status'}</th>
              <th className="p-6">{lang === 'ar' ? 'المبلغ' : 'Amount'}</th>
              <th className="p-6 text-center no-print">{lang === 'ar' ? 'إجراء' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 print:divide-slate-200">
            {INVOICE_DATA.map((inv) => (
              <tr key={inv.id} className="group hover:bg-white/5 transition-all print:hover:bg-transparent">
                <td className="p-6 font-mono text-indigo-400 font-bold">{inv.id}</td>
                <td className="p-6">
                  <div className="font-bold text-sm">{inv.client}</div>
                  <div className="text-[10px] text-slate-500">{inv.date}</div>
                </td>
                <td className="p-6">
                  {/* DYNAMIC STATUS TAGS */}
                  <span className={`flex items-center gap-1.5 text-[10px] font-black px-3 py-1.5 rounded-full w-fit ${
                    inv.status === 'Paid' 
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                  }`}>
                    {inv.status === 'Paid' ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                    {lang === 'ar' ? (inv.status === 'Paid' ? 'تم الدفع' : 'معلق') : inv.status}
                  </span>
                </td>
                <td className="p-6 font-black text-lg tracking-tighter">{inv.amount}</td>
                <td className="p-6 no-print">
                  <div className="flex justify-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <button className="p-2.5 bg-white/5 rounded-xl hover:bg-indigo-600 hover:text-white transition shadow-xl">
                      <Download size={16}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER: Only visible on paper */}
      <div className="hidden print:flex justify-between mt-12 pt-8 border-t border-slate-200 text-slate-400 text-[10px] font-bold">
        <span>© 2026 EliteDash System - By Marwan Al-Pumu</span>
        <span>Generated on: {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
}
