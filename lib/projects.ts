export type Project = {
  name: string;
  description: string;
  projectImg: string;
  githubUrl: string;
  liveUrl: string;
  tecnologies: string[];
};

export const projects: Project[] = [
  {
    name: "Creatr",
    description:
      "Collaborate with brands to co-create products, share affiliate links, and earn commissions on social media.",
    projectImg: "/creatr/creatr.png",
    githubUrl: "https://github.com/ED3N-Ventures/creatr-be",
    liveUrl: "https://creatr.live/",
    tecnologies: [
      "vitejs",
      "react",
      "typescript",
      "tailwindcss",
      "prisma",
      "postgreSQL",
      "nodejs",
      "supabase",
      "cron job",
      "redis",
      "web socket",
    ],
  },
  {
    name: "Mentum Network",
    description:
      "Mentum enables high-quality connections between users and advisors through a structured process that ensures a safe, professional, and collaborative environment.",
    projectImg: "/mentum/mentum.png",
    githubUrl: "https://github.com/ED3N-Ventures/mentum-fe",
    liveUrl: "https://mentum.network/",
    tecnologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "prisma",
      "postgreSQL",
      "nodejs",
      "supabase",
      "cron job",
      "web socket",
    ],
  },
  {
    name: "Rehabify",
    description: "A full stack application about rehabilitation of drugs and alcoholaddicts.",
    projectImg: "/rehabify/1.png",
    liveUrl: "https://ts-rehab.vercel.app/",
    githubUrl: "https://github.com/Aeceu/ts-rehab-frontend",
    tecnologies: [
      "nextjs",
      "react",
      "typescript",
      "javascript",
      "framer motion",
      "tailwindcss",
      "mongodb",
      "expressjs",
      "nodejs",
    ],
  },
  {
    name: "Bubble Sort Visualizer",
    description: "A application about bubble sort algorithm and visualize it to see how it works.",
    projectImg: "/bubble-sort/1.png",
    liveUrl: "https://visualsortcraft.vercel.app/",
    githubUrl: "https://github.com/Aeceu/Sorting-Algorithm-Visualizer",
    tecnologies: ["vitejs", "react", "typescript", "tailwindcss", "bubble sort", "data structure"],
  },
  {
    name: "SociaLite Application",
    description: "A social media application where use can create and share post.",
    projectImg: "/socialite/image.png",
    githubUrl: "https://github.com/Aeceu/socialite-client",
    liveUrl: "https://socialite-six.vercel.app/",
    tecnologies: [
      "vitejs",
      "react",
      "javascript",
      "typescript",
      "tailwindcss",
      "zustand",
      "cloudinary",
      "jwt",
      "NextUI",
    ],
  },
  {
    name: "KAINAKAP PWD profilling system",
    description:
      "A pwd profilling application where I improved the ui, login and register page for our school project.",
    projectImg: "/kainakap/image.png",
    githubUrl: "https://github.com/Aeceu/NEW_KAINAKAP",
    liveUrl: "https://new-kainakap.vercel.app/auth/user/login",
    tecnologies: [
      "vitejs",
      "react",
      "javascript",
      "typescript",
      "tailwindcss",
      "redux-toolkit",
      "cloudinary",
      "jwt",
      "shadcnUI",
      "prisma",
    ],
  },
  {
    name: "StyleLayer Co.",
    description: "Full stack e-commerce appliation where user can order and add to cart an item.",
    projectImg: "/stylelayer/image.png",
    githubUrl: "https://github.com/Aeceu/stylelayer",
    liveUrl: "https://stylelayer.vercel.app/",
    tecnologies: [
      "vitejs",
      "react",
      "typescript",
      "tailwindcss",
      "redux-toolkit",
      "cloudinary",
      "jwt",
      "shadcnUI",
      "prisma",
      "postgreSQL",
    ],
  },
];
