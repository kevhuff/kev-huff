import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='max-w-[800px] w-full h-screen  text-center flex flex-col justify-start items-center '>
            <p className='font-bold p-10 text-indigo-200 text-6xl'>
              Hello I'm Kevin and I'm a 
            </p>
       
            <div className='text-indigo-200  bg-[#3b3b3bae] h-2/4 flex flex-col justify-center items-center rounded-xl'>
                <TypeAnimation
                    sequence={[
                        'Software developer',
                        2000,
                        'Mechanic',
                        1000,
                        'Automotive Technician ',
                        1000,
                        'Student',
                        1000,
                        'Father',
                        1000,
                        'Husband',
                        1000,
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '4rem', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <p className='text-xl font-bold text-white m-4'> {/* Reduced mt-6 to mt-2 */}
                From an extensive journey in the automotive realm to mastering the intricacies of web development, I've always been driven by challenges and innovation. A problem-solver with a knack for JavaScript, React, and especially the quirks of CSS, I've grown to become a passionate developer who bridges the gap between the automotive and tech worlds. Beyond the code, you'll find me delving into sim racing or setting up the next-gen simulation rigs. Let's connect and drive the digital future forward.
                </p>
              
            </div>
        </div>
    );
};

export default Hero;
