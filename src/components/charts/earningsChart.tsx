import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface EarningsChartProps {
  data: {
    month: string;
    value: number;
  }[];
}

export const EarningsChart = ({ data }: EarningsChartProps) => {
  return (
    <div className="h-[300px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0.08} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
            opacity={0.4}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickFormatter={value => `$${value / 1000}k`}
            dx={-10}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            strokeWidth={2}
            dot={false}
            fill="url(#colorGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
