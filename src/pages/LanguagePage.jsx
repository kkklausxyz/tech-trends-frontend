import { useState } from "react";
import TrendChart from "../components/TrendChart";

const LanguagePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <TrendChart period="daily" setLoading={setLoading} />
    </div>
  );
};

export default LanguagePage;
