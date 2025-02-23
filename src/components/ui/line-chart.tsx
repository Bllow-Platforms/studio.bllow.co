import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface LineChartProps {
  data: Array<{ x: string; y: number }>;
}

export const LineChart = ({ data }: LineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <XAxis dataKey="x" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
