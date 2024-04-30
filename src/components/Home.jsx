import React from 'react'
import pic from '/dinga.avif'
import { ReactTyped } from 'react-typed';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaSquareGithub } from "react-icons/fa6";

function Home() {
    return (
    <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>

                <div className='flex flex-col mt-12 md:flex-row md:mt-24 space-y-8'>
                    <div className='md:w-1/2 order-2 md:mt-20 mt-8 md:order-1'>

                        <span className='font-bold space-y-2'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'> <h1>Hello, I'm a</h1>
                            {/* <span className='font-bold text-red-700'>Developer</span> */}
                            <ReactTyped
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                                className='font-bold text-red-700' />
                            </div>
                            <br />
                            <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
                            <br />

                            <div className='flex justify-between'>
                                <div className='space-y-4'>
                                    <h1 className='font-bold'>Available on</h1>
                                    <ul className='flex space-x-5 text-xl md:text-2xl'>
                                        <li><FaFacebookSquare className=' hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
                                        <li><FaLinkedin className=' hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
                                        <li><IoLogoYoutube className=' hover:text-green-400 cursor-pointer hover:scale-110 duration-200' /></li>
                                        <a href="https://github.com/usmanjarral" target="_blank" ><li><FaSquareGithub className=' hover:text-green-400 cursor-pointer hover:scale-110 duration-200 ' /></li></a>
                                    </ul>
                                </div>

                                <div className='space-y-4'>
                                    <h1 className='font-bold' >Currently working on</h1>
                                    <ul className='flex space-x-5 text-xl md:text-3xl'>
                                        <li><SiMongodb className='rounded-full hover:text-green-400 cursor-pointer hover:scale-110 duration-200 border-[2px]' /></li>
                                        <li><SiExpress className='rounded-full hover:text-green-400 cursor-pointer hover:scale-110 duration-200 border-[2px]' /></li>
                                        <li><FaReact className='rounded-full hover:text-green-400 cursor-pointer hover:scale-110 duration-200 border-[2px]' /></li>
                                        <li><DiJavascript1 className='rounded-full hover:text-green-400 cursor-pointer hover:scale-110 duration-200 border-[2px]' /></li>
                                    </ul>
                                </div>


                            </div>

                        </div>

                        <div className='md:w-1/2 md:ml-10 md:mt-10 xl:ml-48 xl:mt-20 mt-8 order-1 md:order-2'>
                            <img src={pic} alt="" className='rounded-full md:h-[450px] md:w-[450px]' />
                            </div>

                    </div>

                </div>
                <hr />
            </>
            )
}

            export default Home
