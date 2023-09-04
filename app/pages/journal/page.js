'use client'


import React, { useState } from "react";
import { data } from './data'

// import ReactReadMoreReadLess from "react-read-more-read-less";



const page = () => {

    // const [isExpanded, setIsExpanded] = useState(false);

    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };


    return (

        <div className='bg-green-500 absolute -z-10 top-12 px-[20px]   '>

            <div className='text-[24px]  bg-yellow-500'>
                Journal
            </div>
            {
                data.map((item) => (
                    <div className=' bg-orange-500 '>

                        <img src={item.imageuurl} className=' mx-auto mt-[10px] ' />

                        <p className='text-[18px] mt-[10px]  '>{item.heading}</p>
                        <p className='text-[12.8px] mt-[10px] text-[#6E6E6E]  '>{item.para1}</p>
                        <p className='text-[12.8px] mt-[0px] text-[#6E6E6E] '>{item.Location}</p>

                        {/* <ReactReadMoreReadLess
                            charLimit={0}
                            readMoreText={"Read more ↓ "}   
                            readLessText={"Read less ↑"}
                            readMoreClassName="read-more"
                            readLessClassName="read-less"
                            onReadMoreClicked={() => setIsExpanded(true)}
                            onReadLessClicked={() => setIsExpanded(false)}
                            expanded={isExpanded}
                        >
                           { `${item.para2}  ${item.para3} ${item.para4} ${item.para5} ` } 
                        </ReactReadMoreReadLess> */}




                        {
                            isShowMore && (
                                <div>
                                    <p>{item.para1}</p>
                                    <p>{item.para2}</p>
                                    <p>{item.para3}</p>
                                    <p>{item.para4}</p>
                                    <p>{item.para5}</p>
                                    <p>{item.para6}</p>
                                    <p>{item.para7}</p>
                                    <p>{item.para8}</p>
                                </div>

                            )}

                        <button onClick={toggleReadMoreLess}>{isShowMore ? "Read Less ↑ " : "Read More ↓"} </button>
                    </div>
                ))
            }

        </div>
    )
}

export default page