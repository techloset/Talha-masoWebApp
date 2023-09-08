'use client'


import React, { useState } from "react";
import { data } from './data'
import Footer from "@/app/(component)/footer/footer";

// import ReactReadMoreReadLess from "react-read-more-read-less";



const Page = () => {

    // const [isExpanded, setIsExpanded] = useState(false);

    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };


    return (

        <div className=' absolute -z-10 top-12 px-[20px] pb-[45px]  md:top-0 md:px-[90px] md:pt-[90px] lg:px-[105px]   '>

            <div className='text-[24px] md:text-[44px] md:h-[82px] md:pb-[30px] '>
                Journal
            </div>
            <div className="hidden md:block lg:hidden md:text-[24px]   ">
                Sharing our latest news, <br /> collaborations and events.
            </div>
            <div className="hidden lg:block md:text-[24px]  ">
              <p className=" w-[65%]">  Sharing our latest news,  collaborations and events.</p>
            </div>
            
            <div className='hidden md:block md:my-[30px] lg:mt-[30px] md:border-b-[1px] md:border-gray-300 '> </div>


            <div className="  lg:grid lg:grid-cols-2 lg:gap-10 lg:h-[40%]">
                <div className='hidden lg:block lg:relative lg:top-[580px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:top-[580px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:top-[1180px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:top-[1180px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                {
                    data.map((item,index) => (
                        <div key={index} className=''>
                            <div className=" md:w-[100%] ">
                                <img src={item.imageuurl} className=' mx-auto mt-[10px]  ' />
                            </div>

                            <p className='text-[18px] mt-[10px] md:text-[26px] '>{item.heading}</p>

                            <div className=" text-[12.8px] text-[#6E6E6E] mb-[18px] ">
                                <p className=' mt-[10px] md:text-[15px] '>{item.para1}</p>
                                <p className=' md:text-[15px] '>{item.Location}</p>
                            </div>


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

                            <div className='lg:hidden my-[25px] border-b-[1px] border-gray-300 '> </div>




                        </div>


                    ))
                }

                <div className='hidden lg:block lg:relative lg:bottom-[50px] lg:my-[25px] lg:border-b-[1px] border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:bottom-[75px] lg:border-b-[1px] border-gray-300 '> </div>

                <div className='hidden lg:block lg:relative lg:bottom-[1300px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:bottom-[1300px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:bottom-[730px] lg:border-b-[1px] lg:border-gray-300 '> </div>
                <div className='hidden lg:block lg:relative lg:bottom-[730px] lg:border-b-[1px] lg:border-gray-300 '> </div>


            </div>

            <Footer />



        </div>
    )
}

export default Page