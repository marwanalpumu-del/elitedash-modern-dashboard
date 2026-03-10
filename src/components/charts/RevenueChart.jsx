/**
 * @component RevenueChart
 * @description Advanced analytic chart with dynamic filtering and glassmorphism UI.
 * Standards: React 18+, Tailwind CSS, Recharts API.
 */

import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { Calendar, ChevronDown, Filter } from 'lucide-react';

// Static Data Sets for Demonstration
const DATA_SETS = {
  weekly: [
    { label: 'Mon', value: 400 }, { label: 'Tue', value: 700 }, { label: 'Wed', value: 500 },
    { label: 'Thu', value: 1500 }, { label: 'Fri', value: 1200 }, { label: 'Sat', value: 1800 },
  ],
  monthly: [
    { label: 'Week 1', value: 5000 }, { label: 'Week 2', value: 8500 },
    { label: 'Week 3', value: 7200 }, { label: 'Week 4', value: 11000 },
  ],
  yearly: [
    { label: 'Q1', value: 25000 }, { label: 'Q2', value: 45000 },
    { label: 'Q3', value: 38000 }, { label: 'Q4', value: 60000 },
  ]
};

export default function RevenueChart({ lang = 'ar' }) {
  const [range, setRange] = useState('weekly');
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic Data Filtering based on selection
  const activeData = useMemo(() => DATA_SETS[range], [range]);

  // Multilingual UI Labels
  const labels = {
    ar: { weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي', title: 'تحليل الإيرادات' },
    en: { weekly: 'Weekly', monthly: 'Monthly', yearly: 'Yearly', title: 'Revenue Analytics' }
  }[lang === 'ar' ? 'ar' : 'en'];

  return (
    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative animate-in fade-in duration-1000">
      
      {/* Chart Header & Control Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h3 className="text-white font-black italic uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <Filter size={14} className="text-indigo-400" /> {labels.title}
          </h3>
        </div>

        {/* Customized Glassmorphism Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-40 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-between hover:bg-white/10 transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-indigo-500" />
              {labels[range]}
            </div>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-3 w-full min-w-[150px] bg-[#020617]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 z-50 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              {['weekly', 'monthly', 'yearly'].map((option) => (
                <button
                  key={option}
                  onClick={() => { setRange(option); setIsOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    range === option ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {labels[option]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Chart Visualization */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activeData}>
            <defs>
              <linearGradient id="premiumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              cursor={{ stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5 5' }}
              contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px' }}
              itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
            />
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#475569', fontSize: 10, fontWeight: 'bold'}}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#6366f1" 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#premiumGradient)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
