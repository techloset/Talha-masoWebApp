"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import Link from 'next/link'

const header = () => {

    const [navbar, setNavbar] = useState(false)
    return (
        <div className='   '>

            <div className='fixed w-[100%] '>

                {
                    navbar ? (
                        <div className='  bg-[#F2CCBA] w-full h-screen  '>

                            <div className=' flex justify-around   items-center px-[20px] '>
                                {/* mason logo */}
                                <div className=''>
                                    <Link href='/' onClick={() => setNavbar(!navbar)}>  <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className=' cursor-pointer w-[70%] ' /> </Link>
                                </div>

                                <div className=' w-[100%] flex justify-end mt-[10px]  p-[10px]' >
                                    <Image onClick={() => setNavbar(!navbar)} src='/images/cross.svg' width='100' height='100' className='  w-[20px] h-[20px] cursor-pointer  ' />

                                </div>


                                {/* <div className=' w-[50%] flex justify-end mt-[10px] p-[10px] ' >
                                    <Image onClick={() => setNavbar(!navbar)} src='/images/cross.svg' width='100' height='100' className='  w-[20px] h-[20px] cursor-pointer  ' />
                                </div> */}

                            </div>

                            <ul className='   px-[15px] '>

                                {/* horiozntal line */}
                                <div className='border-t-[1px] border-white '></div>

                                <div className='sm:flex   '>
                                    <Link href='/pages/projects' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080] '>Projects</li> </Link>

                                    <div className='border-t-[1px] border-white sm:hidden'>  </div>

                                    <Link href='/pages/about' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='  text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' > About</li> </Link>
                                </div>

                                {/* horizontal line */}
                                <div className='border-t-[1px] border-white '></div>

                                <div className='sm:flex '>
                                    <Link href='/pages/culturalhub' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'>  <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' >Culture Hub</li> </Link>

                                    <div className='border-t-[1px] border-white sm:hidden'></div>

                                    <Link href='/pages/journal' onClick={() => setNavbar(!navbar)} className=' sm:w-[50%]'> <li className='text-[25.6px]  mt-[9px] mb-[7px] text-[#00000080]  ' >Journal</li> </Link>
                                </div>

                                {/* horizontal line */}
                                <div className='border-t-[1px] border-white '></div>



                                {/* footer */}

                                <div className=' text-[12.8px] pt-[25px]   sm:mt-[120px]'>

                                    <div className='border-t-[1px] border-white  mt-[50px] sm:w-[45%] S'></div>

                                    <div className='flex justify-start   mt-[20px] '>

                                        <div className='sm:absolute sm:right-[15px] sm:bottom-[135px] sm:w-[45%] S w-[50%] text-[#000000]'>
                                            <p className=''>+1 (416) 761-9736 </p>
                                            <p >Follow Us </p>
                                            <p>Send us an Email </p>
                                        </div>

                                        <div className='sm:w-[45%] sm:absolute sm:left-3 sm:bottom-[85px]S  text-[#000000]'>
                                            <p className=''>91 Pelham Avenue</p>
                                            <p >Toronto, Canada</p>
                                            <p>M6N 1A5</p>
                                        </div>

                                    </div>

                                    <div className='border-t-[1px] border-white mt-[10px] sm:w-[45%] sm:absolute sm:right-[17px]'></div>

                                    <div className='flex gap-3 mt-[10px] sm:absolute sm:right-[15px] sm:bottom-[100px] sm:w-[45%] S'>
                                        <p>工作室</p>
                                        <p>/</p>
                                        <p>微信</p>
                                        <p>/</p>
                                        <p>电子邮件</p>
                                    </div>

                                </div>
                            </ul>







                        </div>
                    ) : (
                        <div className='bg-white flex  items-center px-[20px]'>
                            {/* mason logo */}
                            <div className='   '>
                                <Link href='/' >  <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className='cursor-pointer w-[70%] ' /> </Link>
                            </div>


                            <div className=' w-[100%] flex justify-end mt-[10px] ' >
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

export default header