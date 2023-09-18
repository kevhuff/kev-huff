import React from "react";
import ProfilePic from "./assets/pfp.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-5xl font-bold mb-2 text-white transition transform hover:text-indigo-300 hover:scale-150 duration-1000 ease-in-out">
        About Me
      </h2>
      <h1 className="text-sm mb-6 text-center text-white transition transform hover:text-indigo-300 hover:scale-110 duration-1000 ease-in-out">
        (hover to pause scroll)
      </h1>
      
      <div className="text-scroll-container m-10 w-[40%] h-[30%] overflow-visible">
        <p className="text-xl text-indigo-200 hover:text-white hover:scale-110 duration-500 ease-in scroll-text">
          Hello! I'm Kevin. I started off in the automotive industry. I've spent
          the past 15 years gaining experience and skills that I feel will
          translate over to the software development world. Problem-solving,
          working with a team, and leadership are among the core strengths I've
          honed. Now, as a passionate developer, I'm experienced in JavaScript,
          React, MySQL, APIs, Node.js, Express.js, SQL, NoSQL, PWA's, and the
          full MERN stack. I'm driven by the desire to create efficient and
          impactful digital solutions. I've found that CSS and all its quirks
          are my favorite part of web development. I'm always looking for
          opportunities to learn and grow as a developer.
        </p>
      </div>
      <img
        src={ProfilePic}
        alt="Kevin's Portrait"
        className="w-[35%] h-[20%] sm:w-[27%] rounded-full shadow-lg transition transform hover:scale-105 hover:opacity-90 duration-300 ease-in-out p-5"
        />
      <div className="text-scroll-container m-10 w-[40%] h-[20%] overflow-visible">
        <p className="text-xl text-indigo-200 hover:text-white hover:scale-110 duration-500 ease-in scroll-text">
          Outside of my coding ventures, I am a fervent aficionado of all things
          technology. I will forever be a continuos learner, furthering my
          knowledge is a passion. I also have a fondness for assembling
          computers from scratch. My enthusiasm for sports traces back to my
          youth where I played basketball, football, and baseball. In recent
          years, I've cultivated a deep interest in sim racing, a perfect blend
          of my affection for the automotive realm and the tech world. I am a
          founder of one of the largest Sim Racing communities called Box3
          Motorsports. This passion has also segued into a professional avenue;
          I lend my expertise to a company named SimStaff, specializing in the
          setup of simulation rigs for a diverse clientele and also managing
          events, both in-person and virtual.
        </p>
      </div>
    </div>
  );
};

export default About;
