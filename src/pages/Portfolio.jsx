import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import v1 from "../assets/visuals/v1.png";
import v2 from "../assets/visuals/v2.png";
import v3 from "../assets/visuals/v3.png";
import v4 from "../assets/visuals/v4.png";
import v5 from "../assets/visuals/v5.png";
import v6 from "../assets/visuals/v6.png";
import v7 from "../assets/visuals/v7.png";
import profilePng from "../assets/profile.png";
import { PROJECTS } from "../data/projects";

/* ================= STATIC DATA ================= */
const DUMMY_VISUALS = [v1, v2, v3, v4, v5, v6, v7];

const PLAYGROUND_VIDEOS = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ slug, image, title, description, tags }) => {
  return (
    <Link to={`/project/${slug}`}>
      <div className="border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white hover:shadow-xl transition">
        <div className="w-full h-[260px] overflow-hidden">
         <img
  src={image}
  alt={title}
  className="w-full h-full object-contain bg-[#F8FAFF]"
/>

        </div>

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
    </Link>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-lato">

      {/* ================= ABOUT ME ================= */}
      <section className="pt-28 pb-24">
        <div className="px-6 md:px-[120px]">
          <div className="flex flex-col md:flex-row gap-[48px] items-start">
            <div className="w-full md:w-[360px] flex-shrink-0">
              <img src={profilePng} alt="About" className="rounded-2xl w-full object-cover" />
            </div>

            <div className="max-w-[640px]">
              <h1 className="font-raleway font-bold text-[24px] leading-[30px] text-[#071477] mb-6">
                About me
              </h1>

              <div className="space-y-5 text-[16px] leading-[26px] text-[#3D4367]">
                <p>Hey, I’m Isha. I design thoughtful digital experiences with a strong focus on people.</p>
                <p>I work as a UI/UX Designer and Engineer, focusing on making things that genuinely work for people using them.</p>
                <p>I enjoy exploring new ideas at the intersection of design, technology, and AI.</p>
                <p>Outside of work, I like photography, I’m learning to play the guitar, and I spend time experimenting with vibe coding and conversational design.</p>
                <p>I want to create an impact with heart, purpose, and belonging.</p>
                <p>I’m always open to conversations, collaborations, and new projects. Feel free to reach out :)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORKS ================= */}
      <section className="pb-32">
        <div className="px-6 md:px-[120px]">
          <h2 className="font-raleway font-bold text-[20px] text-[#071477] mb-10">
            Selected works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={i}
                slug={p.slug}
                image={p.cardImage}
                title={p.title}
                description={p.description}
                tags={[p.role, p.company]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISUAL EXPLORATIONS ================= */}
      <section className="pb-32">
        <div className="px-6 md:px-[120px]">
          <h2 className="font-raleway font-bold text-[20px] leading-[26px] text-[#071477] mb-10">
            Visual explorations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            {DUMMY_VISUALS.map((img, index) => {
              const big = index === 0 || index === 1 || index === 5 || index === 6;
              return (
                <div
                  key={index}
                  className={`border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white ${
                    big ? "md:col-span-3 md:row-span-2" : "md:col-span-2"
                  }`}
                >
                  <img src={img} alt={`Visual ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PLAYGROUND ================= */}
      <section className="pb-32">
        <div className="px-6 md:px-[120px]">
          <h2 className="font-raleway font-bold text-[20px] leading-[26px] text-[#071477] mb-10">
            Playground
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PLAYGROUND_VIDEOS.map((video, index) => (
              <div key={index} className="bg-black rounded-2xl p-3">
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

      <Footer />
    </div>
  );
};

export default Portfolio;
