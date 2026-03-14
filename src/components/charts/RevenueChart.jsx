/**
 * @component RevenueChart
 * @version 1.2.0
 * @description Advanced financial data visualizer with dynamic range switching.
 * Features: React Memoization, HSL Gradient Sync, and Responsive Layout.
 */
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const DATA_MATRIX = {
  weekly: [
    { label: 'Mon', val: 400 }, { label: 'Tue', val: 700 }, { label: 'Wed', val: 500 },
    { label: 'Thu', val: 900 }, { label: 'Fri', val: 650 }, { label: 'Sat', val: 1100 }
  ],
  monthly: [
    { label: 'Jan', val: 2400 }, { label: 'Feb', val: 3200 }, { label: 'Mar', val: 2800 },
    { label: 'Apr', val: 4500 }, { label: 'May', val: 3900 }, { label: 'Jun', val: 5100 }
  ]
};

export default function RevenueChart({ lang = 'ar' }) {
  const [range, setRange] = useState('weekly');
  const isAr = lang === 'ar';

  const activeData = useMemo(() => DATA_MATRIX[range], [range]);

  return (
    <div className="glass-panel rounded-[2.5rem] p-6 md:p-8 card-interactive">
      
      {/* CHART HEADER & RANGE TOGGLE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="text-white font-black uppercase text-sm tracking-widest font-sans-ar">
            {isAr ? 'بروتوكول الإيرادات' : 'Revenue Protocol'}
          </h3>
          <p className="text-[9px] text-slate-500 uppercase font-bold mt-1 tracking-tighter">
            Live analytics throughput
          </p>
        </div>

        <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
          {['weekly', 'monthly'].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all duration-300 ${
                range === r ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {isAr ? (r === 'weekly' ? 'أسبوعي' : 'شهري') : r}
            </button>
          ))}
        </div>
      </div>

      {/* CHART ENGINE */}
      <div className="h-[300px] w-full select-none">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activeData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.02)" vertical={false} />
            
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10, fontWeight: '900' }}
              dy={15}
            />

            <Tooltip 
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{ 
                backgroundColor: '#020617', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '900'
              }}
              itemStyle={{ color: 'hsl(var(--primary))' }}
            />

            <Area 
              type="monotone" 
              dataKey="val" 
              stroke="hsl(var(--primary))" 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#revenueGlow)"
              animationDuration={1500}
              style={{ filter: 'drop-shadow(0px 8px 15px hsla(var(--primary), 0.3))' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
