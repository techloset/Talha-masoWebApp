
'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const main = () => {

    const [kalaRang1, setKalaRang1] = useState(false)
    const [kalaRang2, setKalaRang2] = useState(false)
    const [kalaRang3, setKalaRang3] = useState(false)
    const [kalaRang4, setKalaRang4] = useState(false)
    const [kalaRang5, setKalaRang5] = useState(false)
    const [kalaRang6, setKalaRang6] = useState(false)
    const [headingText, setHeadingText] = useState('Design is our tool to create inspiring experiences that empower people and communities.');
    const [paraText, setparaText] = useState('');


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
    const onleave =()=>{
        setHeadingText(" Design is our tool to create inspiring experiences that empower people and communities. ");
        setparaText('')
    }

    const onmouseLeavee = () =>{
       
        toggleHover1(),
        onleave() 
    }
    const onmouseLeavee2 = () =>{
       
        toggleHover2(),
        onleave() 
    }
    const onmouseLeavee3 = () =>{
       
        toggleHover3(),
        onleave() 
    }
    const onmouseLeavee4 = () =>{
       
        toggleHover4(),
        onleave() 
    }
    const onmouseLeavee5 = () =>{
       
        toggleHover5(),
        onleave() 
    }
    const onmouseLeavee6 = () =>{
       
        toggleHover6(),
        onleave() 
    }

    return (

        <div className='bg-green-500 mt-[20px] px-[15px]   absolute top-10 -z-10 w-[100%] '>

            <div className='bg-red-500 mb-[10px] h-[70px]  ' >
                <h2 className='bg-orange-500'>{headingText}</h2>
                <p className='bg-cyan-500'>{paraText}</p>
            </div>

            <div className='grid grid-cols-12 gap-2'>

                <div className='bg-yellow-500 grid col-span-8'>
                    <Image src="/images/art.jpg" width="100" height="100" className={` object-fit filter grayscale   ${kalaRang1 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                            onMouseEnter={toggleHover1} onMouseLeave={onmouseLeavee} />
                </div>

                <div className='bg-blue-500 col-span-4 grid-flow-row '>
                   <div className='bg-cyan-500'>
                   <Image src="/images/auction.jpg" width="100" height="100" className={` filter grayscale  ${kalaRang2 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover2}
                        onMouseLeave={onmouseLeavee2} />
                   </div>

                   <div className='bg-orange-500 mt-[3px]'>
                   <Image src="/images/moon.jpg" width="100" height="100" className={`  filter grayscale  ${kalaRang3 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover3}
                        onMouseLeave={onmouseLeavee3} />
                   </div>
                </div>
                
            </div>

            <div className='grid grid-cols-12 gap-2 mt-[10px]'>

                    <div className='bg-blue-500 col-span-4 grid-flow-row '>
                       <div className='bg-cyan-500'>
                       <Image src="/images/groupphoto.jpg" width="100" height="100" className={` filter grayscale  ${kalaRang4 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                            onMouseEnter={toggleHover4} onMouseLeave={onmouseLeavee4} />
                       </div>
    
                       <div className='bg-orange-500 mt-[10px]'>
                       <Image src="/images/blackman.jpg" width="100" height="100" className={`w-full h-[100%] filter grayscale  ${kalaRang5 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                            onMouseEnter={toggleHover5} onMouseLeave={onmouseLeavee5} />
                       </div>
                    </div>

                <div className='bg-pink-500 grid col-span-8'>
                    
                    <Image src="/images/tree.jpg" width="100" height="100" className= {`w-[100%] h-[151.79px]  filter grayscale  ${kalaRang6 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover6}
                        onMouseLeave={onmouseLeavee6} />
                </div>

                
            </div>
            
            <div />

        </div>
    )
}

export default main