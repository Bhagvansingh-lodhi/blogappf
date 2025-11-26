import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-white font-semibold"
      : "text-gray-200 hover:text-white transition-colors duration-200";

  const navBackground = isScrolled 
    ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/20 text-gray-900"
    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
              ✨
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              StorySphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${isActive("/")} ${location.pathname === "/" ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"}`}
            >
              Home
            </Link>

            {isLoggedIn && (
              <Link 
                to="/admin" 
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${isActive("/admin")} ${location.pathname === "/admin" ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"}`}
              >
                Dashboard
              </Link>
            )}

            <div className="flex items-center gap-3 ml-4">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="px-6 py-2.5 rounded-full bg-white text-indigo-600 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 hover:bg-gray-50 border border-white/20"
                >
                  Admin Login
                </Link>
              ) : (
                <button
                  onClick={handleLogoutClick}
                  className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Logout</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className={`w-5 h-0.5 bg-current rounded transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-current rounded transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-current rounded transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-48 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-3 border-t border-white/20 pt-4">
            <Link 
              to="/" 
              className={`px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/")} ${location.pathname === "/" ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {isLoggedIn && (
              <Link 
                to="/admin" 
                className={`px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/admin")} ${location.pathname === "/admin" ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}

            <div className="pt-2">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="block w-full px-4 py-3 rounded-xl bg-white text-indigo-600 font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Login
                </Link>
              ) : (
                <button
                  onClick={handleLogoutClick}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-200 text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;