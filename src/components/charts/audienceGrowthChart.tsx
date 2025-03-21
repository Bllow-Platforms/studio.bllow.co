import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface AudienceGrowthChartProps {
  data: {
    month: string;
    followers: number;
    supporters: number;
  }[];
}

export const AudienceGrowthChart = ({ data }: AudienceGrowthChartProps) => {
  return (
    <div className="h-[300px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="followersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0.01} />
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
            dx={-10}
          />
          <Line
            type="monotone"
            dataKey="followers"
            stroke="#6366F1"
            strokeWidth={2}
            dot={{ fill: '#6366F1', r: 2 }}
            activeDot={{ r: 4 }}
            fillOpacity={0.8}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="supporters"
            stroke="#000000"
            strokeWidth={2}
            dot={{ fill: '#000000', r: 2 }}
            activeDot={{ r: 4 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
