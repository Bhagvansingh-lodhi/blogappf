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
import impFigmaToWp1 from "../assets/visuals/airing1/Group 2.png";
import ProjectPager from "../components/ProjectPager";

const Gadgetgrab = () => {
  return (
    <div className="bg-white">

      {/* HERO - gap कम किया */}
      <section className="pt-20 pb-16 bg-white"> {/* Changed from pt-24 pb-20 */}
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
            An E-commerce experience for tech products
          </h1>

          {/* Sub */}
          <p className="mt-3 text-[#3D4367] text-[17px] md:text-[18px] leading-[1.6] max-w-[720px]"> {/* Changed from mt-4 */}
            A focused, tech-only marketplace could reduce friction in online gadget shopping by bringing
            discovery, comparison, and purchasing into one clear and minimal experience.
          </p>

         {/* Hero Image — no container */}
<div className="mt-12">
  <img
    src={gadgetHero}
    alt="Gadgetgrab App UI"
    className="w-full rounded-[24px]"
  />
</div>


          {/* Meta */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8 text-[#344054]"> {/* Changed from mt-16, gap-y-10 to gap-y-8 */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Project</p>
              <p className="mt-1 font-medium text-[#3D4367]">Gadgetgrab</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Role</p>
              <p className="mt-1 font-medium">UI/UX Designer</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Duration</p>
              <p className="mt-1 font-medium">4 Weeks</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Link</p>
              <a
                href="https://www.behance.net/gallery/177845577/An-E-commerce-App-Design"
                className="mt-1 inline-block font-medium text-[#3D4367] hover:underline"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT - gap कम किया */}
      <section className="bg-[#F7F8FE] pt-16 pb-8"> {/* Changed from pt-24 pb-8 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Context
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
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
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-12 bg-white py-12"> {/* Changed from mt-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={gadgetContext}
              alt="Context illustration"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM - gap कम किया */}
      <section className="bg-[#F7F8FE] pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              The Problem
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                Buying tech products online often requires users to jump between multiple apps and platforms
                to compare prices, check availability, and confirm whether a product meets their needs. This
                process is time-consuming and can feel overwhelming, especially when new products are released
                frequently.
              </p>

              <p className="font-medium">
                The challenge was to design an experience that:
              </p>

              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>• Reduced the time spent comparing across platforms</li>
                <li>• Helped users feel confident about their purchase decisions</li>
                <li>• Kept the interface focused only on tech products</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-16"> {/* Changed from mt-16 py-24 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={gadgetProblem}
              alt="Problem illustration"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* USERS & GOALS - gap कम किया */}
      <section className="bg-white pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Users & Goals
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <p className="text-[#344054] text-[17px] mb-6"> {/* Changed from mb-8 */}
              These users typically wanted to:
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-[860px] text-[#344054] text-[17px] leading-[1.8]"> {/* Changed from gap-x-16 gap-y-6 */}
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

            <p className="mt-6 max-w-[720px] text-[#344054] text-[17px] leading-[1.8]"> {/* Changed from mt-8 */}
              Speed, clarity, and trust were more important than exploration or browsing unrelated items.
            </p>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={gadgetUsers}
              alt="User wireframes"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH - gap कम किया */}
      <section className="bg-white pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Design Approach
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                The core design decision was to limit the scope of the product intentionally. Instead of
                trying to become a general marketplace, Gadgetgrab focused only on tech-related products.
              </p>

              <p>
                This allowed the UI to stay minimal and predictable, helping users move quickly from
                discovery to checkout. The design emphasized:
              </p>

              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>• Clean navigation and search</li>
                <li>• Clean product presentation</li>
                <li>• A simple and familiar buying flow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={gadgetDesign}
              alt="Design approach UI screens"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* KEY DESIGN DECISIONS - gap कम किया */}
      <section className="bg-white pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Key Design Decisions
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>
                  • Focused product categories — only tech-related items were included, reducing cognitive
                  load and keeping browsing purposeful
                </li>
                <li>
                  • Clear product information hierarchy — pricing, specifications, and descriptions were
                  presented cleanly
                </li>
                <li>
                  • Price awareness and timing — users could quickly evaluate whether to purchase immediately
                  or wait
                </li>
                <li>
                  • Simplified checkout flow — product → cart → checkout without unnecessary interruptions
                </li>
                <li>
                  • Minimal visual language — clean blue palette used to maintain clarity and trust
                </li>
                <li>
                  • Readable typography — modern font choices for comfortable scanning
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image strips — full-bleed white */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={gadget1} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12"> {/* Changed from py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={gadget2} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12"> {/* Changed from py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={impFigmaToWp1} className="w-full rounded-[22px]" />
          </div>
        </div>
      </section>

      {/* OUTCOME - gap कम किया */}
      <section className="bg-white pt-16 pb-16"> {/* Changed from pt-24 pb-24 */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Outcome & Learnings
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                The final design resulted in a clean and focused shopping experience that allowed users to
                explore, compare, and purchase tech products without distraction. By narrowing the scope
                and simplifying the interface, the app supported faster decision-making and reduced friction
                in the buying process.
              </p>

              <div>
                <p className="mb-4">Through this project, I learned:</p> {/* Changed from mb-5 */}
                <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
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
        </div>
      </section>

      <ProjectPager />
      <Footer />
    </div>
  );
};

export default Gadgetgrab;