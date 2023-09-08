"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Footer from '../footer/footer'

import Link from 'next/link'
// import footer from '../footer/footer'


const Header = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <div className='   '>

            <div className='fixed w-[100%]  '>

                {
                    navbar ? (
                        <div className='  bg-[#F2CCBA] w-full h-screen md:pb-[30px] lg:flex lg:flex-col '>

                            <div className=' flex justify-around   items-center px-[20px] md:w-[10%] '>

                                {/* mason logo */}
                                <div className='md:hidden '>
                                    <Link href='/' onClick={() => setNavbar(!navbar)}>  <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className=' cursor-pointer w-[70%] ' /> </Link>
                                </div>



                                <div className=' w-[100%] flex justify-end mt-[10px] md:block  p-[10px] ' >
                                    <Image onClick={() => setNavbar(!navbar)} src='/images/cross.svg' width='100' height='100' className='  w-[20px] h-[20px] cursor-pointer  ' />

                                </div>

                            </div>

                            {/* list */}
                            <ul className='  h-full  px-[15px]  md:px-[90px]  '>

                               <div className=' h-[60%]'>
                               <div className='hidden md:block mt-[9px] mb-[12px]' >
                                <Link href='/' onClick={() => setNavbar(!navbar)}>    <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className='cursor-pointer w-auto h-[30px] ' /> </Link>
                                </div>

                                {/* horiozntal line */}
                                <div className='border-t-[1px] border-white  '></div>

                                <div className='sm:flex  md:block '>
                                    <Link href='/pages/projects' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080] '>Projects</li> </Link>

                                    <div className='border-t-[1px] border-white sm:hidden md:block'>  </div>

                                    <Link href='/pages/about' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='  text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' > About</li> </Link>
                                </div>

                                {/* horizontal line */}
                                <div className='border-t-[1px] border-white '></div>

                                <div className='sm:flex md:block'>
                                    <Link href='/pages/culturalhub' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'>  <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' >Culture Hub</li> </Link>

                                    <div className='border-t-[1px] border-white sm:hidden md:block'></div>

                                    <Link href='/pages/journal' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='text-[25.6px]  mt-[9px] mb-[7px] text-[#00000080]  ' >Journal</li> </Link>
                                </div>

                                {/* horizontal line */}
                                <div className='border-t-[1px] border-white '></div>
                               </div>



                                {/* footer */}

                               <div className=' h-[40%]'>
                                <div className='border-t-[1px] border-white '></div>
                                <Footer/>
                               </div>
                            </ul>







                        </div>
                    ) : (
                        <div className='bg-white flex  items-center px-[20px] md:w-[80px] md:px-[20px] '>
                            {/* mason logo */}
                            <div className=' md:hidden  '>
                                <Link href='/' >  <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className='cursor-pointer w-[70%] ' /> </Link>
                            </div>


                            <div className=' w-[100%] flex justify-end mt-[10px] md:w-auto   '  >
                                <Image onClick={() => setNavbar(!navbar)} src='/images/menu.png' width='100' height='100' className='w-[40px] h-[40px] cursor-pointer  ' />

                            </div>

                        </div>

                    )
                }
            </div>

            {/* </div> */}
        </div>
    )
}

export default Header