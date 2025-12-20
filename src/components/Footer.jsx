import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white font-lato">
      {/* FLEXIBLE CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[80px] py-[40px] lg:py-[48px]">
        
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          
          {/* LEFT */}
          <div className="lg:max-w-[340px]">
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#3D4367] mb-3">
              Isha Sahu
            </h3>
            <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#3D4367]/80">
              Design work, writing, and learning in public.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex gap-[60px] lg:gap-[120px]">
            
            {/* NAVIGATE */}
            <div>
              <h4 className="text-[13px] lg:text-[14px] uppercase tracking-wider text-[#3D4367]/70 mb-4 lg:mb-5">
                Navigate
              </h4>
              <ul className="space-y-2 lg:space-y-3 text-[14px] lg:text-[15px] text-[#3D4367]">
                <li>
                  <Link 
                    to="/resources" 
                    className="hover:text-[#1028CD]"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className="hover:text-[#1028CD]"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/support" 
                    className="hover:text-[#1028CD]"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-[13px] lg:text-[14px] uppercase tracking-wider text-[#3D4367]/70 mb-4 lg:mb-5">
                Connect
              </h4>
              <ul className="space-y-2 lg:space-y-3 text-[14px] lg:text-[15px] text-[#3D4367]">
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:text-[#1028CD]"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:text-[#1028CD]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:text-[#1028CD]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 lg:mt-[64px] border-t border-[#E6E8F0]" />

        {/* BOTTOM */}
        <div className="mt-6 text-[13px] lg:text-[14px] text-[#3D4367]/70">
          © 2025 Isha Sahu. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;