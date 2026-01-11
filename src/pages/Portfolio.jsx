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
import pg1 from "../assets/playground/pg1.gif";
import pg2 from "../assets/playground/pg2.gif";
import pg3 from "../assets/playground/pg3.gif";
import pg4 from "../assets/playground/pg4.gif";
import pg5 from "../assets/playground/pg5.gif";
import pg7 from "../assets/playground/pg7.gif";
import pg8 from "../assets/playground/pg8.gif";
import pg9 from "../assets/playground/pg9.gif";
import pg10 from "../assets/playground/pg10.gif";

import pg6 from "../assets/playground/pg6.gif";


/* ================= STATIC DATA ================= */
const DUMMY_VISUALS = [v1, v2, v3, v4, v5, v6, v7];

const PLAYGROUND_GIFS = [pg1, pg2, pg3, pg4, pg5, pg6,pg7,pg8,pg9,pg10];

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ slug, image, title, description, tags }) => {
  return (
    <Link to={`/project/${slug}`}>
      <div className="border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">
        <div className="w-full h-[280px] md:h-[300px] overflow-hidden bg-[#F8FAFF]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="px-6 pt-6 pb-8">
          <h3 className="text-xl md:text-[22px] font-semibold text-[#071477] mb-3 leading-tight">
            {title}
          </h3>

          <p className="text-[17px] md:text-[18px] leading-[1.6] text-[#3D4367] mb-5">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[#7A82A6]">
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
      <section className="pt-32 pb-32 md:pb-40">
        <div className="px-6 md:px-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-[380px] flex-shrink-0">
              <img
                src={profilePng}
                alt="Isha - UI/UX Designer"
                className="rounded-2xl w-full object-cover shadow-md"
              />
            </div>

            <div className="max-w-[720px]">
             <h1 className="font-raleway font-bold text-3xl md:text-[40px] lg:text-[42px] leading-tight text-[#071477] mb-8">
  About me
</h1>
              <div className="space-y-6 text-[18px] md:text-[19px] leading-[1.75] text-[#3D4367]">
                <p>Hey, I’m Isha. I design thoughtful digital experiences with a strong focus on people.</p>
                <p>I work as a UI/UX Designer and Engineer, focusing on making things that genuinely work for people using them.</p>
                <p>I enjoy exploring new ideas at the intersection of design, technology, and AI.</p>
                <p>Outside of work, I like photography, I’m learning to play the guitar, and I spend time experimenting with vibe coding and conversational design.</p>
                <p>I want to create an impact with heart, purpose, and belonging.</p>
                <p className="font-medium">I’m always open to conversations, collaborations, and new projects. Feel free to reach out :)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORKS ================= */}
      <section className="pb-40 bg-[#F7F8FE]">
        <div className="px-6 md:px-[120px]">
          <h2 className="font-raleway font-bold text-[28px] text-[#071477] mb-12">
            Selected works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
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
      <section className="py-32 md:py-40">
        <div className="px-6 md:px-[120px]">
          <h2 className="font-raleway font-bold text-[28px] text-[#071477] mb-12">
            Visual explorations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
            {DUMMY_VISUALS.map((img, index) => {
              const big = index === 0 || index === 1 || index === 5 || index === 6;
              return (
                <div
                  key={index}
                  className={`border border-[#E6E9F5] rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:scale-[1.02] ${
                    big ? "md:col-span-3 md:row-span-2" : "md:col-span-2"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Visual exploration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PLAYGROUND ================= */}
      <section className="pb-32 md:pb-40 bg-[#F7F8FE]">
  <div className="px-6 md:px-[120px]">
    <h2 className="font-raleway font-bold text-[28px] text-[#071477] mb-12">
      Playground
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {PLAYGROUND_GIFS.map((gif, index) => (
        <div
          key={index}
          className="bg-white border border-[#E6E9F5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
        >
          <div className="relative w-full h-[260px] md:h-[300px] bg-black overflow-hidden">
            <img
              src={gif}
              alt={`Playground motion ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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