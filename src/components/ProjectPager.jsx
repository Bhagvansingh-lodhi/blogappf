import { Link, useLocation } from "react-router-dom";

const projectOrder = [
  { slug: "dosa-club", label: "DosaClub" },
  { slug: "airing", label: "Airing" },
    { slug: "impactis-global", label: "Impactis Global" },
  { slug: "gadgetgrab", label: "Gadgetgrab" }
];

export default function ProjectPager() {
  const location = useLocation();
  const currentSlug = location.pathname.split("/").pop();

  const index = projectOrder.findIndex(p => p.slug === currentSlug);

  const prev = projectOrder[index - 1];
  const next = projectOrder[index + 1];

  return (
    <div className="max-w-[1180px] mx-auto px-6 py-28">
      <div className="border-t border-[#E4E7EC] pt-10 flex justify-between text-[#667085] text-sm">

        {prev ? (
          <Link
            to={`/project/${prev.slug}`}
            className="flex items-center gap-2 hover:text-[#0B1AA6] transition"
          >
            ← Previous
            <span className="hidden md:inline text-[#101828] font-medium">{prev.label}</span>
          </Link>
        ) : <span />}

        {next ? (
          <Link
            to={`/project/${next.slug}`}
            className="flex items-center gap-2 hover:text-[#0B1AA6] transition"
          >
            <span className="hidden md:inline text-[#101828] font-medium">{next.label}</span>
            Next →
          </Link>
        ) : <span />}

      </div>
    </div>
  );
}
