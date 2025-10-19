import React from "react";
import ProfilePic from "./assets/pfp.jpg";
import "../index.css";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white transition transform hover:text-indigo-300 hover:scale-150 duration-1000 ease-in-out">
        About Me
      </h2>

      <div className="flex flex-col items-center">
        <img
          src={ProfilePic}
          alt="Kevin's Portrait"
          className="w-[45%] sm:w-[30%] lg:w-[40%] h-auto p-4 sm:p-10 lg:p-16 rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
        />

        {/* Wider text container */}
        <div className="bg-[#3b3b3bae] mt-4 w-[95%] sm:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] rounded-b-2xl p-6 lg:p-10 h-auto overflow-visible">
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200 hover:text-white leading-relaxed">
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
            <br /><br />
            Outside of my coding ventures, I am a fervent aficionado of all things
            technology. I will forever be a continuous learner, furthering my
            knowledge is a passion. I also have a fondness for assembling
            computers from scratch. My enthusiasm for sports traces back to my
            youth where I played basketball, football, and baseball. In recent
            years, I've cultivated a deep interest in sim racing — a perfect blend
            of my affection for the automotive realm and the tech world. I am a
            founder of one of the largest Sim Racing communities called Box³
            Motorsports. This passion has also segued into a professional avenue;
            I lend my expertise to a company named SimStaff, specializing in the
            setup of simulation rigs for a diverse clientele and managing both
            in-person and virtual events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
