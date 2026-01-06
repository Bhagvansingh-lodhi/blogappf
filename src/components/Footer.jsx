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
          footerRef.current.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(footerRef.current);
  }, []);

  const prefetch = (path) => prefetchMap[path]?.();

  return (
    <footer
      ref={footerRef}
      className="bg-white font-lato opacity-0 translate-y-6 transition-all duration-700"
    >
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[80px] py-[40px] lg:py-[48px]">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          
          <div className="lg:max-w-[340px]">
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#3D4367] mb-3">
              Isha Sahu
            </h3>
            <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#3D4367]/80">
              Design work, writing, and learning in public.
            </p>
          </div>

          <div className="flex gap-[60px] lg:gap-[120px]">
            
            <div>
              <h4 className="text-[13px] lg:text-[14px] uppercase tracking-wider text-[#3D4367]/70 mb-4 lg:mb-5">
                Navigate
              </h4>
              <ul className="space-y-2 lg:space-y-3 text-[14px] lg:text-[15px] text-[#3D4367]">
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
                        className={`hover:text-[#1028CD] ${
                          active ? "text-[#1028CD]" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] lg:text-[14px] uppercase tracking-wider text-[#3D4367]/70 mb-4 lg:mb-5">
                Connect
              </h4>
              <ul className="space-y-2 lg:space-y-3 text-[14px] lg:text-[15px] text-[#3D4367]">
                <li>
                  <Link
                    to="/contact"
                    onMouseEnter={() => prefetch("/contact")}
                    className={`hover:text-[#1028CD] ${
                      location.pathname === "/contact" ? "text-[#1028CD]" : ""
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
                    className="hover:text-[#1028CD]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ishacurates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1028CD]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-8 lg:mt-[64px] border-t border-[#E6E8F0]" />

        <div className="mt-6 text-[13px] lg:text-[14px] text-[#3D4367]/70">
          © {year} Isha Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
