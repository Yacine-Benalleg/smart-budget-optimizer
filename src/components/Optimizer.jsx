export default function Optimizer({ data, income }) {
  const weights = {
    high: 1,
    medium: 0.7,
    low: 0.4,
  };

  const weightedCost = data.reduce((sum, i) => {
    return sum + Number(i.amount) * weights[i.priority];
  }, 0);

  const total = data.reduce((sum, i) => sum + Number(i.amount), 0);

  const savingsTarget = income * 0.2;

  const available = income - total;

  const deficit = savingsTarget - available;

  const lowPriorityTotal = data
    .filter((d) => d.priority === "low")
    .reduce((s, d) => s + d.amount, 0);

  return (
    <div className="bg-slate-900 p-5 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Budget Optimizer</h2>

      <p>Total Expenses: ${total.toFixed(2)}</p>
      <p>Weighted Cost: ${weightedCost.toFixed(2)}</p>
      <p>Target Savings (20%): ${savingsTarget.toFixed(2)}</p>

      {available >= savingsTarget ? (
        <p className="text-green-400 mt-3">✔ Budget is optimized.</p>
      ) : lowPriorityTotal >= deficit ? (
        <p className="text-yellow-400 mt-3">
          ⚠ Reduce low-priority expenses by ${deficit.toFixed(2)}
        </p>
      ) : (
        <p className="text-red-400 mt-3">
          ❌ Consider reducing medium expenses.
        </p>
      )}
    </div>
  );
}
