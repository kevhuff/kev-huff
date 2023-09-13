import React,{useState}   from 'react';  
import {HiMenuAlt3, HiMinus} from 'react-icons/hi'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
       <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-indigo-300 text-center text-3xl font-bold'>React.</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Socials</li>
            <li className='p-4'>Resume</li>
        </ul>
        <div onClick={handleNav}>
            {!nav ? <HiMenuAlt3 size ={30} /> : <HiMinus size ={30} onClick={handleNav} />}
          
        </div>
           <div className={!nav ? 'fixed left-0 top-0 w0[60%] h-full border-r-gray-900 bg-[#00300] ease-in-out duration-700' :'fixed left-[-100%]' }>
            <ul className='pt-24 uppercase '>
           <li className='p-4 border-b border-s-gray-500'>Home</li>
           <li className='p-4 border-b border-s-gray-500'>About</li>
           <li className='p-4 border-b border-s-gray-500'>Contact</li>
           <li className='p-4 border-b border-s-gray-500'>Projects</li>
           <li className='p-4 border-b border-s-gray-500'>Socials</li>
           <li className='p-4 border-b border-s-gray-500'>Resume</li>
            </ul>
            </div> 

         </div>
    )
}

export default NavBar;