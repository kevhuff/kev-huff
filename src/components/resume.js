
import React from 'react';
import resumePreview from './assets/respreview.png';
import resumePDF from './assets/Kevin-Huffman.pdf';
const Resume = () => {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-10">
            <h2 className="text-5xl font-bold mb-6 text-indigo-200">My Resume</h2>
            <img src={resumePreview} alt="Resume Preview" className="w-[40%] h-[40%] mx-auto mb-4 rounded" />
            <div className="text-center">
                <a href={resumePDF} download="Your_Name_Resume.pdf" className="mt-4 bg-indigo-600 px-8 py-2 text-white rounded-full hover:bg-indigo-700 transition ease-in-out duration-150">
                    Download as PDF
                </a>
            </div>
        </div>
    );
};
    export default Resume;