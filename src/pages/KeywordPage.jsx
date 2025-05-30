import { useState, useEffect } from "react";
import axios from "axios";
import KeywordCloud from "../components/KeywordCloud";

const periods = ["daily", "weekly", "monthly"];
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const KeywordPage = () => {
  const [period, setPeriod] = useState("daily");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchKeywords = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE}/keywords?since=${period}`);
        setData(res.data.data || []);
      } catch (err) {
        console.error("Error fetching keywords:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKeywords();
  }, [period]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">GitHub Keywords</h2>

      <div className="flex justify-center space-x-2 mb-6">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            disabled={loading}
            className={`px-3 py-1 text-sm rounded ${
              period === p
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
        </div>
      ) : (
        <KeywordCloud data={data} />
      )}
    </div>
  );
};

export default KeywordPage;
