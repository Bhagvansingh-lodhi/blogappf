import p1 from "../assets/visuals/impactis.png";
import p2 from "../assets/visuals/airing.png";
import p3 from "../assets/visuals/dosaclub.png";
import p4 from "../assets/visuals/gadgetgrab.png";

import impHero1 from "../assets/visuals/impactis1/hero1.png";
import impHero2 from "../assets/visuals/impactis1/bullet.png";
import impContext from "../assets/visuals/impactis1/context.png";
import impConstraints from "../assets/visuals/impactis1/constraints.png";
import impOutcome from "../assets/visuals/impactis1/Image.png";
import impDesign from "../assets/visuals/impactis1/outcome.png";
import impFigmaToWp from "../assets/visuals/impactis1/hero2.png";

export const PROJECTS = [
  {
    slug: "impactis-global",
    title: "Impactis Global",
    cardImage: p1,
    hero: p1,
    company: "Impactis Global",
    role: "UI/UX Designer",
    duration: "14 Days",
    team: "1 Customer Success\n1 Founding Member",
    description: "Designed and deployed a production newsletter using Figma and WordPress.",

    caseStudy: {
      heroTitle: "Impactis Global Newsletter",
      heroSubtitle: "Making Impactis Global’s work visible, understandable, and easy to share",
      heroImages: [impHero1],

      meta: [
        { label: "Company", value: "Impactis Global" },
        { label: "Role", value: "UI/UX Designer" },
        { label: "Duration", value: "14 Days" },
        { label: "Link", value: "March Newsletter" },
        { label: "Team", value: "1 Customer Success\n1 Founding Member" }
      ],

      sections: [
        {
          type: "text-image",
          title: "Context",
         text:
  "Impactis Global works to connect talented students who have cleared competitive entrance exams\nbut are unable to afford higher education fees with people willing to support them through\nscholarships. The goal has always been simple but meaningful: help capable students move forward\nin their lives.\n\nThis project started with a conversation with the co-founder, Pankaj Asthaana. He wanted to create\na newsletter that could share what was happening inside Impactis Global with scholarship providers\nand students, and help them understand the people, stories, and intent behind the organization.",
image: impConstraints
        },
        {
          type: "text",
          title: "Why a Newsletter was Needed",
          text:
  "Before the newsletter, monthly updates and ongoing work at Impactis Global were not clearly\nvisible to the community. While impactful work was happening, it wasn't reaching people\nconsistently. This reduced awareness and made it harder for supporters and students to share\nImpactis Global's work with others.\n\nThe newsletter was meant to solve this gap. It needed to become a simple, shareable way for\nscholarship providers and students to understand the impact being created each month and help\nspread awareness organically.\n\nIncreasing communication was also important because awareness of Impactis Global was still\nlimited, and the team wanted to reach more people who could support talented students.",

          image: impContext
        },
        {
         type: "bullets-image",
  title: "Constraints & Realities",
  intro: "There were a few practical constraints to design around:",
  bullets: [
    "The newsletter had to be easy to\nupdate every month",
    "Multiple team members contributed\ncontent from different areas",
    "New scholarships and student stories\ncould appear at any time",
    "The final design needed to be\ndeployed using WordPress",
    "The team did not want a visually\nheavy or complex layout"
  ],
  image: impHero2
        },
        {
          type: "editorial-image",
          title: "Design Approach & Key Decisions",
        text:
  "We started with a call to understand Pankaj's vision and expectations. I noted down the core\nrequirements, both visual and functional, especially the need for a layout that felt approachable and\ncould be easily managed through WordPress.\n\nTo understand how similar organizations communicate, I looked at how other scholarship-providing\nplatforms shared their updates and insights. This helped identify patterns around content hierarchy\nand storytelling, while also highlighting what felt missing or overly complex.\n\nI then moved to Figma and outlined the newsletter structure, breaking it down into clear sections\nthat could represent different aspects of Impactis Global's work. Instead of treating the newsletter\nas a single long page, I designed visually consistent sections for:\n\n· Team updates\n· Scholarships\n· Student stories\n· Monthly highlights\n\nEach section followed a similar structure so content could change without breaking the layout. This\nalso made it easier for different team members to contribute without confusion.\n\nAfter creating an initial version, we reviewed it together, gathered feedback, and refined the layout\nfurther. Only after alignment on structure and flow did I move into final UI design.",

          image: impDesign
        },
        {
          type: "editorial-image",
          title: "From Figma to WordPress",
          text:
  "Once the design was finalized, I deployed the newsletter using WordPress. This was my first time\nworking directly with WordPress, so there was a learning curve around plugins, layout limitations,\nand content handling.\n\nI adapted the design where needed to fit WordPress constraints without losing clarity or\nconsistency. I also used plugins to add interactive elements, such as allowing readers to rate the\nnewsletter and share their experience using emoji reactions.\n\nThe focus during deployment was to ensure the newsletter could be reused easily every month\nwithout requiring heavy design effort again.",
image: impFigmaToWp

        },
        {
  type: "editorial-image",
  title: "Outcome & Learnings",
  text:
  "The newsletter made Impactis Global's work more visible and easier to share. Scholarship providers\nand students could now understand what was happening each month and pass that information\nalong, helping awareness grow naturally.\n\nFrom this project, I learned how to:\n\n. Translate a founder's vision into a practical design system\n. Collaborate with a team and refine decisions through feedback\n. Prioritize what mattered most when working under real constraints\n. Deploy and manage designs using WordPress for the first time\n\nThis project helped me better understand how design decisions change when something needs to\nlive, scale, and be maintained in the real world.",

  image: impOutcome
}

      ]
    }
  },

  {
    slug: "airing",
    title: "Airing Private Limited",
    cardImage: p2,
    hero: p2,
    company: "Airing Pvt Ltd",
    role: "UI/UX Designer",
    duration: "21 Days",
    team: "Product & Engineering Team",
    description: "Improved User Experience with Collaborative UI/UX Solutions",
    caseStudy: { heroTitle: "Airing App", heroSubtitle: "", heroImages: [] }
  },

  {
    slug: "dosaclub",
    title: "Dosaclub",
    cardImage: p3,
    hero: p3,
    company: "Dosaclub",
    role: "UI/UX Designer",
    duration: "10 Days",
    team: "Founding Team",
    description: "Improved Admin Workflows with a Structured Dashboard System",
    caseStudy: { heroTitle: "Dosaclub Dashboard", heroSubtitle: "", heroImages: [] }
  },

  {
    slug: "gadgetgrab",
    title: "Gadgetgrab",
    cardImage: p4,
    hero: p4,
    company: "Gadgetgrab",
    role: "UI/UX Designer",
    duration: "18 Days",
    team: "Product Team",
    description: "Designed a Streamlined E-commerce App for Browsing and Purchasing Gadgets",
    caseStudy: { heroTitle: "Gadgetgrab App", heroSubtitle: "", heroImages: [] }
  }
];
