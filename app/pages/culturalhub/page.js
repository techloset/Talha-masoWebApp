import React from "react";
import Image from "next/image";
import Footer from "@/app/component/footer/Footer";

const page = () => {
  return (
    <div className=" absolute  -z-10 top-12 px-[20px] pb-[45px]  md:top-0 md:p-[90px] ">
      <p className="text-[25.6px] md:text-[44px]  h-[82.79px]   md:px-[15px]">
        Culture Hub
      </p>

      <div className="md:grid md:grid-cols-2   ">
        <div className="md:px-[15px]  md:mb-5 md:border-b md:border-gray-300">
          <p className=" text-[22.6px] md:text-[26px] ">Optimism in Action</p>
          <p className=" leading-[22px] my-[18.28px] md:my-[21px] text-[12.8px] md:text-[15px] text-[#6E6E6E] ">
            Being part of a community is an essential human need. Mason Studios
            Cultural Hub is a physical and conceptual space born from an
            intuitive need to experiment, push the boundaries of our ideas, and
            provide anyone with a place of belonging.
          </p>
          <p className="leading-[22px]   text-[12.8px] md:text-[15px] text-[#6E6E6E]">
            Not only a place for our design experimentation, the community
            focused hub includes a public gallery, exhibition space, a community
            library, a home for non-profit organizations and a learning space
            for educational institutions.{" "}
          </p>
          <p className="leading-[22px]  text-[12.8px] md:text-[15px] mt-[18px] md:mt-[21px] text-[#6E6E6E]">
            Engagement with industry and community members whose visions align
            can be a powerful instrument for achieving shared goals and creating
            an exponential force for actions that challenge existing systems by
            exploring unrelated yet interconnected themes, subjects and people.{" "}
          </p>

          
        </div>

        <div className="md:grid md:col-span-1 md:mt-[40px] lg:mt-0 md:px-[15px]">
          <Image
            src="/images/cultural1.jpg"
            alt="image"
            width="100"
            height="100"
            className=" w-full "
          />
          <div className="hidden md:block mt-[30px] mb-[20px] border-b-[1px] border-gray-300 ">
            {" "}
          </div>
        </div>
      </div>

      <div className="md:hidden mt-[30px] mb-[20px] border-b-[1px] border-gray-300 ">
        {" "}
      </div>

      <div className="md:grid md:grid-cols-2   ">
        <div className="md:grid md:col-span-1  md:px-[15px]">
          <Image
            src="/images/cultural2.jpg"
            alt="image"
            width="100"
            height="100"
            className=" w-full mt-[10px] "
          />
          <div className="hidden md:block mt-[30px] mb-[20px]  border-b-[1px] border-gray-300 ">
            {" "}
          </div>
        </div>

        <div className="md:hidden mt-[30px] mb-[20px] border-b-[1px] border-gray-300 ">
          {" "}
        </div>

        <div className="md:px-[15px]  md:mb-5 md:border-b md:border-gray-300">
          <p className="text-[22.8px] md:text-[26px]">
            The Gallery at Mason Studio{" "}
          </p>{" "}
          <p className="leading-[22px]  text-[12.8px] md:text-[15px] my-[18px] md:my-[21px] text-[#6E6E6E]   ">
            Housed within the Cultural Hub, The Gallery is a platform for
            artists, designers, and makers by providing space and opportunities
            for emerging talent and established professionals. Individuals from
            equity deserving communities are prioritized in the Gallery to
            ensure diverse ideas and experiences are expressed through
            exhibitions, talks, events and programming.{" "}
          </p>{" "}
          <p className="leading-[22px]  text-[12.8px] md:text-[15px]  text-[#6E6E6E]  ">
            Everyone is welcome to the Gallery to experience how culture,
            business and creativity can come together to make better.{" "}
          </p>{" "}
          <p className="leading-[22px]  text-[12.8px] md:text-[15px] mt-[18px] md:mt-[21px] md:mb-4  text-[#6E6E6E]  ">
            Some of our gallery partnerships include: DesignTO Youth, VIBE Arts,
            X in Residence and Cooper Cole.{" "}
          </p>
        </div>
      </div>

      <div className="md:hidden mt-[30px] mb-[20px]  border-b-[1px] border-gray-300 ">
        {" "}
      </div>

      <Footer />
    </div>
  );
};

export default page;
