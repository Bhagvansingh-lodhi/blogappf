import React from "react";
import Footer from "../components/Footer";

const Resources = () => {
  const linkStyle =
    "transition-colors duration-200 text-[#14151F] hover:text-[#1028CD]";

  return (
    <div className="min-h-screen bg-white font-lato">

      {/* HEADER */}
      <section className="pt-28 pb-16 border-b border-gray-100">
        <div className="px-6 md:px-[120px]">
          <h1 className="font-raleway font-semibold text-[28px] leading-[34px] text-[#071477] mb-2">
            Design Resources
          </h1>
          <p className="max-w-md text-[16px] leading-[24px] text-[#7B82A0]">
            Things that have earned their place through repeated usefulness.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="px-6 md:px-[120px] space-y-24">

          {/* COURSES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <h3 className="text-[#071477] text-[17px] leading-[26px] font-medium">
              Design Courses
            </h3>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://alexunderhess.design/" target="_blank">Alexander Hess</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.memorisely.com/" target="_blank">Memorisely</a></li>
              <li className="py-3"><a className={linkStyle} href="https://designcourse.com/" target="_blank">Gary Simon</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.interaction-design.org/" target="_blank">Interaction Design Foundation</a></li>
            </ul>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://supercharge.design/" target="_blank">Supercharge Design</a></li>
              <li className="py-3"><a className={linkStyle} href="https://zerotomastery.io/courses/" target="_blank">Zero to Mastery</a></li>
              <li className="py-3"><a className={linkStyle} href="https://designcourse.com/" target="_blank">Gary Simon</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.interaction-design.org/" target="_blank">Interaction Design Foundation</a></li>
            </ul>
          </div>

          {/* YOUTUBE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <h3 className="text-[#071477] text-[17px] leading-[26px] font-medium">
              Youtube Channels
            </h3>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@Figma" target="_blank">Figma</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@AlienaCai" target="_blank">Aliena Cai</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@Mizko" target="_blank">Mizko</a></li>
            </ul>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@RachelHow" target="_blank">Rachel How</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@CuttingEdgeSchool" target="_blank">The Cutting Edge School</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.youtube.com/@mit" target="_blank">MIT</a></li>
            </ul>
          </div>

          {/* BOOKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <h3 className="text-[#071477] text-[17px] leading-[26px] font-medium">
              Books
            </h3>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Lean-UX-Applying-Principles-Experience/dp/9352132785/" target="_blank">Lean UX</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Pocket-Universal-Principles-Design-Architects/dp/1631590405/" target="_blank">Universal Principles of Design</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Design-Everyday-Things-Donald-Norman/dp/0465050654/" target="_blank">The Design of Everyday Things</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Dont-Make-Think-Revisited-Usability/dp/9332542864/" target="_blank">Don't Make Me Think</a></li>
            </ul>

            <ul className="divide-y divide-[#ECEEF6] text-[16px] leading-[24px] font-normal text-[#14151F]">
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Design-How-People-Think-Products/dp/B094NWGKYB/" target="_blank">Design for How People Think</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Design-Thinking-Life-Playbook-Visualize/dp/111968224X/" target="_blank">Design Thinking Life Playbook</a></li>
              <li className="py-3"><a className={linkStyle} href="https://www.amazon.in/Things-Designer-People-Voices-Matter/dp/0136746918/" target="_blank">100 Things Every Designer Needs to Know</a></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
