import { useMemo } from "react";

export default function Forecast({ data }) {
  const trend = useMemo(() => {
    if (data.length < 2) return 0;

    const xs = data.map((_, i) => i + 1);
    const ys = data.map((d) => d.amount);

    const n = xs.length;

    const sumX = xs.reduce((a, b) => a + b, 0);
    const sumY = ys.reduce((a, b) => a + b, 0);
    const sumXY = xs.reduce((a, b, i) => a + b * ys[i], 0);
    const sumX2 = xs.reduce((a, b) => a + b * b, 0);

    // Linear regression slope
    return (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  }, [data]);

  return (
    <div className="mt-8 max-w-4xl mx-auto bg-slate-900 p-5 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Spending Forecast</h2>

      {data.length < 2 ? (
        <p className="text-n-3">Not enough data for prediction.</p>
      ) : trend > 0 ? (
        <p className="text-red-400">
          📈 Your spending is increasing. Trend: +{trend.toFixed(2)}
        </p>
      ) : (
        <p className="text-green-400">
          📉 Your spending is decreasing. Trend: {trend.toFixed(2)}
        </p>
      )}
    </div>
  );
}
