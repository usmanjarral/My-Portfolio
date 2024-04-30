import React, { useCallback, useDeferredValue } from 'react'
import pic from '/dinga.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "PortFolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white' >

                <div className='flex justify-between items-center h-16'>

                    <div className='flex space-x-2'>
                        <div><img src={pic} alt="" className='h-12 w-12 rounded-full' /></div>
                        <div><h1 className='font-semibold text-xl cursor-pointer'>JARRA<span className='text-xl text-yellow-400'>L</span></h1><p className='font-semibold text-sm'>Web Developer</p></div>
                    </div>

                    {/* Desktop Navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(
                                    ({ id, text }) => (
                                        <li key={id} className='hover:scale-110 duration-200 cursor-pointer'>
                                            <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' >{text}</Link>
                                            </li>
                                    )
                                )
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden' >{menu ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>

                </div>


                {/* Mobile Navbar */}
                {menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col justify-center items-center h-screen space-y-4 font-bold'>
                        {
                                navItems.map(
                                    ({ id, text }) => (
                                        <li key={id} className='hover:scale-110 duration-200 cursor-pointer' >
                                            <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass='active' >{text}</Link>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                )}


            </div>
        </>
    )
}

export default Navbar
