import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";


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
    <div className="bg-[#F7F8FE] min-h-screen font-lato">
      {/* BACK + HERO */}
      <div className="pt-28 px-6 md:px-[120px]">
        <Link
          to="/portfolio"
          className="text-[#7A82A6] text-base font-medium mb-10 inline-block hover:text-[#071477] transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="font-raleway font-bold text-5xl md:text-[48px] leading-tight text-[#071477] mb-6">
          {cs.heroTitle}
        </h1>

        <p className="text-[#3D4367] text-xl md:text-[20px] leading-relaxed mb-20 max-w-[780px]">
          {cs.heroSubtitle}
        </p>

        {/* HERO IMAGE - wider version you liked */}
        {/* HERO */}
     <div className="mb-28 px-6 md:px-[120px]">
  <div className="bg-[#F3F3F3] rounded-[36px] p-14 flex justify-center">
    <img
      src={cs.heroImages[0]}
      className="rounded-[28px] max-w-[1100px] w-full object-contain shadow-sm"
    />
  </div>
</div>

        {/* META */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-28">
          {cs.meta.map((m, i) => (
            <Meta key={i} {...m} />
          ))}
        </div>
      </div>

      {/* SECTIONS */}
      {cs.sections.map((sec, i) => (
        <RenderSection key={i} sec={sec} />
      ))}

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
   SECTION COMPONENTS - Updated Typography
───────────────────────────────────────────────── */
const TextOnly = ({ title, text, image }) => (
  <div className="bg-[#F7F8FE] py-28 md:py-32 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">
      <div className="max-w-[860px] mb-20">
        <h2 className="text-[#071477] font-raleway font-bold text-[28px] md:text-[28px] mb-8 leading-tight">
          {title}
        </h2>

        {text.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-[#3D4367] text-[18px] leading-[1.75] mb-8"
          >
            {p}
          </p>
        ))}
      </div>

      {image && (
        <div className="bg-white rounded-[28px] p-8 md:p-10 flex justify-center shadow-sm">
          <img
            src={image}
            className="rounded-[18px] max-w-[420px] w-full object-contain"
          />
        </div>
      )}
    </div>
  </div>
);

const TextImage = ({ title, text, image }) => (
  <div className="bg-[#F7F8FE] py-28 md:py-32 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">
      <div className="max-w-[860px] mb-20">
        <h2 className="text-[#071477] font-raleway font-bold text-[28px] mb-8 leading-tight">
          {title}
        </h2>

        {text.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-[#3D4367] text-[18px] leading-[1.75] mb-8"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="bg-white rounded-[28px] p-8 md:p-10 flex justify-center shadow-sm">
        <img
          src={image}
          className="rounded-[18px] max-w-[420px] w-full object-contain"
        />
      </div>
    </div>
  </div>
);

const BulletsImage = ({ title, intro, bullets, image }) => (
  <div className="bg-[#F7F8FE] py-28 md:py-32 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">
      <div className="max-w-[940px] mb-24">
        <h2 className="text-[#071477] font-raleway font-bold text-[28px] mb-8 leading-tight">
          {title}
        </h2>

        {intro && (
          <p className="text-[#3D4367] text-[18px] leading-[1.75] mb-10">
            {intro}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-[#3D4367]">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="mt-2.5 w-2.5 h-2.5 bg-[#071477] rounded-full flex-shrink-0"></span>
              <p className="text-[18px] leading-[1.7]">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[28px] p-10 md:p-12 flex justify-center shadow-sm">
        <img
          src={image}
          className="rounded-[20px] max-w-[560px] w-full object-contain"
        />
      </div>
    </div>
  </div>
);

const EditorialImage = ({ title, text, bullets = [], image }) => {
  const isOutcome = title.toLowerCase().includes("outcome");

  return (
    <div className="bg-[#F7F8FE] py-28 md:py-32 border-t border-[#E4E6F2]">
      <div className="px-6 md:px-[120px]">
        <div className="max-w-[960px] mb-20">
          <h2 className="text-[#071477] font-raleway font-bold text-[28px] mb-8 leading-tight">
            {title}
          </h2>

          {text.split("\n\n").map((block, i) => {
            if (block.trim().startsWith(".")) {
              const lines = block.split("\n").filter(Boolean);
              return (
                <ul
                  key={i}
                  className="list-disc pl-8 md:pl-10 space-y-4 text-[#3D4367] mb-10 text-[18px]"
                >
                  {lines.map((l, idx) => (
                    <li key={idx}>{l.replace(/^\.\s*/, "")}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={i}
                className="text-[#3D4367] text-[18px] leading-[1.75] mb-8 whitespace-pre-line"
              >
                {block}
              </p>
            );
          })}
        </div>

        <div className="bg-white rounded-[36px] px-10 md:px-14 py-12 md:py-16 flex justify-center shadow-md">
          <img
            src={image}
            className={`rounded-[28px] w-full object-contain ${
              isOutcome ? "max-w-[960px]" : "max-w-[460px]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

/* META */
const Meta = ({ label, value }) => (
  <div>
    <p className="text-[#9AA2C3] text-sm md:text-[14px] mb-2 uppercase tracking-wide">
      {label}
    </p>
    <p className="text-[#071477] font-semibold text-base md:text-[16px] leading-relaxed whitespace-pre-line">
      {value}
    </p>
  </div>
);