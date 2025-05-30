import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const TrendChart = ({
  data = [],
  updatedAt = "",
  period = "",
  loading = false,
}) => {
  return (
    <div className="p-4">
      {updatedAt && !loading && (
        <p className="text-sm text-gray-500 text-center mb-4">
          Last updated at:{" "}
          {(() => {
            const date = new Date(updatedAt);
            return date.toLocaleDateString();
          })()}
        </p>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-[400px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" />
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
            <Bar dataKey="count" isAnimationActive>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#4f46e5"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendChart;
