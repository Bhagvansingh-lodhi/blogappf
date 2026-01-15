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

import impFigmaToWp1 from "../assets/visuals/airing1/Group 2.png";

import airing1 from "../assets/visuals/airing1/Hamrovivah 06.png";
import airing2 from "../assets/visuals/airing1/Hamrovivah07.png";
import airing3 from "../assets/visuals/airing1/Hamrovivah08.png";

const Airing = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO - थोड़ा gap कम किया */}
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
            Designing a culturally sensitive matrimony experience for Nepal
          </h1>

          {/* Sub */}
          <p className="mt-3 text-[#3D4367] text-[17px] md:text-[18px] leading-[1.6] max-w-[720px]"> {/* Changed from mt-4 */}
            Designed a matrimony app that respects Nepali cultural values while gently introducing digital matchmaking
          </p>

          {/* Hero Image */}
          <div className="mt-12 bg-[#F2F4F7] rounded-[28px] p-8 flex justify-center"> {/* Changed from mt-16, p-10 to p-8 */}
            <img
              src={airingHero}
              alt="Matrimony App UI"
              className="w-full max-w-[900px] rounded-[24px]"
            />
          </div>

          {/* Meta */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8 text-[#344054]"> {/* Changed from mt-16, gap-y-10 to gap-y-8 */}
            {/* Meta items remain same */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#3D4367]">Project</p>
              <a
                href="https://airing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-medium text-[#3D4367] hover:underline"
              >
                Airing.in
              </a>
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
                href="https://www.behance.net/gallery/206394043/A-Matrimony-App-Design-Hamrovivah"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-medium text-[#3D4367] hover:underline"
              >
                Behance
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#98A2B3]">Team</p>
              <p className="mt-1 font-medium">2 Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT - gap कम किया */}
      <section className="bg-[#F7F8FE] pt-16 pb-8"> {/* Changed from pt-24 pb-12 */}
        {/* Text block */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Context
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                Hamrovivah is a Nepal-focused matrimony app created for people who value traditional
                matchmaking practices involving family and elders. Unlike popular matrimony platforms used
                in India, Nepali users often prefer meeting potential partners through family discussions and
                offline interactions rather than purely digital connections.
              </p>

              <p>
                The app was designed to act as a starting point for connection — helping people discover and
                talk to potential matches online before moving to offline meetings, where family involvement
                and support from the Hamrovivah team coordinate the process.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={airingContext}
              alt="Early hand-drawn wireframes"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* THE PROBLEM - gap कम किया */}
      <section className="bg-[#F7F8FE] pt-8 pb-0"> {/* Changed from pt-12 pb-0 */}
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Text */}
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              The Problem
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                While matrimony apps exist in abundance, most are built around individual decision-making
                and private conversations. This approach does not fully align with Nepali cultural values,
                where marriage is a collective decision involving elders, trust, and social context.
              </p>

              <p className="font-medium">
                Key challenges included:
              </p>

              <ul className="space-y-2 pl-2"> {/* Changed from space-y-3 */}
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
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={airingConstraints}
              alt="Research moodboard"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* USERS & EMOTIONAL CONTEXT - gap कम किया */}
      <section className="bg-white pt-8 pb-16"> {/* Changed from pt-12 pb-24 */}
        {/* Text */}
        <div className="max-w-[1120px] mx-auto px-6">
          <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
            Users & Emotional Context
          </h2>

          <div className="w-full h-[1px] bg-[#E4E7EC] mb-8" /> {/* Changed from mb-10 */}

          <div className="grid md:grid-cols-2 gap-12 max-w-[920px] text-[#344054] text-[17px] leading-[1.8]"> {/* Changed from gap-16 */}
            <div>
              <p className="mb-4">Users typically came with:</p> {/* Changed from mb-6 */}
              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>• Caution and hesitation rather than excitement</li>
                <li>• A strong need for trust and authenticity</li>
                <li>• Emotional sensitivity around privacy and identity</li>
                <li>• A desire for clarity about what happens next</li>
              </ul>
            </div>

            <div>
              <p className="mb-4">Before engaging deeply, users needed to feel:</p> {/* Changed from mb-6 */}
              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>• Safe sharing personal details</li>
                <li>• Confident that profiles were genuine</li>
                <li>• Reassured that the app respected cultural norms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-bleed white image strip */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={airingDesign}
              alt="App UI flows"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* RESEARCH & UNDERSTANDING + DESIGN APPROACH - gap कम किया */}
      <section className="bg-white pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Research Text */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Research & Understanding
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                To understand the space better, I reviewed existing matrimony platforms and noted how they
                handled onboarding, profiles, and conversations. While these apps worked well from a
                functional standpoint, they often felt transactional and lacked cultural sensitivity.
              </p>

              <p>
                This insight shaped a key design direction: <span className="font-medium">
                Hamrovivah should feel warm, respectful, and guided rather than fast or transactional.
                </span> The experience needed to explain itself clearly and reduce uncertainty at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Research Image */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img
              src={airingDeploy}
              alt="Research references"
              className="w-full rounded-[22px]"
            />
          </div>
        </div>

        {/* Design Approach */}
        <div className="bg-white pt-16"> {/* Changed from pt-24 */}
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="max-w-[760px]">
              <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
                Design Approach
              </h2>

              <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

              <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
                <p>
                  Designed with trust-before-interaction in mind. Guiding principles included warmth and
                  clarity in visuals, reduced friction in onboarding, meaningful conversations over endless
                  swiping, and support for family involvement.
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Image */}
          <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
            <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
              <img
                src={airingOutcome}
                alt="Onboarding & verification flows"
                className="w-full rounded-[22px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY DESIGN DECISIONS - gap कम किया */}
      <section className="bg-white pt-16 pb-0"> {/* Changed from pt-24 pb-0 */}
        {/* Text */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Key Design Decisions
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-4"> {/* Changed from space-y-6 */}
              <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
                <li>• Clear onboarding and verification flow</li>
                <li>• Profile structure focused on context, not just appearance</li>
                <li>• Thoughtful filtering and matchmaking</li>
                <li>• Communication designed as a bridge, not an end goal</li>
                <li>• Warm visual language and calming layout</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-bleed image strips */}
        <div className="mt-16 bg-white py-12"> {/* Changed from mt-24 py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={airing1} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12"> {/* Changed from py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={airing2} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12"> {/* Changed from py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={airing3} className="w-full rounded-[22px]" />
          </div>
        </div>

        <div className="bg-white py-12"> {/* Changed from py-16 */}
          <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
            <img src={impFigmaToWp1} className="w-full rounded-[22px]" />
          </div>
        </div>
      </section>

      {/* OUTCOME - gap कम किया */}
      <section className="bg-white py-16"> {/* Changed from py-24 */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[#071477] text-[20px] font-semibold mb-4"> {/* Changed from mb-5 */}
              Outcome & Learnings
            </h2>

            <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" /> {/* Changed from mb-8 */}

            <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5"> {/* Changed from space-y-6 */}
              <p>
                The final design offered a matrimony experience that felt respectful, calm, and culturally
                grounded. Instead of pushing users toward quick decisions, the app supported thoughtful
                exploration and encouraged offline progression with family involvement.
              </p>

              <div>
                <p className="mb-4">Through this project, I learned:</p> {/* Changed from mb-5 */}
                <ul className="space-y-3 pl-2"> {/* Changed from space-y-4 */}
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
        </div>
      </section>

      <ProjectPager />
      <Footer />
    </div>
  );
};

export default Airing;