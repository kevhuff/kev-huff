import React from "react";
import lwteImage from "./assets/lwte.png";
import horizenImage from "./assets/horizen.png";
import readmeImage from "./assets/readme.png";
import pwImage from "./assets/pwgen.png";

const projectsData = [
  // H² Automotive first
  {
    id: 1,
    title: "H² Automotive Website (Next.js + Tailwind)",
    description:
      "Responsive marketing site for H² Automotive featuring brand-forward design, mobile-first layout, and performance optimizations. Built with modern React tooling and SEO best practices.",
    imageUrl:
    kevhuff/kev-huff/src/components/assets/H2preview.png ,
    link: "https://www.h2autowv.com/",
  },
  {
    id: 2,
    title: "L.W.T.E.",
    description:
      "Light Weight Text Editor PWA is an efficient web-based editor. It harnesses next-gen JavaScript for smooth functionality and uses IndexedDB to autosave content in real-time. The app's offline caching, powered by a Service Worker with Workbox, ensures consistent performance offline. Enhanced with Webpack bundling, it guarantees swift load times. A unique feature allows users to install the app directly onto their desktop.",
    imageUrl: lwteImage,
    link: "https://github.com/kevhuff/mod19-pwa",
  },
  {
    id: 3,
    title: "Horizen.FM",
    description:
      "Horizen.FM is a tailored music recommendation web platform. It curates personalized song suggestions based on users' preferences, including genre, language, and nationality. By integrating with the Unsplash API for quality images and the YouTube IFrame and Data APIs for fetching and displaying music videos, users discover new tracks from global artists. The clean design, enriched by the Pico Framework, makes music exploration effortless and enjoyable. Dive into a unique music journey with Horizen.FM.",
    imageUrl: horizenImage,
    link: "https://github.com/gustavomg21/Horizen.FM",
  },
  {
    id: 4,
    title: "README Generator",
    description:
      "This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked with the following command: node index.js. The user will be prompted for their GitHub username and other information pertaining to the project the README is for. The README will be populated with the following: At least one badge, title, description, table of contents, installation, usage, license, contributing, tests, and questions.",
    imageUrl: readmeImage,
    link: "#",
  },
  {
    id: 5,
    title: "Password Generator",
    description:
      "This is an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes. <strong><u>Clicking on the image will direct you to the deployed application</u></strong>.",
    imageUrl: pwImage,
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold mb-2 text-center text-indigo-200">
        My Projects
      </h2>
      <p className="text-lg mb-6 text-center text-indigo-200 opacity-80">
        Click a card to learn more
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="block bg-[#3b3b3b88] p-6 md:p-8 text-white rounded-2xl shadow-2xl hover:bg-gray-600/70 transition ease-in-out duration-200 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded-xl transform transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <div
              className="text-sm leading-relaxed text-indigo-100/90"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
