import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProjectPager from "../components/ProjectPager";

import dosaHero from "../assets/visuals/dosaclub1/dosaclub-hero.png";
import dosaContext from "../assets/visuals/dosaclub1/context1.png";
import dosaConstraints from "../assets/visuals/dosaclub1/dosaclub-constraints.png";
import dosaDesign from "../assets/visuals/dosaclub1/dosaclub-design.png";
import dosaDeploy from "../assets/visuals/dosaclub1/dosaclub-deploy.png";
import dosaOutcome from "../assets/visuals/dosaclub1/dosaclub-outcome.png";
import impFigmaToWp1 from "../assets/visuals/airing1/Group 2.png";
import dosa1 from "../assets/visuals/dosaclub1/pic.png";
import dosa2 from "../assets/visuals/dosaclub1/pic1.png";
import dosa3 from "../assets/visuals/dosaclub1/pic2.png";
import dosa4 from "../assets/visuals/dosaclub1/pic3.png";

const DosaClub = () => {
  return (
    <div className="bg-white">

      {/* HERO - UNCHANGED */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[14px] text-[#98A2B3] hover:text-[#0B1AA6] mb-10"
          >
            ← Back to Portfolio
          </Link>

          {/* Heading */}
          <h1 className="font-raleway text-[#071477] text-[40px] md:text-[52px] font-bold leading-[1.1] max-w-[880px]">
            Improving Admin workflows with a structured Dashboard System
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[#3D4367] text-[17px] md:text-[18px] leading-[1.6] max-w-[720px]">
            Explored how complex food delivery operations can be managed through a
            clear and predictable admin interface
          </p>

          {/* Hero Image */}
          <img
            src={dosaHero}
            className="mt-10 w-full rounded-[24px]"
          />

          {/* Meta Bar */}
          <div className="grid md:grid-cols-5 grid-cols-2 gap-6 mt-12 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Project</p>
              <p className="mt-1 font-medium text-[#3D4367]">Dosaclub</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Role</p>
              <p className="mt-1 font-medium">UI/UX Designer</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Duration</p>
              <p className="mt-1 font-medium">12 Days</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Link</p>
              <a
                href="#"
                className="mt-1 inline-block font-medium text-[#3D4367] hover:underline"
              >
                Behance
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Scope of work</p>
              <p className="mt-1 text-[#344054]">
                Dashboard structure<br />
                Information hierarchy<br />
                Interaction patterns<br />
                Visual consistency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT - Updated to match Airing/Gadgetgrab */}
      <section className="bg-[#F7F8FE] pt-16 pb-8">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Context
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Dosaclub is a food delivery concept focused on making different varieties of dosa
                available from nearby restaurants, delivered directly to customers. Along with
                dosas, the platform also includes side dishes, drinks, and other items.
              </p>
              <p>
                This project focused on designing an <strong>internal admin dashboard</strong> used
                to manage the operational side of the platform. It was a self-initiated project
                created to explore how complex, real-time workflows in food delivery systems could
                be handled through a clear and structured interface.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={dosaContext}
              alt="Dosaclub logo"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM - Updated to match Airing/Gadgetgrab */}
      <section className="bg-[#F7F8FE] pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              The Problem
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Food delivery operations involve multiple moving parts working at the same time.
                Admin teams need to monitor orders, manage restaurants, track drivers, update product
                availability, and review sales performance, often under time pressure.
              </p>

              <p>
                Without a well-structured system, this kind of work can quickly become fragmented and
                error-prone. The challenge was to design a dashboard that could support real-time
                decision-making while keeping the experience clear, predictable, and easy to navigate
                for internal users.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={dosaConstraints}
              alt="Dosaclub Admin UI"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* USERS & NEEDS - Updated to match Airing/Gadgetgrab */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Users & Operational Needs
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <p className="text-[#344054] text-[17px] mb-8">
              On a daily basis, they needed to:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-[#344054] text-[17px] leading-[1.8]">
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Monitor orders from placement to delivery</p>
              </div>

              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Manage product availability based on stock and service areas</p>
              </div>

              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Add, remove, or manage restaurants on the platform</p>
              </div>

              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Review sales performance across different time ranges</p>
              </div>

              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Track driver locations and delivery progress</p>
              </div>

              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Export daily reports for sharing with the team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={dosaDesign}
              alt="Dosaclub Admin Dashboard"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH - Updated to match Airing/Gadgetgrab */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Design Approach
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                I approached the dashboard as a system of interconnected workflows, rather than a set
                of individual screens. The goal was to reduce cognitive load by making information easy
                to scan and actions easy to take.
              </p>

              <p className="font-medium">Key decisions included:</p>

              <ul className="space-y-3 pl-2">
                <li>• Structuring the dashboard into clearly defined sections such as Orders, Restaurants, Drivers, Products, and Sales</li>
                <li>• Using consistent layouts and interaction patterns so admins could quickly understand how each section worked</li>
                <li>• Prioritizing information based on urgency and frequency of use</li>
              </ul>

              <p>
                Every layout decision was made to guide the admin toward the next most likely action,
                helping reduce confusion and increase efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={dosaDeploy}
              alt="Dosaclub Dashboard UI"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* KEY DESIGN DECISIONS - Updated to match Airing/Gadgetgrab */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Key Design Decisions
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                To support fast, informed decision-making, several visual and interaction choices were made:
              </p>

              <ul className="space-y-3 pl-2">
                <li>• Live driver tracking allowed admins to see the exact location of drivers, active delivery paths, and assigned orders at a glance</li>
                <li>• Status-based color cues were used so availability could be understood instantly, such as different vehicle colors for active and inactive drivers</li>
                <li>• Sales overview visuals made it easy to check performance using a clean graph, supported by quick-view summaries for today, this month, and this year</li>
                <li>• One-click restaurant insights allowed admins to view open restaurants in specific areas without navigating through multiple screens</li>
                <li>• Smart product listings emphasized clarity by pairing clear imagery, pricing, and simple visual indicators like vegetarian icons</li>
              </ul>

              <p>
                These decisions focused on helping admins process information quickly without needing to
                interpret complex data tables.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={dosaOutcome}
              alt="Dosaclub Admin UI"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* CONSTRAINTS & TRADEOFFS - Updated to match Airing/Gadgetgrab */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Constraints & Tradeoffs
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Although this was a self-initiated project, it was designed with realistic constraints in mind:
              </p>

              <ul className="space-y-3 pl-2">
                <li>• Multiple workflows had to coexist without overwhelming the interface</li>
                <li>• Information density needed to stay manageable across different sections</li>
                <li>• Visual consistency had to be maintained while allowing sections to feel distinct</li>
                <li>• Reporting features needed to support real operational use, such as exporting CSV files</li>
              </ul>

              <p>
                The main tradeoff was balancing depth of information with ease of scanning, especially in areas
                like order management and sales reporting.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={dosa1} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={dosa2} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={dosa3} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={dosa4} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impFigmaToWp1}
              className="w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* OUTCOME & LEARNINGS - Updated to match Airing/Gadgetgrab */}
      <section className="bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Outcome & Learnings
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                The final dashboard design presented a structured and cohesive system for managing Dosaclub's
                operations. Each section supported a specific operational task while contributing to a
                predictable overall experience.
              </p>
              <p>Through this project, I learned:</p>
              <ul className="space-y-3 pl-2">
                <li>• How designing internal tools is more about efficiency and clarity than visual polish</li>
                <li>• How to prioritize information based on what needs attention first and what can come later</li>
                <li>• How small visual cues, like color and status indicators, can make complex information easier to scan</li>
                <li>• How thinking in systems helps when multiple workflows need to work together</li>
                <li>• How everyday operational decisions can be supported through thoughtful layout and hierarchy</li>
              </ul>
              <p>
                Working on this dashboard helped me better understand how real-world products rely on clear
                structure, consistency, and speed — especially when users are managing a lot behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectPager />
      <Footer />
    </div>
  );
};

export default DosaClub;