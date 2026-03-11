import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * @component ProtocolChart
 * @version 1.0.0
 * @description Dynamic Data Visualization Engine. 
 * Fully synchronized with Global Color Protocols via CSS variables.
 * Features: High-precision rendering, Linear Gradients, and Responsive Scaling.
 */
export default function ProtocolChart() {
  
  /**
   * @constant MOCK_DATA
   * @description Simulated system throughput or financial performance metrics.
   */
  const data = [
    { name: '00:00', val: 400 },
    { name: '04:00', val: 300 },
    { name: '08:00', val: 900 },
    { name: '12:00', val: 500 },
    { name: '16:00', val: 700 },
    { name: '20:00', val: 1000 },
  ];

  return (
    <div className="h-[300px] w-full mt-6 select-none">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Dynamic Linear Gradient: Synchronized with --primary protocol */}
          <defs>
            <linearGradient id="protocolGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="rgb(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255,255,255,0.05)" 
            vertical={false} 
          />

          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#64748b', fontSize: 10, fontWeight: 'bold'}}
            dy={10}
          />

          <Tooltip 
            contentStyle={{
              backgroundColor: '#0f172a', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '16px',
              fontSize: '12px'
            }}
            itemStyle={{color: 'rgb(var(--primary))', fontWeight: '900'}}
            cursor={{ stroke: 'rgb(var(--primary))', strokeWidth: 1, strokeDasharray: '5 5' }}
          />

          <Area 
            type="monotone" 
            dataKey="val" 
            stroke="rgb(var(--primary))" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#protocolGradient)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
