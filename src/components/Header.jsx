import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tech Trends on GitHub</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            GitHub Top Languages
          </Link>
          <Link to="/popular" className="hover:underline">
            GitHub Top Repos
          </Link>
          <Link to="/keywords" className="hover:underline">
            GitHub Keywords
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 pt-2 space-y-2">
          <Link to="/" className="hover:underline" onClick={toggleMenu}>
            GitHub Top Languages
          </Link>
          <Link to="/popular" className="hover:underline" onClick={toggleMenu}>
            GitHub Top Repos
          </Link>
          <Link to="/keywords" className="hover:underline" onClick={toggleMenu}>
            GitHub Keywords
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
