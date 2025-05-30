import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const KeywordPage = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/keywords?since=daily`).then((res) => {
      setKeywords(res.data.data || []);
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Keyword Cloud</h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map((item) => (
          <span
            key={item.keyword}
            className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-700"
            style={{ fontSize: `${12 + item.weight}px` }}
          >
            {item.keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordPage;
