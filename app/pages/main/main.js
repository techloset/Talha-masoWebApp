
'use client'
import React, { useState } from 'react'

const main = () => {

    const [kalaRang, setKalaRang] = useState(false)
    const [kalaRang2, setKalaRang2] = useState(false)
    const [kalaRang3, setKalaRang3] = useState(false)
    const [headingText, setHeadingText] = useState('Design is our tool to create inspiring experiences that empower people and communities.');


    const toggleHover = () => {
        setKalaRang(!kalaRang);
        setHeadingText('Image 1 Text');
    };
    const toggleHover2 = () => {
        setKalaRang2(!kalaRang2);
        setHeadingText('Image 2 Text');
    };
    const toggleHover3 = () => {
        setKalaRang3(!kalaRang3);
        setHeadingText('Image 3 Text');
    };

    return (

        <div className='bg-green-500'>
            <div>
                <h2>{headingText}</h2>
            </div>

            <div className='grid'>
                <div className='bg-yellow-500'>
                    g
                    {/* <img src="/images/groupphoto.jpg" width="100" height="100" className={`filter grayscale  ${kalaRang ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover} /> */}
                </div>

                <div className='bg-blue-500'>
                    g
                    {/* <img src="/images/blackman.jpg" width="100" height="100" className={`filter grayscale  ${kalaRang2 ? '  filter grayscale-0' : 'filter grayscale'}  `} onMouseEnter={toggleHover2}
                        onMouseLeave={toggleHover2} /> */}
                </div>

                <div className='bg-purple-500'>
                    g
                    {/* <img src="/images/art.jpg" width="100" height="100" className={`filter grayscale  ${kalaRang3 ? '  filter grayscale-0' : 'filter grayscale'}  `}
                        onMouseEnter={toggleHover3} onMouseLeave={toggleHover3} /> */}
                </div>
            </div>

        </div>
    )
}

export default main