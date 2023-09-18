import React from 'react';
import lwteImage from './assets/lwte.png';
import horizenImage from './assets/horizen.png';
import readmeImage from './assets/readme.png';  
import pwImage from './assets/pwgen.png';

const projectsData = [
    {
        id: 1,
        title: "L.W.T.E.",
        description: "Light Weight Text Editor PWA is an efficient web-based editor. It harnesses next-gen JavaScript for smooth functionality and uses IndexedDB to autosave content in real-time. The app's offline caching, powered by a Service Worker with Workbox, ensures consistent performance offline. Enhanced with Webpack bundling, it guarantees swift load times. A unique feature allows users to install the app directly onto their desktop.",
        imageUrl: lwteImage,
    },
    {
        id: 2,
        title: "Horizen.FM",
        description: "Horizen.FM is a tailored music recommendation web platform. It curates personalized song suggestions based on users' preferences, including genre, language, and nationality. By integrating with the Unsplash API for quality images and the YouTube IFrame and Data APIs for fetching and displaying music videos, users discover new tracks from global artists. The clean design, enriched by the Pico Framework, makes music exploration effortless and enjoyable. Dive into a unique music journey with Horizen.FM.",
        imageUrl: horizenImage,
    },
   {
       id: 3,
        title: "README Generator",
        description: "This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked with the following command: node index.js. The user will be prompted for their GitHub username and other information pertaining to the project the README is for. The README will be populated with the following: At least one badge, title, description, table of contents, installation, usage, license, contributing, tests, and questions.",
        imageUrl: readmeImage,
   },
   {
        id: 4,
        title: "Password Generator",
        description: "This is an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes. <strong><u>Clicking on the image will direct you to the deployed application</u></strong>.",

        imageUrl: pwImage,
    },

    ];

    const Projects = () => {
        return (
            <div className="p-8">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-200 ">My Projects</h2>
                <h1 className='text-4 font-bold mb-6 text-center text-indigo-200'>Click on images below to read more about them!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map(project => {
                        let projectLink;
                        switch (project.id) {
                            case 1:
                                projectLink = "https://github.com/kevhuff/mod19-pwa";
                                break;
                            case 2:
                                projectLink = "https://github.com/gustavomg21/Horizen.FM"; 
                                break;
                            // ... other cases
                            default:
                                projectLink = "#";
                        }
                        return (
                            <a key={project.id} href={projectLink} target="_blank" rel="noopener noreferrer" className="block bg[#3b3b3b88]] p-12 text-white rounded shadow-2xl hover:bg-gray-500 transition ease-in-out duration-150">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-4 rounded transform transition-transform duration-300 hover:scale-105" />
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                             
                                <div 
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                ></div>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    };
    
    export default Projects;
