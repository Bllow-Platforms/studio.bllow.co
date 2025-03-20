import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#888888' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#888888' }}
            tickFormatter={(value) => `$${value/1000}k`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            fill="url(#colorGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};