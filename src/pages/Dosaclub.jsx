import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import dosaHero from "../assets/visuals/dosaclub1/dosaclub-hero.png";
import dosaContext from "../assets/visuals/dosaclub1/dosaclub-context.png";
import dosaConstraints from "../assets/visuals/dosaclub1/dosaclub-constraints.png";
import dosaDesign from "../assets/visuals/dosaclub1/dosaclub-design.png";
import dosaDeploy from "../assets/visuals/dosaclub1/dosaclub-deploy.png";
import dosaOutcome from "../assets/visuals/dosaclub1/dosaclub-outcome.png";
import impFigmaToWp from "../assets/visuals/impactis1/hero2.png";
import dosa1 from "../assets/visuals/dosaclub1/pic.png";
import dosa2 from "../assets/visuals/dosaclub1/pic1.png";
import dosa3 from "../assets/visuals/dosaclub1/pic2.png";
import dosa4 from "../assets/visuals/dosaclub1/pic3.png";

const DosaClub = () => {
  return (
    <div className="bg-white font-lato">

      {/* HERO */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">

            <Link
  to="/portfolio"
  className="text-[#7A82A6] text-base font-medium mb-10 inline-block hover:text-[#071477] transition-colors"
>
  ← Back to Portfolio
</Link>

          {/* Heading */}
          <h1 className="text-[#071477] font-raleway font-bold
            text-[42px] md:text-[52px] leading-[1.15] max-w-[880px]">
            Improving Admin workflows with a structured Dashboard System
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[#667085] text-[18px] leading-[1.7] max-w-[720px]">
            Explored how complex food delivery operations can be managed through a
            clear and predictable admin interface
          </p>

          {/* Hero Image */}
          <img
            src={dosaHero}
            className="mt-16 w-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          />

          {/* Meta Bar */}
          <div className="grid md:grid-cols-5 grid-cols-2 gap-8 mt-16 text-sm">
            <div>
              <p className="text-[#98A2B3]">Project</p>
              <p className="font-medium text-[#101828] mt-1">Dosaclub</p>
            </div>
            <div>
              <p className="text-[#98A2B3]">Role</p>
              <p className="font-medium text-[#101828] mt-1">UI/UX Designer</p>
            </div>
            <div>
              <p className="text-[#98A2B3]">Duration</p>
              <p className="font-medium text-[#101828] mt-1">12 Days</p>
            </div>
            <div>
              <p className="text-[#98A2B3]">Link</p>
              <a href="#" className="text-[#0B1AA6] underline mt-1 inline-block">
                Behance
              </a>
            </div>
            <div>
              <p className="text-[#98A2B3]">Scope of work</p>
              <p className="text-[#101828] mt-1 leading-6">
                Dashboard structure<br/>
                Information hierarchy<br/>
                Interaction patterns<br/>
                Visual consistency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          {/* Title */}
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Context
          </h2>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />

          {/* Content */}
          <div className="max-w-[760px] text-[#344054] text-[18px] leading-[1.8] space-y-6">
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

          {/* Logo Card */}
          <div className="mt-20 bg-[#FFF3DA] rounded-[24px] px-16 py-20 flex items-center gap-8">
            <img
              src={dosaContext}
              className="w-[70px]"
            />
            <span className="text-[48px] font-bold text-black">Dosaclub</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            The Problem
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[760px] text-[#344054] text-[18px] leading-[1.85] space-y-6">
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
          <div className="mt-24 bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
            <img
              src={dosaConstraints}
              className="w-full"
              alt="Dosaclub Admin UI"
            />
          </div>
        </div>
      </section>

      {/* USERS & NEEDS */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Users & Operational Needs
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <p className="text-[#344054] text-[18px] mb-10">
            On a daily basis, they needed to:
          </p>
          {/* Bullet Grid */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-8 text-[#344054] text-[18px] leading-[1.8] max-w-[900px]">
            {['Monitor orders from placement to delivery',
              'Manage product availability based on stock and service areas',
              'Add, remove, or manage restaurants on the platform',
              'Review sales performance across different time ranges',
              'Track driver locations and delivery progress',
              'Export daily reports for sharing with the team'
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="mt-2 text-[#667085]">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          {/* Dashboard Preview */}
          <div className="mt-24 bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
            <img src={dosaDesign} className="w-full" />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Design Approach
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[760px] text-[#344054] text-[18px] leading-[1.85] space-y-6">
            <p>
              I approached the dashboard as a system of interconnected workflows, rather than a set
              of individual screens. The goal was to reduce cognitive load by making information easy
              to scan and actions easy to take.
            </p>
            <p className="font-medium">Key decisions included:</p>
            <ul className="space-y-4 pl-2">
              <li>• Structuring the dashboard into clearly defined sections such as Orders, Restaurants, Drivers, Products, and Sales</li>
              <li>• Using consistent layouts and interaction patterns so admins could quickly understand how each section worked</li>
              <li>• Prioritizing information based on urgency and frequency of use</li>
            </ul>
            <p>
              Every layout decision was made to guide the admin toward the next most likely action,
              helping reduce confusion and increase efficiency.
            </p>
          </div>
          {/* UI Preview */}
          <div className="mt-24 bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
            <img src={dosaDeploy} className="w-full" />
          </div>
        </div>
      </section>

      {/* KEY DESIGN DECISIONS */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Key Design Decisions
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[760px] text-[#344054] text-[18px] leading-[1.85] space-y-6">
            <p>
              To support fast, informed decision-making, several visual and interaction choices were made:
            </p>
            <ul className="space-y-4 pl-2">
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
          {/* UI Preview */}
          <div className="mt-24 bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
            <img src={dosaOutcome} className="w-full" />
          </div>
        </div>
      </section>

      {/* CONSTRAINTS & TRADEOFFS */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Constraints & Tradeoffs
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[760px] text-[#344054] text-[18px] leading-[1.85] space-y-6">
            <p>
              Although this was a self-initiated project, it was designed with realistic constraints in mind:
            </p>
            <ul className="space-y-4 pl-2">
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
          {/* Editorial Visual Story Stack */}
          <div className="mt-32 space-y-24">
            <div className="bg-[#F8F9FB] rounded-[28px] p-12">
              <img src={dosa1} className="rounded-[20px] mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />
            </div>
            <div className="bg-[#EEF4FF] rounded-[28px] p-12">
              <img src={dosa2} className="rounded-[20px] mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />
            </div>
            <div className="bg-[#FFF7ED] rounded-[28px] p-12">
              <img src={dosa3} className="rounded-[20px] mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />
            </div>
            <div className="bg-[#F7F8FE] rounded-[28px] p-12">
              <img src={dosa4} className="rounded-[20px] mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />
            </div>
  <div className="bg-white rounded-[36px] px-10 md:px-14 py-10 md:py-12 flex justify-center shadow-md">
  <img
    src={impFigmaToWp}
    className="rounded-[24px] w-full max-w-[680px] object-contain"
  />
</div>


          </div>
        </div>
      </section>

      {/* OUTCOME & LEARNINGS */}
      <section className="bg-[#F7F8FE] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-[#0B1AA6] text-[22px] font-semibold mb-8">
            Outcome & Learnings
          </h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[780px] text-[#344054] text-[18px] leading-[1.85] space-y-6">
            <p>
              The final dashboard design presented a structured and cohesive system for managing Dosaclub's
              operations. Each section supported a specific operational task while contributing to a
              predictable overall experience.
            </p>
            <p>Through this project, I learned:</p>
            <ul className="space-y-4 pl-2">
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
      </section>

      <Footer />
    </div>
  );
};

export default DosaClub;