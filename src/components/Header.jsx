import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tech Trends Explorer</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Languages
          </Link>
          <Link to="/popular" className="hover:underline">
            Top Repos
          </Link>
          <Link to="/keywords" className="hover:underline">
            Keywords
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
