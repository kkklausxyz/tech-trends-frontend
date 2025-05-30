import { TagCloud } from "react-tagcloud";
import { scaleValues } from "../utils/scale";

const KeywordCloud = ({ data = [] }) => {
  const scaled = scaleValues(data, "weight");

  const formattedData = scaled.map((item) => ({
    value: item.keyword,
    count: item.scaledValue,
  }));

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="w-full max-w-3xl">
        <TagCloud
          minSize={28}
          maxSize={80}
          tags={formattedData}
          className="simple-cloud"
          colorOptions={{ luminosity: "bright" }}
        />
      </div>
    </div>
  );
};

export default KeywordCloud;
