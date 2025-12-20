import React from "react";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-lato">

      {/* PAGE HEADER SPACING */}
      <section className="pt-28 pb-20">
        <div className="px-6 md:px-[120px]">

          {/* TITLE */}
          <h1 className="text-lg font-semibold text-[#071477] mb-6">
            About me
          </h1>

          {/* CONTENT */}
          <div className="max-w-2xl space-y-6 text-[15px] leading-[26px] text-[#3D4367]">
            <p>
              Hello, I’m Isha Sahu. I’m a creative human and I design things with care.
            </p>

            <p>
              I’ve worked at three startups as a UI and Graphic Designer, and over time I’ve
              learned that what matters most to me is making things that genuinely work for the
              people using them. It sounds simple, but it’s easy for that intention to get lost
              in business metrics, stakeholder opinions, and technical constraints. My role, as
              I see it, is to keep the human perspective in focus while navigating all of that
              noise.
            </p>

            <p>
              I’m usually excited by new challenges and open to exploring different ideas and
              formats. I enjoy talking to people, observing how they behave and feel, and
              translating those insights into thoughtful, usable design. I’m constantly noticing
              small details in the world around me and mentally piecing them together for
              inspiration.
            </p>

            <p>
              Outside of design, I love capturing moments through photography, and lately I’ve
              been learning to play the guitar in my free time.
            </p>

            <p>
              I’m always open to conversations, collaborations, and new projects. Feel free to
              reach out.
            </p>

            <p>
              I want to create an impact with heart, purpose, and a sense of belonging.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Portfolio;
