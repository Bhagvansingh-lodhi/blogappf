import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
  import ProjectPager from "../components/ProjectPager";

import airingHero from "../assets/visuals/airing1/Hamrovivahbanner.png";
import airingContext from "../assets/visuals/airing1/Hamrovivah 01.png";
import airingConstraints from "../assets/visuals/airing1/Hamrovivah02.png";
import airingDesign from "../assets/visuals/airing1/Hamrovivah03.png";
import airingDeploy from "../assets/visuals/airing1/Hamrovivah04.png";
import airingOutcome from "../assets/visuals/airing1/Hamrovivah05.png";

import impFigmaToWp from "../assets/visuals/impactis1/hero2.png";

import airing1 from "../assets/visuals/airing1/Hamrovivah 06.png";
import airing2 from "../assets/visuals/airing1/Hamrovivah07.png";
import airing3 from "../assets/visuals/airing1/Hamrovivah08.png";

const Airing = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-[1080px] mx-auto px-5">
          <Link to="/portfolio" className="text-[#98A2B3] text-sm mb-6 inline-block hover:text-[#0B1AA6]">
            ← Back to Portfolio
          </Link>

          <h1 className="font-raleway text-[#0B1AA6] text-[38px] md:text-[48px] font-bold leading-[1.12] max-w-[800px]">
            Designing a culturally sensitive matrimony experience for Nepal
          </h1>

          <p className="mt-4 text-[#667085] text-[17px] md:text-[18px] leading-[1.6] max-w-[680px]">
            Designed a matrimony app that respects Nepali cultural values while gently introducing digital matchmaking
          </p>

          <div className="mt-14 bg-[#F2F4F7] rounded-[24px] p-8 md:p-10 flex justify-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img src={airingHero} alt="Matrimony App UI" className="w-full max-w-[840px] rounded-[20px]" />
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 text-[#344054]">
            <div>
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Project</p>
              <p className="font-medium mt-1">Airing.in</p>
            </div>
            <div>
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Role</p>
              <p className="font-medium mt-1">UI/UX Designer</p>
            </div>
            <div>
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Duration</p>
              <p className="font-medium mt-1">4 weeks</p>
            </div>
            <div>
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Team</p>
              <p className="font-medium mt-1">2 Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Context</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <p>
              Hammorwah is a Nepal-focused matrimony app created for people who value traditional
              matchmaking practices involving family and elders. Unlike popular matrimony platforms
              used in India, Nepali users often prefer meeting potential partners through family
              discussions and offline interactions rather than purely digital connections.
            </p>
            <p>
              The app was designed to act as a starting point for connection — helping people discover
              and talk to potential matches online before moving to offline meetings, where family
              involvement and support from the Hammorwah team coordinate the process.
            </p>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={airingContext} alt="Early hand-drawn wireframes" className="w-full max-w-[840px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">The Problem</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <p>
              While matrimony apps exist in abundance, most are built around individual decision-making
              and private conversations. This approach does not fully align with Nepali cultural values,
              where marriage is a collective decision involving elders, trust, and social context.
            </p>
            <p className="font-medium">Key challenges included:</p>
            <ul className="space-y-3 pl-2">
              <li>• Hesitation toward using apps for something as personal as marriage</li>
              <li>• Lack of trust in digital platforms handling sensitive personal data</li>
              <li>• Fear of misuse, misrepresentation, or privacy breaches</li>
              <li>• Existing apps not supporting family involvement or offline progression</li>
            </ul>
            <p>
              If these concerns were not addressed, users would be unlikely to engage meaningfully
              or continue using the platform.
            </p>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={airingConstraints} alt="Research moodboard" className="w-full max-w-[860px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* USERS & EMOTIONAL CONTEXT */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Users & Emotional Context</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="grid md:grid-cols-2 gap-16 max-w-[920px] text-[#344054] text-[17px] leading-[1.75]">
            <div>
              <p className="mb-5">Users typically came with:</p>
              <ul className="space-y-3 pl-2">
                <li>• Caution and hesitation rather than excitement</li>
                <li>• A strong need for trust and authenticity</li>
                <li>• Emotional sensitivity around privacy and identity</li>
                <li>• A desire for clarity about what happens next</li>
              </ul>
            </div>
            <div>
              <p className="mb-5">Before engaging deeply, users needed to feel:</p>
              <ul className="space-y-3 pl-2">
                <li>• Safe sharing personal details</li>
                <li>• Confident that profiles were genuine</li>
                <li>• Reassured that the app respected cultural norms</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={airingDesign} alt="App UI flows" className="w-full max-w-[860px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* RESEARCH & UNDERSTANDING + DESIGN APPROACH */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Research & Understanding</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <p>
              To understand the space better, I reviewed existing matrimony platforms and noted how
              they handled onboarding, profiles, and conversations. While these apps worked well from
              a functional standpoint, they often felt transactional and lacked cultural sensitivity.
            </p>
            <p>
              This insight shaped a key design direction: Hammorwah should feel warm, respectful, and
              guided rather than fast or transactional. The experience needed to explain itself clearly
              and reduce uncertainty at every step.
            </p>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={airingDeploy} alt="Research references" className="w-full max-w-[860px] rounded-[18px]" />
          </div>

          <div className="mt-20">
            <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Design Approach</h2>
            <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
            <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
              <p>
                Designed with trust-before-interaction in mind. Guiding principles included warmth and
                clarity in visuals, reduced friction in onboarding, meaningful conversations over endless
                swiping, and support for family involvement.
              </p>
            </div>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={airingOutcome} alt="Onboarding & verification flows" className="w-full max-w-[860px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* KEY DESIGN DECISIONS */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Key Design Decisions</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <ul className="space-y-3 pl-2">
              <li>• Clear onboarding and verification flow</li>
              <li>• Profile structure focused on context, not just appearance</li>
              <li>• Thoughtful filtering and matchmaking</li>
              <li>• Communication designed as a bridge, not an end goal</li>
              <li>• Warm visual language and calming layout</li>
            </ul>
          </div>
          <div className="mt-28 space-y-20">
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={airing1} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={airing2} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={airing3} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={impFigmaToWp} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-white py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[24px] font-semibold mb-8">Outcome & Learnings</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-12" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-6">
            <p>
              The final design offered a matrimony experience that felt respectful, calm, and culturally
              grounded. Instead of pushing users toward quick decisions, the app supported thoughtful
              exploration and encouraged offline progression with family involvement.
            </p>
            <div>
              <p className="mb-5">Through this project, I learned:</p>
              <ul className="space-y-3 pl-2">
                <li>• How deeply culture influences user behavior and trust</li>
                <li>• How designing for sensitive topics requires emotional awareness</li>
                <li>• How clarity and reassurance can reduce hesitation in digital experiences</li>
                <li>• How digital products can support traditional systems instead of replacing them</li>
              </ul>
            </div>
            <p>
              This project strengthened my ability to design with empathy, responsibility, and cultural
              sensitivity — especially in spaces where decisions carry emotional and social weight.
            </p>
          </div>
        </div>
      </section>
<ProjectPager />

      <Footer />
    </div>
  );
};

export default Airing;