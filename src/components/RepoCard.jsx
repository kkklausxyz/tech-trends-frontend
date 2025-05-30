const RepoCard = ({ repo }) => {
  return (
    <li
      key={repo.repo_url}
      className="p-4 border rounded shadow-sm bg-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
    >
      <a
        href={repo.repo_url}
        className="text-blue-600 font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {repo.repo_name}
      </a>
      <p className="text-sm text-gray-700 mt-1">{repo.description}</p>
      <p className="text-sm text-gray-500 mt-1">
        Language: {repo.language} | ⭐ {repo.stars}
      </p>
    </li>
  );
};

export default RepoCard;
