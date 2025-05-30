// import { useState } from "react";
// import TrendChart from "../components/TrendChart";

// const periods = [
//   { label: "Daily", value: "daily" },
//   { label: "Weekly", value: "weekly" },
//   { label: "Monthly", value: "monthly" },
// ];

// function Home() {
//   const [period, setPeriod] = useState("daily");
//   const [loading, setLoading] = useState(false);

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">
//         What's trending in GitHub?
//       </h1>
//       <div className="mb-4 space-x-2 text-center">
//         {periods.map(({ label, value }) => (
//           <button
//             key={value}
//             onClick={() => setPeriod(value)}
//             disabled={loading}
//             className={`px-4 py-2 rounded font-medium transition ${
//               value === period
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//       <TrendChart period={period} setLoading={setLoading} />
//     </div>
//   );
// }

// export default Home;
