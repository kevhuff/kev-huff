import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center pt-11 '>
            <div className='max-w-[800px] w-2/4  mx-auto text-center flex flex-col justify-start items-center pt-20 bg-[#3b3b3b88] rounded-lg shadow-lg'>
                <p className='font-bold p-5 ml-5 text-white text-5xl'>
                    Contact Me:
                </p>

                <form className="w-2/4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 text-white text-sm">Name:</label>
                        <input type="text" id="name" className="p-2 w-full border-b-2 border-white bg-transparent rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 text-white text-sm">Email:</label>
                        <input type="email" id="email" className="p-2 w-full border-b-2 border-white bg-transparent rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 text-white text-sm">Message:</label>
                        <textarea id="message" rows="4" className="p-2 w-full border-2 border-white bg-transparent rounded focus:outline-none focus:border-blue-500" required></textarea>
                    </div>
                    <button className='transition-transform transform hover:scale-105 bg-blue-500 w-[180px] rounded-md font-medium my-4 mx-auto py-2 text-white hover:bg-blue-700'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
