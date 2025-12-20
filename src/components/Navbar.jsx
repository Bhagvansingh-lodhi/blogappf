import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/logo.png";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      {/* DESKTOP + MOBILE BAR */}
      <div className="w-full h-16 flex items-center font-lato">

        {/* LOGO */}
        <Link to="/" className="ml-6 md:ml-[120px] flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex ml-auto mr-[120px] items-center">
          <div className="flex items-center gap-8 text-[18px] leading-[27.4px] text-[#071477]">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="
                  relative
                  transition-colors duration-200
                  hover:text-[#1028CD]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-[#1028CD]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto mr-6 md:hidden text-[#071477]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 text-[18px] text-[#071477]">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="hover:text-[#1028CD]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
