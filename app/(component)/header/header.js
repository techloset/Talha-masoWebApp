"use client"

import React, { useState } from 'react'
import Image from 'next/image'


const header = () => {

    const [navbar, setNavbar] = useState(false)
    return (
        <div className=' font-FREE '>
            {/* <div className=' flex justify-center items-center gap-24'> */}

                {/* <div className=''>
                    <p className=' font-FREE text-[25px]'>mason studio</p>
                </div> */}

                <div className='cursor-pointer'>
                   
                {/* {
                    navbar ? (
                        // <Image onClick={() => setNavbar(!navbar)} src='/images/cross.png' width='100' height='100' className='w-[40px] h-[40px] '  /> 
                        <p className='w-[40px] h-[40px] items-center' onClick={() => setNavbar(!navbar)}>X</p>
                        ):(
                           <Image onClick={() => setNavbar(!navbar)} src='/images/menu.png' width='100' height='100' className='w-[40px] h-[40px] ' />
                           )
                        } */}

                    {
                        navbar ? (
                            <div className='absolute left-0 top-0 bg-[#F2CCBA] w-full h-full '>
                            
                            <div className='flex   items-center px-[20px] '>
                                <div className=' w-[50%] flex justify-start text-[18px] mt-[10px]  ' >mason Studio</div>
                                <div className=' w-[50%] flex justify-end mt-[10px] ' > 
                                <Image onClick={() => setNavbar(!navbar)} src='/images/cross.png' width='100' height='100' className='w-[40px] h-[40px]  ' />
                                </div>
                            </div>

                                <ul className='   px-[15px] '>

                                    <div className='border-t-[1.5px] border-gray '></div>
                                    <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080] '>Projects</li>

                                    <div className='border-t-[1.5px] border-gray '></div>

                                    <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' > About</li>

                                    <div className='border-t-[1.5px] border-gray '></div>

                                    <li className='text-[25.6px] mt-[9px] mb-[7px] text-[#00000080]' >Culture Hub</li>

                                    <div className='border-t-[1.5px] border-gray '></div>

                                    <li className='text-[25.6px]  mt-[9px] mb-[7px] text-[#00000080]  ' >Journal</li>
                                    <div className='border-t-[1.5px] border-gray '></div>


                                    <div className=' text-[12.8px] pt-[25px]    '>

                                        <div className='border-t-[1.5px] border-gray  mt-[50px]  '></div>

                                        <div className='flex justify-start  mt-[20px] '>

                                            <div className=' w-[50%] text-[#000000]'>
                                                <p className=''>+1 (416) 761-9736 </p>
                                                <p >Follow Us </p>
                                                <p>Send us an Email </p>
                                            </div>
                                            
                                            <div className='  text-[#000000]'>
                                                <p className=''>91 Pelham Avenue</p>
                                                <p >Toronto, Canada</p>
                                                <p>M6N 1A5</p>
                                            </div>

                                        </div>

                                        <div className='border-t-[1.5px] border-gray mt-[10px]'></div>

                                        <div className='flex gap-3 mt-[10px]'>
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
                            <div className='flex  items-center px-[20px] '>
                                <div className=' w-[50%] flex justify-start text-[18px] mt-[10px]  ' >mason Studio</div>
                                <div className=' w-[50%] flex justify-end mt-[10px] ' > 
                                <Image onClick={() => setNavbar(!navbar)} src='/images/menu.png' width='100' height='100' className='w-[40px] h-[40px]  ' />
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