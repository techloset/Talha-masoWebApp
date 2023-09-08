
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './MyComponent.css'


const main = () => {

    const [kalaRang1, setKalaRang1] = useState(false)
    const [kalaRang2, setKalaRang2] = useState(false)
    const [kalaRang3, setKalaRang3] = useState(false)
    const [kalaRang4, setKalaRang4] = useState(false)
    const [kalaRang5, setKalaRang5] = useState(false)
    const [kalaRang6, setKalaRang6] = useState(false)
    const [headingText, setHeadingText] = useState('');
    const [paraText, setparaText] = useState('Design is our tool to create inspiring experiences that empower people and communities.');


    const toggleHover1 = () => {
        setKalaRang1(!kalaRang1);
        setHeadingText('2033: An Optimistic Future');
        setparaText('A place to experience everyday life in an optimistic future');
    };
    const toggleHover2 = () => {
        setKalaRang2(!kalaRang2);
        setHeadingText('Mobile Mercantile');
        setparaText('Reimagining the business of retail');
    };
    const toggleHover3 = () => {
        setKalaRang3(!kalaRang3);
        setHeadingText('Full Moon Reflected on the Ocean');
        setparaText('Connecting people through an powerful moment');
    };
    const toggleHover4 = () => {
        setKalaRang4(!kalaRang4);
        setHeadingText('The Studio');
        setparaText('A collective mind of diverse individuals');
    };
    const toggleHover5 = () => {
        setKalaRang5(!kalaRang5);
        setHeadingText('Daniels Regent Park');
        setparaText('Community driven design');
    };
    const toggleHover6 = () => {
        setKalaRang6(!kalaRang6);
        setHeadingText('Refuge in the Sky');
        setparaText('Balancing familiarity with novelty');
    };
    const onleave = () => {
        setHeadingText(" Design is our tool to create inspiring experiences that empower people and communities. ");
        setparaText('')
    }

    const onmouseLeavee = () => {

        toggleHover1(),
            onleave()
    }
    const onmouseLeavee2 = () => {

        toggleHover2(),
            onleave()
    }
    const onmouseLeavee3 = () => {

        toggleHover3(),
            onleave()
    }
    const onmouseLeavee4 = () => {

        toggleHover4(),
            onleave()
    }
    const onmouseLeavee5 = () => {

        toggleHover5(),
            onleave()
    }
    const onmouseLeavee6 = () => {

        toggleHover6(),
            onleave()
    }




    return (

        <div className={` ${kalaRang1 || kalaRang2 || kalaRang3 || kalaRang4 || kalaRang5 || kalaRang6 ? 'backgroundColorChange' : ''}   mt-[10px] md:mt-[5px] px-[15px]   absolute top-10 -z-10 w-[100%] h-[88vh] md:top-0 md:p-[7.5px]  md:h-[98vh] overflow-y-hidden  `}>

            <div className='md:flex md:justify-evenly h-full md:h-full '>


                {/* text content */}
                <div className=' mb-[10px] h-[70px] md:h-[30%] md:m-auto   md:w-[80%]  bg-orange-500    md:ml-[50px] ' >

                    <Image src='/images/mason.svg' alt="mason logo" height='100' width='100' className='cursor-pointer w-[50%] hidden md:block md:ml-[25px] md:mt-[7px] ' />

                    <div className='md:m-auto pt-[5px] '>
                    <h2 className=' text-[#0A0A0A]    md:text-[24px] md:mt-[10px]   md:ml-[25px]'>{headingText}</h2>
                    <p className='text-[#505050] md:text-[20px]  md:my-auto md:mt-[5px] md:ml-[25px] md:w-[80%]'>{paraText}</p>
                    </div>
                </div>

                {/* images div */}
                <div className=' h-full   md:w-[80%] md:h-full  '>
                    <div className='grid grid-cols-12 gap-1 h-[40%]  md:h-[50%]  '>

                        <div className=' grid col-span-8  '>
                            <div className={` art bg-cover bg-center   ${kalaRang1 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                                onMouseEnter={toggleHover1} onMouseLeave={onmouseLeavee} >

                            </div>
                        </div>

                        <div className=' col-span-4 grid-flow-row  '>
                            <div className={`  auction h-[48%] md:h-[50%] bg-cover bg-center mb-[5px] sm:mb-[6px]    ${kalaRang2 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover2}
                                onMouseLeave={onmouseLeavee2} >
                            </div>

                            <div className={` moon h-[50%] md:h-[50%]  bg-cover bg-center    ${kalaRang3 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover3}
                                onMouseLeave={onmouseLeavee3}>

                            </div>

                        </div>

                    </div>

                    <div className='grid grid-cols-12 gap-1 h-[40%]  mt-[10px] md:h-[50%]  '>



                        <div className=' col-span-4 grid-flow-row '>

                            <div className={`  group h-[48%] md:h-[50%] bg-cover bg-center mb-[5px] sm:mb-[6px]     ${kalaRang5 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover5}
                                onMouseLeave={onmouseLeavee5} >
                            </div>
                            <div className={` blackman h-[50%] md:h-[50%]  bg-cover bg-center    ${kalaRang6 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover6}
                                onMouseLeave={onmouseLeavee6}>
                            </div>

                        </div>

                        <div className=' grid col-span-8 '>
                            <div className={` tree  bg-cover bg-center    ${kalaRang4 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                                onMouseEnter={toggleHover4} onMouseLeave={onmouseLeavee4} > </div>
                        </div>
                    </div>

                </div>

            </div>






        </div >
    )
}

export default main