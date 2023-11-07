import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Resume from '../assets/projects/My_Resume_Vishal_YV.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleTouch = () => setNav(!nav);

  const download_Resume = () => {
    const link = document.createElement('a');
    link.href = Resume; // Use the imported Resume file
    link.download = 'My_Resume_Vishal_YV.pdf'; // Set the filename for the downloaded file
    link.click();
  };
  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='text-gray-300 font-serif text-3xl'>VISHAL YV</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick}  className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} onTouchStart={handleTouch} onTouchEnd={handleTouch} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} onTouchStart={handleTouch} onTouchEnd={handleTouch} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} onTouchStart={handleTouch} onTouchEnd={handleTouch} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} onTouchStart={handleTouch} onTouchEnd={handleTouch} to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} onTouchStart={handleTouch} onTouchEnd={handleTouch} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
        <li className='py-6 mt-16 text-4xl'>
          <h1>Follow On</h1>
          <div className='flex mt-5'>
            <a className='flex justify-center items-center w-full text-gray-300' href='https://www.linkedin.com/in/vishal-yv-2bb256209/'>
              <FaLinkedin size={30} />
            </a>
            <a className='flex justify-center items-center w-full text-gray-300' href='https://github.com/vishalyv252'>
              <FaGithub size={30} />
            </a>
            <Link to='contact' smooth={true} duration={500} className='flex justify-center items-center w-full text-gray-300'>
              <HiOutlineMail size={30} />
            </Link>
            <a className='flex justify-center items-center w-full text-gray-300' href='../assets/projects/My_Resume_Vishal_YV.pdf' onClick={download_Resume}>
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/vishal-yv-2bb256209/'>Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/vishalyv252'>Github <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /></Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='../assets/projects/My_Resume_Vishal_YV.pdf' onClick={download_Resume}>Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
