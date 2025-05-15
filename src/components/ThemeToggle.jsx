import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-3 bg-gray-200 dark:bg-gray-700 rounded-full z-50 shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? <FaMoon className="text-xl" /> : <FaSun className="text-xl text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;