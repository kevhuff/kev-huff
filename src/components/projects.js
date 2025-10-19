import React from "react";

// Images
import H2preview from "./assets/H2preview.png";
import lwteImage from "./assets/lwte.png";
import horizenImage from "./assets/horizen.png";
import readmeImage from "./assets/readme.png";
import pwImage from "./assets/pwgen.png";

// Project cards
const projectsData = [
  {
    id: 1,
    title: "H² Automotive Website (Next.js + Tailwind)",
    description:
      "Responsive marketing site for H² Automotive featuring brand-forward design, mobile-first layout, and performance optimizations. Built with modern React tooling and SEO best practices.",
    imageUrl: H2preview,
    link: "https://www.h2autowv.com/",
    ratio: "16/10", // a bit taller than 16:9 so more of the page shows
  },
  {
    id: 2,
    title: "L.W.T.E.",
    description:
      "Light Weight Text Editor PWA is an efficient web-based editor. It harnesses next-gen JavaScript for smooth functionality and uses IndexedDB to autosave content in real time. The app’s offline caching, powered by a Service Worker with Workbox, ensures consistent performance offline. Enhanced with Webpack bundling, it guarantees swift load times. A unique feature allows users to install the app directly onto their desktop.",
    imageUrl: lwteImage,
    link: "https://github.com/kevhuff/mod19-pwa",
    ratio: "16/9",
  },
  {
    id: 3,
    title: "Horizen.FM",
    description:
      "Horizen.FM is a tailored music recommendation web platform. It curates personalized song suggestions based on users’ preferences, including genre, language, and nationality. By integrating with the Unsplash API and the YouTube IFrame/Data APIs, users discover new tracks from global artists. Pico CSS keeps the UI clean and fast.",
    imageUrl: horizenImage,
    link: "https://github.com/gustavomg21/Horizen.FM",
    ratio: "16/9",
  },
  {
    id: 4,
    title: "README Generator",
    description:
      "A CLI that dynamically generates a professional README.md using Inquirer prompts. Outputs badges, title, description, TOC, installation, usage, license, contributing, tests, and questions sections.",
    imageUrl: readmeImage,
    link: "#",
    ratio: "16/9",
  },
  {
    id: 5,
    title: "Password Generator",
    description:
      'Generates random passwords based on user-selected criteria. Runs in the browser with a clean, responsive UI. <strong><u>Clicking the image opens the deployed app (or repo).</u></strong>',
    imageUrl: pwImage,
    link: "#",
    ratio: "16/9",
  },
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold mb-2 text-center text-indigo-200">
        My Projects
      </h2>
      <p className="text-lg mb-6 text-center text-indigo-200/80">
        Click a card to learn more
      </p>

      {/* Responsive grid: 1 col mobile, 2 cols md, 3 cols lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => {
          // pick aspect ratio, default to 16/9
          const ratio = project.ratio || "16/9";
          const aspectClass = `aspect-[${ratio}]`;

          return (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="block bg-[#3b3b3b88] p-6 md:p-8 text-white rounded-2xl shadow-2xl hover:bg-gray-600/70 transition ease-in-out duration-200 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {/* Image wrapper: keeps full image visible, no cropping */}
              <div
                className={`relative w-full ${aspectClass} bg-slate-900/40 rounded-xl mb-4 overflow-hidden flex items-center justify-center ring-1 ring-white/10`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div
                className="text-sm leading-relaxed text-indigo-100/90"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
