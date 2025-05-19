import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.webp";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode and apply it to the document
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Active link style
  const activeStyle = "font-bold underline underline-offset-4";
  const baseLinkStyle = "hover:text-black dark:hover:text-gray-300";

  // Navbar background classes based on scroll and dark mode
  const navbarBackground = isScrolled 
    ? "bg-lime-600/80 dark:bg-gray-800/70 backdrop-blur-sm" 
    : "bg-[#84cc16] dark:bg-gray-800";

  return (
    <nav className={`sticky top-0 z-50 ${navbarBackground} text-white shadow-lg transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-black dark:text-white">
            <img className="w-12 rounded-lg" src={logo} alt="" />
          </span>
          <span className="dark:text-white">AthletiX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-5 lg:gap-6 md:text-[10px] lg:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-sports"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
          >
            My Equipment List
          </NavLink>

          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Right side items (user/auth + dark mode toggle) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun className="text-yellow-300" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>

          {/* Login Button */}
          {user ? (
            <div className="hidden md:flex gap-3">
              <div className="relative group">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-blue-400"
                />
                {/* Tooltip */}
                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                  {user?.displayName || "User"}
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="bg-red-500 px-2 py-1 text-white rounded-md flex items-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white font-bold text-black px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white"
                    : "bg-black font-bold text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white font-bold text-black px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white"
                    : "bg-black font-bold text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                }
              >
                Register
              </NavLink>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${navbarBackground} flex flex-col items-center py-4 space-y-4`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-sports"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
            onClick={() => setIsOpen(false)}
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
            onClick={() => setIsOpen(false)}
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) =>
              isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
            }
            onClick={() => setIsOpen(false)}
          >
            My Equipment List
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? `${activeStyle} ${baseLinkStyle}` : baseLinkStyle
              }
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-black px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white font-bold"
                : "bg-black text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-black px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white font-bold"
                : "bg-black text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Register
          </NavLink>
          <button
            onClick={() => {
              toggleDarkMode();
              setIsOpen(false);
            }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            {darkMode ? (
              <>
                <Sun className="text-yellow-300" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="text-gray-700" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;