import React from 'react';

const SocialCard = ({ Icon, label, href }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded hover:bg-gray-200 hover:shadow-lg transition-all duration-800"
        >
            <Icon size={50} className="m-10" /> {/* Adjusted icon size and margin */}
            <h3 className="text-5xl font-bold">{label}</h3>
        </a>
    );
};

export default SocialCard;
