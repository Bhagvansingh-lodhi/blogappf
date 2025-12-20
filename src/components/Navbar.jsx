import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    onLogout?.();
    navigate("/login");
  };

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
      {/* FULL WIDTH - NO MAX WIDTH LIMIT */}
      <div className="w-full">
        <div className="h-16 flex items-center">

          {/* LOGO — LEFT (120px) - INCREASED MARGIN */}
          <Link to="/" className="ml-[120px] flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* PUSH EVERYTHING TO RIGHT */}
          <div className="ml-auto flex items-center gap-6 mr-[120px]">

            {/* NAV LINKS — RIGHT SIDE */}
            <div
              className="
                flex items-center gap-8
                font-lato font-normal
                text-[18px] leading-[27.4px]
                text-[#071477]
              "
            >
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;