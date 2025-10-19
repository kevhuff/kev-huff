import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center text-sky-300 bg-transparent p-8 ">
      {/* Heading */}
      <p className="font-bold text-6xl sm:text-5xl mb-2 drop-shadow-md">
        Hello,
      </p>
      <p className="font-bold text-6xl sm:text-5xl mb-8 drop-shadow-md">
        I'm Kevin and I'm a
      </p>

      {/* Type animation with subtle gray background */}
      <div className="bg-slate-700/60 px-8 py-4 rounded-xl shadow-md mb-12 backdrop-blur-sm border border-slate-600/40">
        <TypeAnimation
          sequence={[
            'Software Developer',
            2000,
            'Mechanic',
            1000,
            'Entrepreneur',
            1000,
            'Automotive Technician',
            1000,
            'Student',
            1000,
            'Father',
            1000,
            'Husband',
            1000,
          ]}
          wrapper="span"
          speed={6}
          className="text-4xl sm:text-2xl font-bold text-center text-sky-100 tracking-wide"
          repeat={Infinity}
        />
      </div>

      {/* Paragraph section */}
      <div className="max-w-3xl bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/40">
        <p className="text-lg sm:text-base font-medium text-slate-100 leading-relaxed">
          From an extensive journey in the automotive realm to mastering the intricacies
          of web development, I've always been driven by challenges and innovation.
          A problem-solver with a knack for JavaScript, React, and especially the quirks
          of CSS, I've grown to become a passionate developer who bridges the gap between
          the automotive and tech worlds. Beyond the code, you'll find me delving into
          sim racing or setting up next-gen simulation rigs. Let's connect and drive the
          digital future forward.
        </p>
      </div>
    </div>
  );
};

export default Hero;
