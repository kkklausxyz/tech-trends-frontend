import { useState, useEffect } from "react";
import TrendChart from "../components/TrendChart";
import PieChart from "../components/PieChart";
import axios from "axios";

const periods = ["daily", "weekly", "monthly"];
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const LanguagePage = () => {
  const [period, setPeriod] = useState("daily");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE}/language-distribution?since=${period}`
        );
        const json = res.data;
        setData(json.data || []);
        setUpdatedAt(json.updated_at || "");
      } catch (err) {
        console.error("Error fetching language data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        GitHub Top Languages
      </h2>

      <div className="flex justify-center space-x-3 mb-6">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            disabled={loading}
            className={`px-3 py-1.5 rounded text-sm transition ${
              period === p
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      <PieChart
        data={data}
        updatedAt={updatedAt}
        period={period}
        loading={loading}
      />

      <p className="text-xs text-gray-500 text-center mt-4">
        * Data from GitHub Trending, showing the frequency of languages used in
        trending repositories.
      </p>
    </div>
  );
};

export default LanguagePage;
