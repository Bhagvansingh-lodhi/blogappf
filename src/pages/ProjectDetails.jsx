import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return <div className="p-24">Not found</div>;

  return (
    <div className="bg-white min-h-screen font-lato">

      {/* Back */}
      <div className="pt-24 px-6 md:px-[120px]">
        <Link to="/" className="text-[#7A82A6] text-sm mb-6 inline-block">← Back to Portfolio</Link>

        {/* Title */}
        <h1 className="font-raleway font-bold text-[28px] text-[#071477] mb-3">
          {project.title}
        </h1>
        <p className="max-w-[680px] text-[#3D4367] mb-10 leading-7">
          {project.description}
        </p>

        {/* Hero */}
        <img src={project.hero} className="rounded-3xl w-full mb-16" />

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <Meta label="Company" value={project.company} />
          <Meta label="Role" value={project.role} />
          <Meta label="Duration" value={project.duration} />
          <Meta label="Team" value={project.team} />
        </div>
      </div>

      {/* Section */}
      <Section title={`What is ${project.title} OR Project Overview`} />

      {/* Big Banner */}
      <Banner text="Who are our users and what are we trying to solve" />

      <Section title="The Problem Statement" />

      <Banner text="BUT WHY SHOULD WE SOLVE THIS?" />

      <Section title="Understanding our user or User Interview" twoCol />

      <Banner text="USER FLOW" />

      <Section title="Opportunity areas" />

      <Banner text="WIREFRAMES" />
      <Banner text="USER INTERFACE" />
      <Banner text="MOCKUPS" />

      <Footer />
    </div>
  );
}

/* Components */

const Meta = ({ label, value }) => (
  <div>
    <p className="text-[#9AA2C3] text-sm mb-1">{label}</p>
    <p className="text-[#071477] font-medium whitespace-pre-line">{value}</p>
  </div>
);

const Section = ({ title, twoCol }) => (
  <div className="bg-[#F7F8FE] py-20">
    <div className="px-6 md:px-[120px]">
      <h2 className="text-[#071477] font-raleway font-bold mb-6">{title}</h2>

      <div className={twoCol ? "grid md:grid-cols-2 gap-10" : ""}>
        {[1, 2, 3, 4].slice(0, twoCol ? 4 : 2).map(i => (
          <div key={i}>
            <h4 className="text-[#071477] font-medium mb-2">Name or situation of a user</h4>
            <p className="text-[#3D4367] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Banner = ({ text }) => (
  <div className="px-6 md:px-[120px] my-16">
    <div className="relative rounded-3xl overflow-hidden h-[300px]">

      {/* Image */}
      <img
        src="https://placehold.co/1400x600?text=Wave+Banner"
        className="w-full h-full object-cover"
      />

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-white text-[#071477] px-6 py-2 rounded-lg text-sm font-medium shadow">
          {text}
        </span>
      </div>

    </div>
  </div>
);
