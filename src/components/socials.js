import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SocialCard from './SocialCard';

const SocialMediaSection = () => {
    const socialLinks = [
        { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/kevhuff' },
        { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevin-huffman-8b46a9a0/' },
        { Icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/huffman_ic' },
        { Icon: FaDiscord, label: 'Discord', href: 'https://www.discordapp.com/users/532383578894368768' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % socialLinks.length);
    };

    const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + socialLinks.length) % socialLinks.length);
    };

    return (
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center p-20'>
            <h2 className="text-2xl text-white mb-10">Connect with me on Social Media</h2>
            <div className="flex items-center space-x-8 bg-[#3b3b3b88] py-10 px-20 rounded-md">
                <button onClick={goPrevious} className="p-4 rounded hover:bg-gray-200">
                    <FaArrowLeft size={40} color="white" />
                </button>
                
                <SocialCard {...socialLinks[currentIndex]} />

                <button onClick={goNext} className="p-4 rounded hover:bg-gray-200">
                    <FaArrowRight size={40} color="white" />
                </button>
            </div>
        </div>
    );
};

export default SocialMediaSection;
