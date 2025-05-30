import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PopularPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/top-repositories?since=daily`).then((res) => {
      setRepos(res.data.data || []);
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Top Starred Repositories</h2>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li key={repo.repo_url}>
            <a
              href={repo.repo_url}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.repo_name}
            </a>
            <p className="text-sm text-gray-700">{repo.description}</p>
            <p className="text-sm text-gray-500">
              Language: {repo.language} | ⭐ {repo.stars}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPage;
