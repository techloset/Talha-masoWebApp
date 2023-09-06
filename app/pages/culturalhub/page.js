import React from 'react'
import Image from 'next/image'
import Footer from '@/app/(component)/footer/footer'

const page = () => {
    return (
        <div className=' absolute  -z-10 top-12 md:top-0 px-[20px] pb-[45px]  md:px-[90px] md:py-[90px] '>

            {/* heading and sub heading */}
            <p className='text-[25.6px] py-[15px ] md:text-[44px] md:h-[82px]  md:px-[15px]'>Cultural Hub </p>

            <div className='md:grid md:grid-cols-2'>
                <div className='md:grid md:col-span-1 md:px-[15px]'>
                    <p className='text-[22.85px] md:text-[26px]  '>Optimism in Action</p>
                    <p className='text-[12.8px] text-[#6E6E6E] my-[18px] md:text-[15px] md:my-[21px] '>Being part of a community is an essential human need.  Mason Studio's Cultural Hub is a physical and conceptual space born from an intuitive need to experiment, push the boundaries of our ideas, and provide anyone with a place of belonging.   </p >
                    <p className='text-[12.8px] text-[#6E6E6E] my-[18px] md:my-0 md:mb-[21px]'>Not only a place for our design experimentation, the community-focused hub includes a public gallery, exhibition space, a community library, a home for non-profit organizations and a learning space for educational institutions.   </p >
                    <p className='text-[12.8px] text-[#6E6E6E] mt-[18px] md:mt-0 md:mb-[21px]'>Engagement with industry and community members whose visions align can be a powerful instrument for achieving shared goals and creating an exponential force for actions that challenge existing systems by exploring unrelated yet interconnected themes, subjects and people. </p>
                    <div className='hidden md:block mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>
                </div>

                <div className='md:grid md:col-span-1 md:mt-[40px] md:px-[15px]'>
                    <Image src='/images/cultural1.jpg' width='100' height='100' className=' w-full ' />
                    <div className='hidden md:block mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>
                </div>
            </div>

            <div className='md:hidden mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>

            {/* grid 2nd */}

            <div className='md:grid md:grid-cols-2 '>

                <div className='md:grid md:col-span-1  md:px-[15px]'>
                    <Image src='/images/cultural2.jpg' width='100' height='100' className=' w-full mt-[10px]' />

                </div>

                <div className='md:hidden mt-[30px] mb-[20px] border-b-[1px] border-gray-300 '> </div>

                {/* text */}
                <div className='md:grid md:col-span-1 md:px-[15px]'>
                    <p className='text-[22px] md:text-[26px]'> The Gallery at Mason Studio</p>
                    <p className='text-[12px] py-[18px] md:py-0 text-[#6E6E6E]  md:text-[15px] md:my-[21px] '>Housed within the Cultural Hub, The Gallery is a platform for artists, designers, and makers by providing space and opportunities for emerging talent and established professionals.  Individuals from equity-deserving communities are prioritized in the Gallery to ensure diverse ideas and experiences are expressed through exhibitions, talks, events and programming.  </p>
                    <p className='text-[12px] py-[18px] md:py-0 text-[#6E6E6E]  md:my-0 md:mb-[21px]'>Everyone is welcome to the Gallery to experience how culture, business and creativity can come together to make better.</p>
                    <p className='text-[12px] py-[18px] md:py-0 text-[#6E6E6E]  md:mt-0 md:mb-[21px]  '>Some of our gallery partnerships include: DesignTO Youth, VIBE Arts, X in Residence and Cooper Cole.</p>

                </div>

            </div>



            {/* gray line */}
            <div className=' mt-[20px] border-b-[1px] border-gray-300 '> </div>
            {/* footer */}
            <Footer />

        </div>
    )
}

export default page