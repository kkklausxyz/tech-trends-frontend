import { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "../components/RepoCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const periods = ["daily", "weekly", "monthly"];

const PopularPage = () => {
  const [period, setPeriod] = useState("daily");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/top-repositories?since=${period}`
        );
        setRepos(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [period]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Top Starred Repositories
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-3 py-1 rounded text-sm ${
              period === p
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            disabled={loading}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full" />
        </div>
      ) : (
        <ul className="space-y-4">
          {repos.map((repo) => (
            <RepoCard key={repo.repo_url} repo={repo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularPage;
