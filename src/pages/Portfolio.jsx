import React from "react";
import Footer from "../components/Footer";

/* ✅ Dummy images */
const DUMMY_PROJECT =
  "https://placehold.co/600x400?text=Project+Image";

const DUMMY_VISUALS = [
  "https://placehold.co/600x500?text=Visual+1",
  "https://placehold.co/600x500?text=Visual+2",
  "https://placehold.co/600x500?text=Visual+3",
  "https://placehold.co/600x500?text=Visual+4",
  "https://placehold.co/600x500?text=Visual+5",
  "https://placehold.co/600x500?text=Visual+6",
];
const PLAYGROUND_VIDEOS = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];


/* ================= PROJECT CARD ================= */
const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white">
      {/* IMAGE */}
      <div className="w-full h-[260px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="px-6 pt-5 pb-6">
        <h3 className="text-[18px] leading-[24px] font-semibold text-[#7A82A6] mb-3">
          {title}
        </h3>

        <p className="text-[16px] leading-[26px] text-[#1F2937] mb-4">
          {description}
        </p>

        <div className="flex items-center gap-3 text-[14px] text-[#7A82A6]">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span>{tag}</span>
              {index !== tags.length - 1 && (
                <span className="text-[#CBD1E8]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-lato">

       {/* ================= ABOUT ME ================= */}
      <section className="pt-28 pb-24">
        <div className="px-6 md:px-[120px]">
          <div className="flex flex-col md:flex-row gap-[48px] items-start">

            {/* IMAGE */}
            <div className="w-full md:w-[360px] flex-shrink-0">
              <img
                src="https://placehold.co/400x520?text=Profile+Image"
                alt="About"
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-[640px]">
              <h1 className="font-raleway font-bold text-[24px] leading-[30px] text-[#071477] mb-6">
                About me
              </h1>

              <div className="space-y-5 text-[16px] leading-[26px] text-[#3D4367] font-normal">
                <p>
                  Hey, I’m Isha. I design thoughtful digital experiences with a strong focus on people.
                </p>

                <p>
                  I work as a UI/UX Designer and Engineer, focusing on making things that genuinely work
                  for the people using them. It’s easy for that intention to get lost among metrics,
                  opinions, and constraints, so I try to keep the human perspective at the center.
                </p>

                <p>
                  I enjoy exploring new ideas at the intersection of design, technology, and AI, often
                  by observing how people behave and turning those insights into thoughtful, usable
                  experiences.
                </p>

                <p>
                  Outside of work, I like photography, I’m learning to play the guitar, and I spend
                  time experimenting with vibe coding and conversational design.
                </p>

                <p>
                  I want to create an impact with heart, purpose, and a sense of belonging.
                </p>

                <p>
                  I’m always open to conversations, collaborations, and new projects. Feel free to
                  reach out :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORKS ================= */}
      <section className="pb-32">
        <div className="px-6 md:px-[120px]">

          <h2 className="font-raleway font-bold text-[20px] leading-[26px] text-[#071477] mb-10">
            Selected works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard
              image={DUMMY_PROJECT}
              title="Impactis Global"
              description="Designed and deployed a production newsletter using Figma and WordPress"
              tags={["Web & Mobile", "UI/UX Design"]}
            />

            <ProjectCard
              image={DUMMY_PROJECT}
              title="Airing Private Limited"
              description="Improved User Experience with Collaborative UI/UX Solutions"
              tags={["Mobile App", "Redesign"]}
            />

            <ProjectCard
              image={DUMMY_PROJECT}
              title="Dosaclub"
              description="Improved Admin Workflows with a Structured Dashboard System"
              tags={["Dashboard", "UX Design"]}
            />

            <ProjectCard
              image={DUMMY_PROJECT}
              title="Gadgetgrab"
              description="Designed a Streamlined E-commerce App for Browsing and Purchasing Gadgets"
              tags={["Mobile App", "UI/UX Design"]}
            />
          </div>
        </div>
      </section>

      {/* ================= VISUAL EXPLORATIONS ================= */}
      <section className="pb-32">
        <div className="px-6 md:px-[120px]">

          <h2 className="font-raleway font-bold text-[20px] leading-[26px] text-[#071477] mb-10">
            Visual explorations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DUMMY_VISUALS.map((img, index) => (
              <div
                key={index}
                className="border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white"
              >
                <img
                  src={img}
                  alt={`Visual ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PLAYGROUND ================= */}
<section className="pb-32">
  <div className="px-6 md:px-[120px]">

    {/* TITLE */}
    <h2 className="font-raleway font-bold text-[20px] leading-[26px] text-[#071477] mb-10">
      Playground
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {PLAYGROUND_VIDEOS.map((video, index) => (
        <div
          key={index}
          className="
            bg-black
            rounded-2xl
            p-3
          "
        >
          {/* WHITE FRAME */}
          <div className="rounded-xl overflow-hidden bg-white">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Portfolio;
