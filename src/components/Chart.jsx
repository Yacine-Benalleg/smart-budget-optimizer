import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Chart({ data }) {
  // Convert data to chart format
  const chartData = data.map((item, index) => ({
    index: index + 1,
    amount: item.amount,
    category: item.name,
  }));

  return (
    <div className="bg-slate-900 p-5 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Spending Trend</h2>

      {chartData.length < 2 ? (
        <p className="text-n-3">Not enough data.</p>
      ) : (
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="index" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
