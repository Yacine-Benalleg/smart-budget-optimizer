import { useState, useEffect } from "react";
import Optimizer from "./components/Optimizer";
import Tracker from "./components/Tracker";
import Forecast from "./components/Forecast";
import Summary from "./components/Summary";
import Chart from "./components/Chart";

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("budget-data");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("budget-data", JSON.stringify(data));
  }, [data]);

  const [income, setIncome] = useState(() => {
    const saved = localStorage.getItem("budget-income");
    return saved ? Number(saved) : 1000;
  });
  useEffect(() => {
    localStorage.setItem("budget-income", income);
  }, [income]);
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart Budget Optimizer
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Tracker
          data={data}
          setData={setData}
          income={income}
          setIncome={setIncome}
        />
        <Optimizer data={data} income={income} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Summary data={data} />
        <Forecast data={data} />
      </div>

      <div className="mt-6">
        <Chart data={data} />
      </div>
    </div>
  );
}
