import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full py-4 mt-8">
            <div className="max-w-[1240px] mx-auto px-4 text-center">
                <p className="mb-2">© 2023 by Kevin Huffman</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/kevhuff" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-huffman-8b46a9a0/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://twitter.com/huffman_ic" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <FaTwitter />
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.discordapp.com/users/532383578894368768" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <FaDiscord />
                        <span>Discord</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
