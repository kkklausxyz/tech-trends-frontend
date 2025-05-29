import { useState } from "react";
import TrendChart from "../components/TrendChart";

function Home() {
  const [period, setPeriod] = useState("daily");

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tech Trends Explorer</h1>
      <div className="mb-4 space-x-2">
        {["daily", "weekly", "monthly"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-4 py-2 rounded ${
              p === period ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <TrendChart period={period} />
    </div>
  );
}

export default Home;
