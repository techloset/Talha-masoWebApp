import React from 'react'
import { data } from './data'


const page = () => {
  return (
    <div className='absolute -z-10 top-12 px-[20px] '>
        
        <div className=' pt-[10px] mb-[15px]'>
            <p className=' text-[25.6px]'>Projects</p>
        </div>

        {
            data.map((item)=>(
                <div className='pb-[20px]'>
                    <img src={item.imageuurl} alt="" className='pb-[10px] '/>
                    <p className='text-[12px] text-[#6E6E6E] '> {item.heading} </p>
                </div>
            ))
        }
  
    </div>
  )
}

export default page