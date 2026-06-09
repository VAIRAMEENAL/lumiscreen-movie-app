import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1 className="logo">🎬 LumiScreen</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/watchlist">Watchlist</Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
