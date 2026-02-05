import { useState } from "react";

export default function Tracker({ data, setData, income, setIncome }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [priority, setPriority] = useState("medium");

  const addItem = () => {
    if (!name || !amount) return;

    setData([
      ...data,
      {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        priority: "medium",
      },
    ]);

    setName("");
    setAmount("");
    setPriority("medium");
  };
  return (
    <div className="bg-slate-900 p-5 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4">Expense Tracker</h2>
      <div className="space-y-3 mb-4">
        {/* Income */}
        <div>
          <label className="block text-sm text-n-3 mb-1">
            Monthly Income ($)
          </label>

          <input
            type="number"
            className="w-full p-2 rounded bg-slate-800 border border-white/10 focus:outline-none focus:border-indigo-500"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm text-n-3 mb-1">
            Expense Category
          </label>

          <input
            className="w-full p-2 rounded bg-slate-800 border border-white/10 focus:outline-none focus:border-indigo-500"
            placeholder="e.g. Food, Rent, Transport"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm text-n-3 mb-1">
            Expense Amount ($)
          </label>

          <input
            type="number"
            className="w-full p-2 rounded bg-slate-800 border border-white/10 focus:outline-none focus:border-indigo-500"
            placeholder="e.g. 120"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-sm text-n-3 mb-1">Priority Level</label>

        <select
          className="w-full p-2 rounded bg-slate-800 border border-white/10"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High (Essential)</option>
          <option value="medium">Medium</option>
          <option value="low">Low (Flexible)</option>
        </select>
      </div>
      <button
        onClick={addItem}
        className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded"
      >
        Add
      </button>

      <ul className="mt-4 space-y-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-slate-800 py-2 px-4 rounded"
          >
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-n-3">${item.amount}</p>
            </div>

            <button
              onClick={() => setData(data.filter((d) => d.id !== item.id))}
              className="text-red-400 hover:text-red-500 text-sm"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
