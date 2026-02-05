export default function Summary({ data }) {
  const summary = data.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + item.amount;
    return acc;
  }, {});

  const total = Object.values(summary).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-slate-900 p-5 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Category Summary</h2>

      {Object.keys(summary).length === 0 ? (
        <p className="text-n-3">No data yet.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(summary).map(([cat, value]) => {
            const percent = ((value / total) * 100).toFixed(1);

            return (
              <li
                key={cat}
                className="flex justify-between bg-slate-800 p-2 rounded"
              >
                <span>{cat}</span>

                <span>
                  ${value.toFixed(2)} ({percent}%)
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
