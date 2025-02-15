import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Auth/auth-context";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import IC from "../../assets/ic-rider-icon.svg";

const ChopsticksLogo = () => (
  <img src={IC} alt="chopsticks" className="w-12 h-12" />
);

const PandaLogo = () => (
  <img src={logo} alt="panda" className="w-16" />
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      setShowCongrats(true);
      const timer = setTimeout(() => setShowCongrats(false), 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Pink banner */}
      {showBanner && (
        <div className="w-full bg-pink-500 py-4 px-4 lg:h-16 flex relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 w-full justify-center">
            <div className="flex items-center gap-2 flex-col lg:flex-row text-center lg:text-left">
              <ChopsticksLogo />
              <span className="text-white font-bold text-base lg:text-lg whitespace-nowrap">
                Do you need a business account?
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white rounded-lg font-medium hover:bg-white hover:text-black p-2 lg:p-3 transition-colors border-2 border-white w-full lg:w-auto ml-2">
                SIGN UP NOW
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white hover:text-gray-200 transition-colors absolute right-2"
                aria-label="Close banner"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <PandaLogo />
            <span className="text-pink-500 text-2xl lg:text-3xl font-bold">KHANA</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 text-2xl font-bold p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Contact Us
            </Link>
            <Link to="/privacy" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Privacy Policy
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <span className="text-2xl">👤</span>
                  <span>{user.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${showUserDropdown ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {showUserDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <button
                  onClick={() => window.authModal.showLogin()}
                  className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => window.authModal.showSignup()}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Sign up
                </button>
              </>
            )}

            {/* Language and cart section */}
            <div className="flex items-center gap-2 text-gray-600">
              <span role="img" aria-label="language">🌐</span>
              <select className="bg-transparent border-none outline-none">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <button className="text-gray-600 hover:text-pink-500 transition-colors" aria-label="Cart">
              🛒
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`} aria-expanded={isMenuOpen}>
          <div className="flex flex-col gap-4 mt-4 pb-4">
            <Link to="/" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Contact Us
            </Link>
            <Link to="/privacy" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
              Privacy Policy
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => window.authModal.showLogin()}
                  className="px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors text-left"
                >
                  Log in
                </button>
                <button
                  onClick={() => window.authModal.showSignup()}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-left"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Congratulatory message */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 right-4 bg-pink-500 text-white px-6 py-4 rounded-lg shadow-lg z-50"
          >
            <p className="font-bold">Welcome back, {user.name}!</p>
            <p className="text-sm">Let's get started with your next meal.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;