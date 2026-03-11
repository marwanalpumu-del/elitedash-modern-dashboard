/**
 * @component ProtocolChart
 * @version 2.0.0
 * @description Advanced data visualization engine.
 * Features: Dynamic theme synchronization, High-fidelity gradients, 
 * and responsive scaling using Recharts API.
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

/**
 * @constant MOCK_STREAM_DATA
 * @description Real-time simulated data points for system throughput monitoring.
 */
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
    <div className="h-[280px] w-full select-none">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          
          {/* DEFINITIONS: DYNAMIC GRADIENT ENGINE */}
          <defs>
            <linearGradient id="protocolGlow" x1="0" y1="0" x2="0" y2="1">
              {/* This stop uses the global --primary variable for color-sync */}
              <stop 
                offset="5%" 
                stopColor="rgb(var(--primary))" 
                stopOpacity={0.4}
              />
              <stop 
                offset="95%" 
                stopColor="rgb(var(--primary))" 
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          {/* GRID CONFIGURATION */}
          <CartesianGrid 
            strokeDasharray="6 6" 
            stroke="rgba(255,255,255,0.02)" 
            vertical={false} 
          />

          {/* AXIS CONFIGURATION */}
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#475569', fontSize: 10, fontWeight: '900' }}
            dy={15}
          />
          
          <YAxis hide domain={['auto', 'auto']} />

          {/* CUSTOM TOOLTIP ENGINE */}
          <Tooltip 
            cursor={{ 
              stroke: 'rgb(var(--primary))', 
              strokeWidth: 2, 
              strokeDasharray: '4 4' 
            }}
            contentStyle={{ 
              backgroundColor: '#020617', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              padding: '12px'
            }}
            itemStyle={{ 
              color: 'rgb(var(--primary))', 
              fontSize: '12px', 
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
          />

          {/* THE MAIN AREA LAYER */}
          <Area 
            type="monotone" 
            dataKey="flow" 
            stroke="rgb(var(--primary))" 
            strokeWidth={4} 
            fillOpacity={1} 
            fill="url(#protocolGlow)" 
            animationDuration={2500}
            animationEasing="ease-in-out"
            // Adding a subtle glow to the line itself
            style={{ filter: 'drop-shadow(0px 4px 10px rgba(var(--primary), 0.5))' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
