/**
 * @component ProtocolChart
 * @version 2.1.0
 * @description Advanced visualization engine optimized for EliteDash standard.
 */
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { time: '00:00', flow: 450 },
  { time: '04:00', flow: 890 },
  { time: '08:00', flow: 620 },
  { time: '12:00', flow: 1100 },
  { time: '16:00', flow: 750 },
  { time: '20:00', flow: 1300 },
  { time: '23:59', flow: 980 },
];

export default function ProtocolChart() {
  return (
    <div className="h-full w-full select-none min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
          
          <defs>
            <linearGradient id="protocolGlow" x1="0" y1="0" x2="0" y2="1">
              {/* Syncing with HSL variables from index.css */}
              <stop 
                offset="5%" 
                stopColor="hsl(var(--primary))" 
                stopOpacity={0.3}
              />
              <stop 
                offset="95%" 
                stopColor="hsl(var(--primary))" 
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid 
            strokeDasharray="4 4" 
            stroke="rgba(255,255,255,0.03)" 
            vertical={false} 
          />

          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 10, fontWeight: '600' }}
            dy={10}
          />
          
          <YAxis hide domain={['auto', 'auto']} />

          <Tooltip 
            cursor={{ 
              stroke: 'hsl(var(--primary))', 
              strokeWidth: 1, 
              strokeDasharray: '5 5' 
            }}
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px',
              fontSize: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            itemStyle={{ color: 'white', fontWeight: '900' }}
            labelStyle={{ color: '#64748b', marginBottom: '4px' }}
          />

          <Area 
            type="monotoneX" 
            dataKey="flow" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#protocolGlow)" 
            animationDuration={2000}
            // Adding the signature glow effect
            style={{ 
              filter: 'drop-shadow(0px 8px 12px hsla(var(--primary), 0.4))' 
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
