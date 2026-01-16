import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProjectPager from "../components/ProjectPager";

import impHero1 from "../assets/visuals/impactis1/hero1.png";
import impHero2 from "../assets/visuals/impactis1/bullet.png";
import impContext from "../assets/visuals/impactis1/context.png";
import impConstraints from "../assets/visuals/impactis1/constraints.png";
import impOutcome from "../assets/visuals/impactis1/Image.png";
import impDesign from "../assets/visuals/impactis1/outcome.png";
import impFigmaToWp1 from "../assets/visuals/airing1/Group 2.png";



const Impactis = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Back */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[14px] text-[#98A2B3] hover:text-[#0B1AA6] mb-10"
          >
            ← Back to Portfolio
          </Link>

          {/* Title */}
          <h1 className="font-raleway text-[#071477] text-[40px] md:text-[52px] font-bold leading-[1.1] max-w-[880px]">
            Impactis Global Newsletter
          </h1>

          {/* Sub */}
          <p className="mt-3 text-[#3D4367] text-[17px] md:text-[18px] leading-[1.6] max-w-[720px]">
            Making Impactis Global's work visible, understandable, and easy to share
          </p>

          {/* Hero */}
          <div className="mt-12 bg-[#F2F4F7] rounded-[28px] p-8 flex justify-center">
            <img
              src={impHero1}
              alt="Impactis Global Newsletter"
              className="w-full max-w-[900px] rounded-[24px]"
            />
          </div>

          {/* Meta */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8 text-[#344054]">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Project</p>
              <p className="mt-1 font-medium text-[#3D4367]">Impactis Global</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Role</p>
              <p className="mt-1 font-medium">UI/UX Designer</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Duration</p>
              <p className="mt-1 font-medium">14 Days</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Link</p>
              <p className="mt-1 font-medium text-[#3D4367]">March Newsletter</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Team</p>
              <p className="mt-1 font-medium">1 Customer Success<br />1 Founding Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="bg-[#F7F8FE] pt-16 pb-8">
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Context
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Impactis Global works to connect talented students who have cleared competitive entrance exams
                but are unable to afford higher education fees with people willing to support them through
                scholarships. The goal has always been simple but meaningful: help capable students move forward
                in their lives.
              </p>

              <p>
                This project started with a conversation with the co-founder, Pankaj Asthaana. He wanted to create
                a newsletter that could share what was happening inside Impactis Global with scholarship providers
                and students, and help them understand the people, stories, and intent behind the organization.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-12 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impConstraints}
              alt="Impactis Global Context"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* WHY A NEWSLETTER WAS NEEDED */}
      <section className="bg-[#F7F8FE] pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Why a Newsletter was Needed
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Before the newsletter, monthly updates and ongoing work at Impactis Global were not clearly
                visible to the community. While impactful work was happening, it wasn't reaching people
                consistently. This reduced awareness and made it harder for supporters and students to share
                Impactis Global's work with others.
              </p>

              <p>
                The newsletter was meant to solve this gap. It needed to become a simple, shareable way for
                scholarship providers and students to understand the impact being created each month and help
                spread awareness organically.
              </p>

              <p>
                Increasing communication was also important because awareness of Impactis Global was still
                limited, and the team wanted to reach more people who could support talented students.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impContext}
              alt="Newsletter need illustration"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* CONSTRAINTS & REALITIES */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Constraints & Realities
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <p className="text-[#344054] text-[17px] mb-6">
              There were a few practical constraints to design around:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-[#344054] text-[17px] leading-[1.8]">
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>The newsletter had to be easy to update every month</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>Multiple team members contributed content from different areas</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>New scholarships and student stories could appear at any time</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>The final design needed to be deployed using WordPress</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 text-[#667085]">•</span>
                <p>The team did not want a visually heavy or complex layout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impHero2}
              alt="Constraints illustration"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH & KEY DECISIONS */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Design Approach & Key Decisions
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                We started with a call to understand Pankaj's vision and expectations. I noted down the core
                requirements, both visual and functional, especially the need for a layout that felt approachable and
                could be easily managed through WordPress.
              </p>

              <p>
                To understand how similar organizations communicate, I looked at how other scholarship-providing
                platforms shared their updates and insights. This helped identify patterns around content hierarchy
                and storytelling, while also highlighting what felt missing or overly complex.
              </p>

              <p>
                I then moved to Figma and outlined the newsletter structure, breaking it down into clear sections
                that could represent different aspects of Impactis Global's work. Instead of treating the newsletter
                as a single long page, I designed visually consistent sections for:
              </p>

              <ul className="space-y-3 pl-2">
                <li>• Team updates</li>
                <li>• Scholarships</li>
                <li>• Student stories</li>
                <li>• Monthly highlights</li>
              </ul>

              <p>
                Each section followed a similar structure so content could change without breaking the layout. This
                also made it easier for different team members to contribute without confusion.
              </p>

              <p>
                After creating an initial version, we reviewed it together, gathered feedback, and refined the layout
                further. Only after alignment on structure and flow did I move into final UI design.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impDesign}
              alt="Design approach illustration"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* FROM FIGMA TO WORDPRESS */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              From Figma to WordPress
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                Once the design was finalized, I deployed the newsletter using WordPress. This was my first time
                working directly with WordPress, so there was a learning curve around plugins, layout limitations,
                and content handling.
              </p>

              <p>
                I adapted the design where needed to fit WordPress constraints without losing clarity or
                consistency. I also used plugins to add interactive elements, such as allowing readers to rate the
                newsletter and share their experience using emoji reactions.
              </p>

              <p>
                The focus during deployment was to ensure the newsletter could be reused easily every month
                without requiring heavy design effort again.
              </p>
            </div>
          </div>
        </div>
         {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impOutcome}
              alt="Outcome and learnings"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12">
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={impFigmaToWp1}
              alt="Figma to WordPress deployment"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* OUTCOME & LEARNINGS */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
              Outcome & Learnings
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
              <p>
                The newsletter made Impactis Global's work more visible and easier to share. Scholarship providers
                and students could now understand what was happening each month and pass that information
                along, helping awareness grow naturally.
              </p>

              <p>Through this project, I learned:</p>

              <ul className="space-y-3 pl-2">
                <li>• How to translate a founder's vision into a practical design system</li>
                <li>• How to collaborate with a team and refine decisions through feedback</li>
                <li>• How to prioritize what mattered most when working under real constraints</li>
                <li>• How to deploy and manage designs using WordPress for the first time</li>
              </ul>

              <p>
                This project helped me better understand how design decisions change when something needs to
                live, scale, and be maintained in the real world.
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

export default Impactis;