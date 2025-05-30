import { useState } from "react";
import TrendChart from "../components/TrendChart";

const LanguagePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Language Distribution</h2>
      <TrendChart period="daily" setLoading={setLoading} />
    </div>
  );
};

export default LanguagePage;
