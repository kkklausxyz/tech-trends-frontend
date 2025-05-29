import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TrendChart = ({ period }) => {
  const [dataMap, setDataMap] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dataMap[period]) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}?since=${period}`);
        const json = await res.json();
        setDataMap((prev) => ({
          ...prev,
          [period]: json,
        }));
      } catch (error) {
        console.error("Error fetching trends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period, dataMap]);

  const currentData = dataMap[period] || [];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Languages - {period}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {currentData.map((item) => (
            <li
              key={item.language}
              className="flex justify-between border-b py-1"
            >
              <span>{item.language}</span>
              <span>{item.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendChart;
