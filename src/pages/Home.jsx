import { useState } from "react";
import TrendChart from "../components/TrendChart";

function Home() {
  const [period, setPeriod] = useState("daily");
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Tech Trends Explorer
      </h1>
      <div className="mb-4 space-x-2 text-center">
        {["daily", "weekly", "monthly"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            disabled={loading}
            className={`px-4 py-2 rounded font-medium transition ${
              p === period
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {p}
          </button>
        ))}
      </div>
      <TrendChart period={period} setLoading={setLoading} />
    </div>
  );
}

export default Home;
