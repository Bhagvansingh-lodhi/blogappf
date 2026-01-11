import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Airing = () => {
  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="pt-[140px] pb-[120px]">
        <div className="max-w-[1180px] mx-auto px-6">

            <Link
  to="/portfolio"
  className="text-[#7A82A6] text-base font-medium mb-10 inline-block hover:text-[#071477] transition-colors"
>
  ← Back to Portfolio
</Link>

          <h1 className="font-raleway text-[#0B1AA6] text-[52px] font-bold leading-[1.15] max-w-[880px]">
            Airing Private Limited
          </h1>

          <p className="mt-6 text-[#667085] text-[18px] max-w-[720px] leading-[1.7]">
            Improved User Experience with Collaborative UI/UX Solutions
          </p>

          <div className="mt-20 bg-[#F7F8FE] h-[360px] rounded-[28px] flex items-center justify-center text-[#98A2B3]">
            Visuals coming soon
          </div>
        </div>
      </section>

      {/* STORY BLOCK */}
      <section className="bg-[#F7F8FE] case-tight">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="font-raleway text-[#0B1AA6] text-[22px] font-semibold mb-10">
            Case Study In Progress
          </h2>

          <div className="w-full h-[1px] bg-[#E4E7EC] mb-16" />

          <p className="case-text-block text-[#344054] text-[18px] leading-[1.85]">
            This case study is currently being prepared. Detailed visuals and product flows will
            be added soon.
          </p>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Airing;
