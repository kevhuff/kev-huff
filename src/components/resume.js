import React, { useState } from 'react';

// previews (from src/components/assets/)
import mechPreview from './assets/resume_prev_mech.png';
import atsPreview from './assets/res_ats.png';

// pdfs (from src/components/assets/)
import mechPdf from './assets/Kevin_Huffman_Mechanic_Resume.pdf';
import atsPdf from './assets/Kevin_Huffman_Resume_ATS-1.pdf';

const Resume = () => {
  const [selected, setSelected] = useState('mechanic'); // 'mechanic' | 'ats'

  const preview = selected === 'mechanic' ? mechPreview : atsPreview;
  const pdf = selected === 'mechanic' ? mechPdf : atsPdf;
  const downloadName =
    selected === 'mechanic'
      ? 'Kevin_Huffman_Mechanic_Resume.pdf'
      : 'Kevin_Huffman_Resume_ATS.pdf';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-10">
      <h2 className="text-5xl font-bold mb-6 text-indigo-200">My Resume</h2>

      <div className="mb-4 flex gap-3">
        <button
          onClick={() => setSelected('mechanic')}
          className={`px-4 py-2 rounded-full transition ${
            selected === 'mechanic'
              ? 'bg-indigo-600 text-white'
              : 'bg-white/10 text-indigo-100 hover:bg-white/20'
          }`}
        >
          Mechanic
        </button>
        <button
          onClick={() => setSelected('Dev')}
          className={`px-4 py-2 rounded-full transition ${
            selected === 'ats'
              ? 'bg-indigo-600 text-white'
              : 'bg-white/10 text-indigo-100 hover:bg-white/20'
          }`}
        >
         DEV
        </button>
      </div>

      <img
        src={preview}
        alt={`${selected.toUpperCase()} Resume Preview`}
        className="w-[90%] md:w-[60%] lg:w-[40%] h-auto mx-auto mb-4 rounded shadow-2xl"
      />

      <div className="text-center flex gap-3">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-white/10 px-6 py-2 rounded-full text-indigo-100 hover:bg-white/20 transition"
        >
          View PDF
        </a>
        <a
          href={pdf}
          download={downloadName}
          className="mt-4 inline-block bg-indigo-600 px-8 py-2 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
