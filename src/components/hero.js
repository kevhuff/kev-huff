import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-start items-center pt-10'>
            <p className='font-bold p-10 ml-5 text-indigo-200 text-6xl xs:mb-10'>
              Hello I'm Kevin and I'm a 
            </p>
       
            <div className='text-indigo-200  bg-[#3b3b3bae] h-2/4  overflow-x-hidden pt-60 sm:pt-0 flex flex-col justify-center rounded-xl'>
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
                    speed={10}
                    style={{display: '-webkit-inline-block' }}
                    // adjust font size for smaller screens
                    className='text-4xl sm:text-xl sm:pt-96 xs:text-xs font-bold text-center text-indigo-200'

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
