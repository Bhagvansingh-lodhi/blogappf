import React from "react";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white font-lato">

      {/* PAGE HEADER */}
      <section className="pt-28 pb-16 border-b border-gray-100">
        <div className="px-6 md:px-[120px]">
          <h1 className="text-2xl font-semibold text-[#071477] mb-2">
            Design Resources
          </h1>
          <p className="text-sm text-gray-500 max-w-md">
            Things that have earned their place through repeated usefulness.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="px-6 md:px-[120px] space-y-20">

          {/* DESIGN COURSES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <h3 className="text-sm font-semibold text-[#071477]">
              Design Courses
            </h3>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Alexander Hess</li>
              <li>Zander Whitehurst</li>
              <li>Gary Simon</li>
              <li>Interaction Design Foundation</li>
            </ul>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Supercharge Design</li>
              <li>Zero to Mastery</li>
              <li>Gary Simon</li>
              <li>Interaction Design Foundation</li>
            </ul>
          </div>

          {/* YOUTUBE CHANNELS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <h3 className="text-sm font-semibold text-[#071477]">
              Youtube Channels
            </h3>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Figma</li>
              <li>Aliena Cai</li>
              <li>Saurabh Saini</li>
              <li>Mizko</li>
            </ul>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Rachel How</li>
              <li>The Cutting Edge School</li>
              <li>MIT</li>
            </ul>
          </div>

          {/* BOOKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <h3 className="text-sm font-semibold text-[#071477]">
              Books
            </h3>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Lean UX</li>
              <li>Universal Principles of Design</li>
              <li>The Design of Everyday Things</li>
              <li>Don't Make Me Think</li>
            </ul>

            <ul className="space-y-4 text-sm text-[#3D4367]">
              <li>Design for How People Think</li>
              <li>The Design Thinking Life Playbook</li>
              <li>100 Things Every Designer Needs to Know</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Resources;
