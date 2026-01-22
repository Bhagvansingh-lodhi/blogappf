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
      <div className="bg-white rounded-[22px] border border-[#E6E9F5] overflow-hidden hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] transition-all duration-500">

        {/* IMAGE */}
       <div className="rounded-t-[22px] overflow-hidden h-[260px]">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />
</div>


        {/* CONTENT */}
        <div className="px-7 pt-6 pb-8">

          <h3 className="font-raleway font-semibold text-[20px] text-[#071477] mb-2">
            {title}
          </h3>

          <p className="text-[16.5px] leading-[1.7] text-[#3D4367] mb-5">
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

 <section className="pt-28 pb-24">
<div className="max-w-[1120px] mx-auto px-6">

    <div className="grid md:grid-cols-[380px_1fr] gap-20 items-start">

      {/* IMAGE */}
      <div className="w-full md:w-[360px] h-[680px] flex-shrink-0 self-start">
  <img
    src={profilePng}
    alt="Isha – UI/UX Designer"
    className="rounded-3xl w-full h-full object-cover shadow-sm"
  />
</div>


      {/* TEXT */}
      <div>
        <h1 className="font-raleway font-semibold text-[28px] text-[#071477] mb-6">
          About me
        </h1>

        <div className="space-y-7 text-[18px] leading-[1.9] text-[#3D4367]">
          <p>
            Hey, I’m Isha. I design thoughtful digital experiences with a strong focus on people.
          </p>

          <p>
            I work as a UI/UX Designer and build using no-code tools, focusing on making things that genuinely work for the people using them. It’s easy for that intention to get lost among metrics, opinions, and constraints so I try to keep the human perspective at the center.
          </p>

          <p>
            I enjoy exploring new ideas at the intersection of design, technology, and AI, often by observing how people behave and turning those insights into thoughtful, usable experiences.
          </p>

          <p>
            Outside of work, I like photography, I’m learning to play the guitar, and I spend time experimenting with vibe coding and conversational design.
          </p>

          <p>
            I want to create an impact with heart, purpose, and a sense of belonging.
          </p>

          <p className="font-medium">
            I’m always open to conversations, collaborations, and new projects. Feel free to reach out :)
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= SELECTED WORKS ================= */}
<section className="pb-24 bg-white">
  <div className="max-w-[1120px] mx-auto px-6">

    <h2 className="font-raleway font-semibold text-[26px] text-[#071477] mb-14">
      Selected works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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



<section className="pt-32 pb-24 bg-white">
<div className="max-w-[1120px] mx-auto px-6">

    <h2 className="font-raleway font-semibold text-[26px] text-[#071477] mb-14">
      Visual explorations
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-7">

      {DUMMY_VISUALS.map((img, index) => {
        const big = index === 0 || index === 1 || index === 5 || index === 6;

        return (
          <div
            key={index}
            className={`rounded-[22px] border border-[#E6E9F5] overflow-hidden bg-white 
            hover:shadow-[0_18px_55px_-28px_rgba(0,0,0,0.25)] transition-all duration-500
            ${big ? "md:col-span-3 md:row-span-2" : "md:col-span-2"}`}
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


<section className="pt-24 pb-40 bg-white">
<div className="max-w-[1120px] mx-auto px-6">

    <h2 className="font-raleway font-semibold text-[26px] text-[#071477] mb-14">
      Playground
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {PLAYGROUND_GIFS.map((gif, index) => (
        <div
          key={index}
          className="rounded-[22px] border border-[#E6E9F5] bg-white overflow-hidden
          hover:shadow-[0_18px_55px_-28px_rgba(0,0,0,0.25)] transition-all duration-500"
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