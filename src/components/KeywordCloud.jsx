import { useEffect, useState } from "react";
import { TagCloud } from "react-tagcloud";

const KeywordCloud = ({ data = [] }) => {
  const [height, setHeight] = useState(getHeight());

  function getHeight() {
    const h = window.innerHeight;
    if (h < 600) return 240;
    if (h < 900) return 300;
    return 400;
  }

  useEffect(() => {
    const handleResize = () => setHeight(getHeight());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatted = data.map((item) => ({
    value: item.keyword,
    count: item.weight,
  }));

  return (
    <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[70vh]">
      <div style={{ width: "100%", maxWidth: "800px", height }}>
        <TagCloud
          minSize={16}
          maxSize={50}
          tags={formatted}
          className="w-full h-full text-center"
        />
      </div>
    </div>
  );
};

export default KeywordCloud;
