import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import gadgetHero from "../assets/visuals/gadgetgrab1/Gadgetgrab banner.png";
import gadgetContext from "../assets/visuals/gadgetgrab1/Gadgetgrab 01.png";
import gadgetProblem from "../assets/visuals/gadgetgrab1/Gadgetgrab 02.png";
import gadgetUsers from "../assets/visuals/gadgetgrab1/Gadgetgrab 03.png";
import gadgetDesign from "../assets/visuals/gadgetgrab1/Gadgetgrab 04.png";
import gadget1 from "../assets/visuals/gadgetgrab1/Gadgetgrab 05.png";
import gadget2 from "../assets/visuals/gadgetgrab1/Gadgetgrab 06.png";
import gadget3 from "../assets/visuals/gadgetgrab1/Gadgetgrab 07.png";
import impFigmaToWp from "../assets/visuals/impactis1/hero2.png";
import ProjectPager from "../components/ProjectPager";

const Gadgetgrab = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-[1080px] mx-auto px-5">
          <Link to="/portfolio" className="text-[#98A2B3] text-sm mb-6 inline-block hover:text-[#0B1AA6]">
            ← Back to Portfolio
          </Link>

          <h1 className="font-raleway text-[#0B1AA6] text-[38px] md:text-[48px] font-bold leading-[1.12] max-w-[800px]">
            An E-commerce experience for tech products
          </h1>

          <p className="mt-4 text-[#667085] text-[17px] md:text-[18px] leading-[1.6] max-w-[680px]">
            A focused, tech-only marketplace could reduce friction in online gadget shopping by bringing
            discovery, comparison, and purchasing into one clear and minimal experience
          </p>

          <div className="mt-14 bg-[#F2F4F7] rounded-[24px] p-8 md:p-10 flex justify-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img src={gadgetHero} alt="Gadgetgrab App UI" className="w-full max-w-[840px] rounded-[20px]" />
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 text-[#344054]">
            <div>
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Project</p>
              <p className="font-medium mt-1">Gadgetgrab</p>
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
              <p className="text-xs text-[#98A2B3] uppercase tracking-wide">Link</p>
              <a href="#" className="text-[#0B1AA6] underline mt-1 inline-block">Behance</a>
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
              Gadgetgrab is a self-initiated mobile app concept designed for purchasing electronic gadgets,
              from TVs and mobile phones to accessories like watches and extensions. The idea behind the app
              was to create a single place where users could explore and buy tech products without being
              distracted by non-relevant categories.
            </p>
            <p>
              The project was created as a way to practice designing a real-world e-commerce experience while
              focusing on clarity, simplicity, and fast decision-making.
            </p>
          </div>
          <div className="mt-20 bg-[#F2F2F2] rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={gadgetContext} alt="Context illustration" className="w-full max-w-[480px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">The Problem</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <p>
              Buying tech products online often requires users to jump between multiple apps and platforms
              to compare prices, check availability, and confirm whether a product meets their needs. This
              process is time-consuming and can feel overwhelming, especially when new products are released
              frequently.
            </p>
            <p className="font-medium">The challenge was to design an experience that:</p>
            <ul className="space-y-3 pl-2">
              <li>• Reduced the time spent comparing across platforms</li>
              <li>• Helped users feel confident about their purchase decisions</li>
              <li>• Kept the interface focused only on tech products</li>
            </ul>
          </div>
          <div className="mt-20 bg-[#F2F2F2] rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={gadgetProblem} alt="Problem illustration" className="w-full max-w-[480px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* USERS & GOALS */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Users & Goals</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <p className="text-[#344054] text-[17px] mb-8">These users typically wanted to:</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-[860px] text-[#344054] text-[17px] leading-[1.75]">
            <div className="flex gap-2">
              <span className="mt-2 text-[#667085]">•</span>
              <p>Discover new tech products as soon as they launch</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-2 text-[#667085]">•</span>
              <p>Feel confident that the product matched their needs</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-2 text-[#667085]">•</span>
              <p>Compare prices and specifications quickly</p>
            </div>
            <div className="flex gap-2">
              <span className="mt-2 text-[#667085]">•</span>
              <p>Complete purchases without unnecessary steps</p>
            </div>
          </div>
          <p className="mt-8 max-w-[720px] text-[#344054] text-[17px] leading-[1.75]">
            Speed, clarity, and trust were more important than exploration or browsing unrelated items.
          </p>
          <div className="mt-20 bg-[#EFEFEF] rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={gadgetUsers} alt="User wireframes" className="w-full max-w-[860px] rounded-[18px]" />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="bg-[#F7F8FE] py-20">
        <div className="max-w-[1080px] mx-auto px-5">
          <h2 className="text-[#0B1AA6] text-[20px] font-semibold mb-6">Design Approach</h2>
          <div className="w-full h-[1px] bg-[#E4E7EC] mb-10" />
          <div className="max-w-[720px] text-[#344054] text-[17px] leading-[1.75] space-y-5">
            <p>
              The core design decision was to limit the scope of the product intentionally. Instead of
              trying to become a general marketplace, Gadgetgrab focused only on tech-related products.
            </p>
            <p>
              This allowed the UI to stay minimal and predictable, helping users move quickly from
              discovery to checkout. The design emphasized:
            </p>
            <ul className="space-y-3 pl-2">
              <li>• Clean navigation and search</li>
              <li>• Clean product presentation</li>
              <li>• A simple and familiar buying flow</li>
            </ul>
          </div>
          <div className="mt-20 bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
            <img src={gadgetDesign} alt="Design approach UI screens" className="w-full max-w-[860px] rounded-[18px]" />
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
              <li>• Focused product categories — only tech-related items were included, reducing cognitive load and keeping browsing purposeful</li>
              <li>• Clear product information hierarchy — pricing, specifications, and descriptions were presented cleanly</li>
              <li>• Price awareness and timing — users could quickly evaluate whether to purchase immediately or wait</li>
              <li>• Simplified checkout flow — product → cart → checkout without unnecessary interruptions</li>
              <li>• Minimal visual language — clean blue palette used to maintain clarity and trust</li>
              <li>• Readable typography — modern font choices for comfortable scanning</li>
            </ul>
          </div>
          <div className="mt-28 space-y-20">
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={gadget1} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={gadget2} className="w-full max-w-[860px] rounded-[24px]" />
            </div>
            <div className="bg-white rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex justify-center">
              <img src={gadget3} className="w-full max-w-[860px] rounded-[24px]" />
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
              The final design resulted in a clean and focused shopping experience that allowed users to
              explore, compare, and purchase tech products without distraction. By narrowing the scope
              and simplifying the interface, the app supported faster decision-making and reduced friction
              in the buying process.
            </p>
            <div>
              <p className="mb-5">Through this project, I learned:</p>
              <ul className="space-y-3 pl-2">
                <li>• How narrowing the scope of a product can make decisions faster for users</li>
                <li>• How clear product details help users trust what they are buying</li>
                <li>• How structuring information well reduces the need for extra steps</li>
                <li>• How a simple buying flow can support quicker purchases</li>
              </ul>
            </div>
            <p>
              Working on Gadgetgrab helped me understand how small layout and flow decisions can have a
              big impact on how smoothly users move through an e-commerce app — especially when speed and
              clarity matter most.
            </p>
          </div>
        </div>
      </section>
<ProjectPager />

      <Footer/>
    </div>
  );
};

export default Gadgetgrab;