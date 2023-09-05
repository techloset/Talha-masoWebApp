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

        <div className=' absolute -z-10 top-12 px-[20px]   '>

            <div className='text-[24px]  '>
                Journal
            </div>
            {
                data.map((item) => (
                    <div className='   '>

                        <img src={item.imageuurl} className=' mx-auto mt-[10px] ' />

                        <p className='text-[18px] mt-[10px]  '>{item.heading}</p>

                        <div className=" text-[12.8px] text-[#6E6E6E] mb-[18px] ">
                            <p className=' mt-[10px]  '>{item.para1}</p>
                            <p className='  '>{item.Location}</p>
                        </div>

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
                                <div className="text-[12.8px] text-[#6E6E6E]">
                                    <p>{item.para2}</p>
                                    <p className=" py-[18px]">{item.para3}</p>
                                    <p className=" py-[18px]">{item.para4}</p>
                                    <p className=" py-[18px]">{item.para5}</p>

                                    <div className="py-[18px]">
                                        <span>{item.para6}</span>
                                        <span className="">{item.para7}</span>
                                        <span>{item.para8}</span>
                                    </div>

                                    <p className="py-[18px] ">{item.para9}</p>
                                    <p className="py-[18px]">{item.para10}</p>
                                    <p className="py-[18px] text-[#000000] ">{item.para11}</p>

                                    <div className="py-[18px]">
                                        <span className="text-[#000000] ">{item.para12}</span>
                                        <span>{item.para13}</span>
                                    </div>

                                    <div className="py-[18px]">
                                        <span className="text-[#000000] ">{item.para14}</span>
                                        <span>{item.para15}</span>
                                        <span>{item.para16}</span>
                                    </div>

                                    <div className="py-[18px]">
                                        <span className="text-[#000000] ">{item.para17}</span>
                                        <span>{item.para18}</span>
                                    </div>

                                    <div className="py-[18px]">
                                        <span className="text-[#000000] ">{item.para19}</span>
                                        <span>{item.para20}</span>
                                        <span>{item.para21}</span>
                                        <span className="text-[#000000] ">{item.para22}</span>
                                    </div>

                                </div>

                            )}

                        <button onClick={toggleReadMoreLess}>{isShowMore ? "Close ↑ " : "Read More ↓"} </button>

                        <div className='my-[20px] border-b-[1px] border-gray-300 '> </div>

                      


                    </div>


                ))
            }

        </div>
    )
}

export default page