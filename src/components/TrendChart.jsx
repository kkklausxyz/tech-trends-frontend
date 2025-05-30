import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TrendChart = ({ period, setLoading }) => {
  const [data, setData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [loadingLocal, setLoadingLocal] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoadingLocal(true);
      try {
        const res = await fetch(
          `${API_BASE_URL}/language-distribution?since=${period}`
        );
        const json = await res.json();
        setData(json.data || []);
        setUpdatedAt(json.updated_at || "");
      } catch (error) {
        console.error("Error fetching trends:", error);
      } finally {
        setLoading(false);
        setLoadingLocal(false);
      }
    };

    if (period) fetchData();
  }, [period]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Language Distribution
      </h2>

      {updatedAt && (
        <p className="text-sm text-gray-500 text-center mb-4">
          Last updated at:{" "}
          {(() => {
            const date = new Date(updatedAt);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
          })()}
        </p>
      )}
      {loadingLocal ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            key={period}
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="language" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" isAnimationActive />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendChart;
