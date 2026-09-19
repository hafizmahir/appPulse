import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';

export const ReviewChart = ({ ratings }) => {
  // Format ratings array for horizontal chart (5 star at top, 1 star at bottom)
  const chartData = [...(ratings || [])].reverse();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs shadow-lg font-medium">
          <p className="font-semibold">{data.name}</p>
          <p className="text-amber-400">{data.count.toLocaleString()} reviews</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-sm">
      <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-4">Ratings & Reviews</h3>
      
      <div className="h-48 sm:h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
              width={55}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(241, 245, 249, 0.6)' }} />
            <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={16}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#f97316" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

