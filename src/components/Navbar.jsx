import React from 'react'
// import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaGuitar, FaMusic, FaInfoCircle } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom'; // Add this import

export default function Navbar() {
    return (
        <div className='m-0 p-0'>
            {/* Main NavBar */}
            <div id='MainNavbar' className='h-[70px] bg-black flex items-center justify-between text-white  border-b-2 border-yellow-500 px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28'>

                {/* Left Navbar */}
                <div id='LeftNavbar'>

                    {/* Image */}
                    <div id='LeftNavbar' className=' '>
                        {/* <img src="/logo.png" alt="" className='' /> */}
                        <h1 className='text-xl font-bold '>LoGo-HeRe</h1>
                    </div>
                </div>

                {/* Right Navbar */}
                <div id='RightNavbar'>
                    {/* For mobile only */}

                    <div className='sm:hidden'>
                        <GiHamburgerMenu size={28} color="#fff" /> {/* Hamburger menu icon */}
                    </div>

                    {/* For Big Devices */}
                    <div className='hidden sm:block sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>
                        <ul className='flex  font-medium sm:space-x-5 md:space-x-8 lg:space-x-9 xl:space-x-10 2xl:space-x-11'>
                            <li className=' cursor-pointer flex items-center '>
                                <FaHome className='mr-2 text-yellow-500 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-4' />
                                <Link to="/">
                                    <span className='hover:text-yellow-500 transition duration-300'>Home</span>
                                </Link>
                            </li>
                            <li className=' cursor-pointer flex items-center '>
                                <FaGuitar className='mr-2 text-yellow-500 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-4' />
                                <Link to="/instruments">
                                    <span className='hover:text-yellow-500 transition duration-300'>Instruments</span>
                                </Link>
                            </li>
                            <li className=' cursor-pointer flex items-center'>
                                <FaMusic className='mr-2 text-yellow-500 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-4' />
                                <span className='hover:text-yellow-500 transition duration-300'>Lyrics</span>
                            </li>
                            <li className=' cursor-pointer flex items-center '>
                                <FaInfoCircle className='mr-2 text-yellow-500 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-4' />
                                <span className='hover:text-yellow-500 transition duration-300'>Learn More</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
