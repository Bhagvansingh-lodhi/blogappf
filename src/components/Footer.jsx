import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const prefetchMap = {
  "/": () => import("../pages/PublicBlog.jsx"),
  "/resources": () => import("../pages/Resources.jsx"),
  "/portfolio": () => import("../pages/Portfolio.jsx"),
  "/contact": () => import("../pages/Contact.jsx"),
};

const Footer = () => {
  const location = useLocation();
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  // Fade-in reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const prefetch = (path) => prefetchMap[path]?.();

  return (
    <footer
      ref={footerRef}
      className="bg-white font-lato opacity-0 translate-y-8 transition-all duration-800 ease-out"
    >
<div className="max-w-[1120px] mx-auto px-6 py-12 lg:py-16">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Brand / Tagline */}
          <div className="lg:max-w-[380px]">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#071477] mb-4">
              Isha Sahu
            </h3>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-[#3D4367]/85">
              Design work, writing, and learning in public.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-16 lg:gap-24">
            
            {/* Navigate */}
            <div>
              <h4 className="text-sm lg:text-base uppercase tracking-wider font-medium text-[#3D4367]/70 mb-5 lg:mb-6">
                Navigate
              </h4>
              <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[16px] text-[#3D4367]">
                {[
                  { name: "Blogs", path: "/" },
                  { name: "Resources", path: "/resources" },
                  { name: "Portfolio", path: "/portfolio" },
                ].map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onMouseEnter={() => prefetch(item.path)}
                        className={`transition-colors duration-200 hover:text-[#1028CD] ${
                          active ? "text-[#1028CD] font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm lg:text-base uppercase tracking-wider font-medium text-[#3D4367]/70 mb-5 lg:mb-6">
                Connect
              </h4>
              <ul className="space-y-3 lg:space-y-4 text-[15px] lg:text-[16px] text-[#3D4367]">
                <li>
                  <Link
                    to="/contact"
                    onMouseEnter={() => prefetch("/contact")}
                    className={`transition-colors duration-200 hover:text-[#1028CD] ${
                      location.pathname === "/contact" ? "text-[#1028CD] font-medium" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ishauptodesign?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOXcR4qqjT2WNHGMWdmgcnA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[#1028CD]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ishacurates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[#1028CD]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#E6E8F0]">
          <p className="text-[14px] lg:text-[15px] text-[#3D4367]/65 text-center lg:text-left">
            © {year} Isha Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;