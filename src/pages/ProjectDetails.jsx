import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import ProjectPager from "../components/ProjectPager";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Featured cinematic project redirect
  if (project?.slug === "dosa-club") {
    return <Navigate to="/project/dosa-club" replace />;
  }

  const cs = project?.caseStudy;

  if (!project) return <div className="p-24 text-xl">Project not found</div>;

  if (!cs)
    return (
      <div className="p-24 text-xl">
        Detailed case study coming soon…
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="pt-20 pb-16 bg-white">
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
            {cs.heroTitle}
          </h1>

          {/* Sub */}
          <p className="mt-3 text-[#3D4367] text-[17px] md:text-[18px] leading-[1.6] max-w-[720px]">
            {cs.heroSubtitle}
          </p>

          {/* Hero Image */}
          <div className="mt-12 bg-[#F2F4F7] rounded-[28px] p-8 flex justify-center">
            <img
              src={cs.heroImages[0]}
              alt="Impactis Global Hero"
              className="w-full max-w-[900px] rounded-[24px]"
            />
          </div>

          {/* Meta */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8 text-[#344054]">
            {cs.meta.map((m, i) => (
              <Meta key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {cs.sections.map((sec, i) => (
        <RenderSection key={i} sec={sec} />
      ))}

      <ProjectPager />
      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────
   RENDERER
───────────────────────────────────────────────── */
function RenderSection({ sec }) {
  if (sec.type === "text-image") return <TextImage {...sec} />;
  if (sec.type === "text") return <TextOnly {...sec} />;
  if (sec.type === "bullets-image") return <BulletsImage {...sec} />;
  if (sec.type === "editorial-image") return <EditorialImage {...sec} />;
  return null;
}

/* ────────────────────────────────────────────────
   SECTION COMPONENTS - Updated to match other pages
───────────────────────────────────────────────── */
const TextOnly = ({ title, text, image }) => (
  <section className="bg-[#F7F8FE] pt-16 pb-8">
    <div className="max-w-[1120px] mx-auto px-6">
      <div className="max-w-[760px]">
        <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
          {title}
        </h2>

        <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

        <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
          {text.split("\n\n").map((p, i) => (
            <p key={i}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>

    {image && (
      <div className="mt-12 bg-white py-12">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full rounded-[22px]"
          />
        </div>
      </div>
    )}
  </section>
);

const TextImage = ({ title, text, image }) => (
  <section className="bg-[#F7F8FE] pt-16 pb-8">
    <div className="max-w-[1120px] mx-auto px-6">
      <div className="max-w-[760px]">
        <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
          {title}
        </h2>

        <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

        <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
          {text.split("\n\n").map((p, i) => (
            <p key={i}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12 bg-white py-12">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-[22px]"
        />
      </div>
    </div>
  </section>
);

const BulletsImage = ({ title, intro, bullets, image }) => (
  <section className="bg-[#F7F8FE] pt-16 pb-8">
    <div className="max-w-[1120px] mx-auto px-6">
      <div className="max-w-[760px]">
        <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
          {title}
        </h2>

        <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

        {intro && (
          <p className="text-[#344054] text-[17px] mb-6">
            {intro}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-[#344054] text-[17px] leading-[1.8] max-w-[860px]">
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-2">
              <span className="mt-2 text-[#667085]">•</span>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12 bg-white py-12">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-[22px]"
        />
      </div>
    </div>
  </section>
);

const EditorialImage = ({ title, text, image }) => {
  return (
    <section className="bg-[#F7F8FE] pt-16 pb-8">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[760px]">
          <h2 className="text-[#071477] text-[20px] font-semibold mb-4">
            {title}
          </h2>

          <div className="w-full h-[1px] bg-[#E4E7EC] mb-6" />

          <div className="text-[#344054] text-[17px] leading-[1.8] space-y-5">
            {text.split("\n\n").map((block, i) => {
              // Check if this block contains bullet points (starts with .)
              if (block.trim().startsWith(".")) {
                const lines = block.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-3 pl-2">
                    {lines.map((l, idx) => (
                      <li key={idx}>{l.replace(/^\.\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={i}>{block}</p>;
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white py-12">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full rounded-[22px]"
          />
        </div>
      </div>
    </section>
  );
};

/* META */
const Meta = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-widest text-[#98A2B3]">{label}</p>
    <p className="mt-1 font-medium text-[#344054] whitespace-pre-line">
      {value}
    </p>
  </div>
);