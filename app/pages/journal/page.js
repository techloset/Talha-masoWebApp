import React from 'react'
import { data } from './data'
// import ReactReadMoreReadLess from "react-read-more-read-less";



const page = () => {
    return (
        
        <div className='bg-green-500 absolute -z-10 top-12 px-[20px]   '>

            <div className='text-[24px] flex justify-between '>
                Journal
            </div>
            {
                data.map((item) => (
                    <div className='  '>

                        <img src={item.imageuurl} className=' mx-auto mt-[10px] ' />
                       
                        <p className='text-[18px] mt-[10px]  '>{item.heading}</p>
                        <p className='text-[12.8px] mt-[10px] text-[#6E6E6E]  '>{item.para1}</p>
                        <p className='text-[12.8px] mt-[0px] text-[#6E6E6E] '>{item.Location}</p>

                        {/* <ReactReadMoreReadLess

                            charLimit={200}
                            readMoreText={"Read more ↓ "}
                            readLessText={"Read less ↑"}
                        >
                           {item.para2}
                        </ReactReadMoreReadLess> */}

                    </div>
                ))
            }

        </div>
    )
}

export default page