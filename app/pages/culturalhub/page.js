import React from 'react'
import Image from 'next/image'
import Footer from '@/app/(component)/footer/footer'

const page = () => {
    return (
        <div className=' absolute  -z-10 top-12 px-[20px] pb-[45px] '>

            {/* heading and sub heading */}
            <p className='text-[25.6px] py-[15px]'>Cultural Hub </p>
            <p className='text-[22.85px]  '>Optimism in Action</p>

            {/* paragraphs */}
            <p className='text-[12.8px] text-[#6E6E6E] my-[18px] '>Being part of a community is an essential human need.  Mason Studio's Cultural Hub is a physical and conceptual space born from an intuitive need to experiment, push the boundaries of our ideas, and provide anyone with a place of belonging.   </p >
            <p className='text-[12.8px] text-[#6E6E6E] my-[18px]'>Not only a place for our design experimentation, the community-focused hub includes a public gallery, exhibition space, a community library, a home for non-profit organizations and a learning space for educational institutions.   </p >
            <p className='text-[12.8px] text-[#6E6E6E] mt-[18px]'>Engagement with industry and community members whose visions align can be a powerful instrument for achieving shared goals and creating an exponential force for actions that challenge existing systems by exploring unrelated yet interconnected themes, subjects and people. </p>


            {/* image section */}


            <Image src='/images/cultural1.jpg' width='100' height='100' className=' w-full ' />
            <div className='mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>
            <Image src='/images/cultural2.jpg' width='100' height='100' className=' w-full mt-[10px]' />
            <div className='mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>


            {/* text */}
            <p className='text-[22px] '> The Gallery at Mason Studio</p>
            <p className='text-[12px] py-[18px] text-[#6E6E6E] '>Housed within the Cultural Hub, The Gallery is a platform for artists, designers, and makers by providing space and opportunities for emerging talent and established professionals.  Individuals from equity-deserving communities are prioritized in the Gallery to ensure diverse ideas and experiences are expressed through exhibitions, talks, events and programming.  </p>
            <p className='text-[12px] py-[18px] text-[#6E6E6E]'>Everyone is welcome to the Gallery to experience how culture, business and creativity can come together to make better.</p>
            <p className='text-[12px] py-[18px] text-[#6E6E6E]  '>Some of our gallery partnerships include: DesignTO Youth, VIBE Arts, X in Residence and Cooper Cole.</p>

            {/* gray line */}
            <div className='mt-[20px] border-b-[1px] border-gray-300 '> </div>
            {/* footer */}
            <Footer />

        </div>
    )
}

export default page