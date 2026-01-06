import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/logo.png";

const prefetchMap = {
  "/": () => import("../pages/PublicBlog.jsx"),
  "/resources": () => import("../pages/Resources.jsx"),
  "/portfolio": () => import("../pages/Portfolio.jsx"),
  "/contact": () => import("../pages/Contact.jsx"),
};

const Navbar = () => {
  const location = useLocation();
  const lastScroll = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 10);
      setHidden(current > lastScroll.current && current > 80);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Blogs", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const prefetch = (path) => prefetchMap[path]?.();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-full h-16 flex items-center font-lato max-w-[1440px] mx-auto">

        <div className="ml-6 md:ml-[120px] flex items-center h-full">
          <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        </div>

        <div className="hidden md:flex ml-auto mr-[120px] items-center h-full">
          <div className="flex items-center gap-8 text-[18px] leading-[27.4px] text-[#071477]">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => prefetch(item.path)}
                  className={`
                    relative transition-colors duration-200
                    hover:text-[#1028CD]
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-[#1028CD]
                    after:transition-all after:duration-300
                    ${active ? "after:w-full text-[#1028CD]" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto mr-6 md:hidden text-[#071477]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
