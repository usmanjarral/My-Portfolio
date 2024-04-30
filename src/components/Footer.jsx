import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>

        <div className='flex flex-col items-center'>

        <div className='flex justify-center'>
          <div className='space-y-4'>
            
            <ul className='flex space-x-5 text-xl md:text-2xl'>
              <li><FaFacebookSquare className='hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
              <li><FaLinkedin className='hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
              <li><IoLogoYoutube className='hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
              <li>
                <a href="https://github.com/usmanjarral" target="_blank" rel="noopener noreferrer">
                  <FaSquareGithub className='hover:text-green-400 cursor-pointer hover:scale-110 duration-200' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='my-10 divide-gray-700'><hr /></div>

<div><p>© 2024 Your Company. All rights reserved.</p></div>
<div><p>Supportive Partner</p></div>
        </div>

      </footer>
    );
  };
  
  export default Footer;
