import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const TrendChart = ({
  data = [],
  updatedAt = "",
  period = "",
  loading = false,
}) => {
  const total = data.reduce((sum, entry) => sum + (entry.count || 0), 0);

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
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="language"
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#4f46e5"
              label={({ language }) => language}
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}

      {!loading && (
        <p className="text-base text-blue-600 text-center mt-4 font-semibold">
          Number of trending repos: {total}
        </p>
      )}
    </div>
  );
};

export default TrendChart;
