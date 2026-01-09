import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);
  const cs = project?.caseStudy;

  if (!project) return <div className="p-24">Not found</div>;

  return (
    <div className="bg-[#F7F8FE] min-h-screen font-lato">

      {/* BACK */}
      <div className="pt-24 px-6 md:px-[120px]">
        <Link to="/portfolio" className="text-[#7A82A6] text-sm mb-10 inline-block">← Back to Portfolio</Link>

        <h1 className="font-raleway font-bold text-[36px] text-[#071477] mb-4">
          {cs.heroTitle}
        </h1>

        <p className="text-[#3D4367] text-lg mb-16 max-w-[720px]">
          {cs.heroSubtitle}
        </p>

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
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

/* RENDERER */
function RenderSection({ sec }) {
  if (sec.type === "text-image") return <TextImage {...sec} />;
  if (sec.type === "text") return <TextOnly {...sec} />;
  if (sec.type === "bullets-image") return <BulletsImage {...sec} />;
  if (sec.type === "editorial-image") return <EditorialImage {...sec} />;

}

/* SECTIONS */

const TextOnly = ({ title, text, image }) => (
  <div className="bg-[#F7F8FE] py-28 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">

      {/* TEXT */}
      <div className="max-w-[820px] mb-20">
        <h2 className="text-[#071477] font-raleway text-[22px] mb-6">{title}</h2>

        {text.split("\n\n").map((p, i) => (
          <p key={i} className="text-[#3D4367] leading-8 mb-6">
            {p}
          </p>
        ))}
      </div>

      {/* IMAGE CARD */}
      {image && (
        <div className="bg-white rounded-[24px] p-8 flex justify-center shadow-sm">
          <img
            src={image}
            className="rounded-[16px] max-w-[380px] w-full object-contain"
          />
        </div>
      )}

    </div>
  </div>
);


const TextImage = ({ title, text, image }) => (
  <div className="bg-[#F7F8FE] py-28 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">

      {/* TEXT */}
      <div className="max-w-[820px] mb-20">
        <h2 className="text-[#071477] font-raleway text-[22px] mb-6">{title}</h2>

        {text.split("\n\n").map((p, i) => (
          <p key={i} className="text-[#3D4367] leading-8 mb-6">
            {p}
          </p>
        ))}
      </div>

      {/* IMAGE CARD */}
   <div className="bg-white rounded-[24px] p-6 flex justify-center shadow-sm">
  <img
    src={image}
    className="rounded-[14px] max-w-[380px] w-full object-contain"
  />
</div>



    </div>
  </div>
);


const BulletsImage = ({ title, intro, bullets, image }) => (
  <div className="bg-[#F7F8FE] py-28 border-t border-[#E4E6F2]">
    <div className="px-6 md:px-[120px]">

      <div className="max-w-[900px] mb-24">
        <h2 className="text-[#071477] font-raleway text-[22px] mb-6">{title}</h2>

        {intro && (
          <p className="text-[#3D4367] mb-8">{intro}</p>
        )}

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-8 text-[#3D4367]">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 whitespace-pre-line">
              <span className="mt-2 w-2 h-2 bg-[#071477] rounded-full"></span>
              <p className="leading-7">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-10 flex justify-center shadow-sm">
        <img src={image} className="rounded-[18px] max-w-[520px] w-full object-contain" />
      </div>

    </div>
  </div>
);

const EditorialImage = ({ title, text, bullets = [], image }) => {
  const isOutcome = title.toLowerCase().includes("outcome");

  return (
    <div className="bg-[#F7F8FE] py-28 border-t border-[#E4E6F2]">
      <div className="px-6 md:px-[120px]">

        {/* TEXT */}
        <div className="max-w-[920px] mb-20">
          <h2 className="text-[#071477] font-raleway text-[22px] mb-6">{title}</h2>

         {text.split("\n\n").map((block, i) => {
  // If bullet section
  if (block.trim().startsWith(".")) {
    const lines = block.split("\n").filter(Boolean);
    return (
      <ul key={i} className="list-disc pl-6 space-y-3 text-[#3D4367] mb-8">
        {lines.map((l, idx) => (
          <li key={idx}>{l.replace(/^\.\s*/, "")}</li>
        ))}
      </ul>
    );
  }

  return (
   <p
  key={i}
  className="text-[#3D4367] leading-8 mb-6 whitespace-pre-line"
>
  {block}
</p>

  );
})}

        </div>

        {/* IMAGE */}
        <div className={`bg-white rounded-[36px] px-14 py-16 flex justify-center shadow-md`}>
          <img
            src={image}
            className={`rounded-[28px] w-full object-contain ${
              isOutcome ? "max-w-[920px]" : "max-w-[420px]"
            }`}
          />
        </div>

      </div>
    </div>
  );
};




const Meta = ({ label, value }) => (
  <div>
    <p className="text-[#9AA2C3] text-sm mb-1">{label}</p>
    <p className="text-[#071477] font-medium whitespace-pre-line">{value}</p>
  </div>
);
