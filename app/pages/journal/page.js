'use client'
import React, { useState } from "react";
import { data } from "./data";
import Footer from "@/app/component/footer/Footer";
import Image from "next/image";

const Page = () => {
  const [isOpen, setIsOpen] = useState(new Array(data.length).fill(false));

  const toggleReadMore = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  const closeReadMore = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = false;
    setIsOpen(updatedOpenState);
  };

  return (
    <div className=" absolute -z-10 top-12 px-[20px] pb-[45px]  md:top-0 md:px-[90px] md:pt-[90px] lg:px-[105px]   ">
      <div className="text-[24px] md:text-[44px] md:h-[82px] md:pb-[30px] ">
        Journal
      </div>
      <div className="hidden md:block lg:hidden md:text-[24px]   ">
        Sharing our latest news, <br /> collaborations and events.
      </div>
      <div className="hidden lg:block md:text-[24px]  ">
        <p className=" w-[65%]">
          {" "}
          Sharing our latest news, collaborations and events.
        </p>
      </div>

      <div className="hidden md:block md:my-[30px] lg:mt-[30px] md:border-b-[1px] md:border-gray-300 ">
        {" "}
      </div>

      <div className="  lg:grid lg:grid-cols-2 lg:gap-10 lg:h-[40%]">
        {data.map((item, index) => (
          <div key={index} className=" mb-4 border-b border-gray-300">
            <div className=" md:w-[100%] ">
              <Image
                src={item.imageuurl}
                alt="img"
                width={100}
                height={100}
                className=" w-[100%] mx-auto mt-[10px]  "
              />
            </div>

            <p className="text-[18px] mt-[10px] md:text-[26px] ">
              {item.heading}
            </p>

            <div className=" text-[12.8px] text-[#6E6E6E] mb-[18px] ">
              <p className=" mt-[10px] md:text-[15px] ">{item.para1}</p>
              <p className=" md:text-[15px] ">{item.Location}</p>
            </div>

            <div className="text-[12.8px] text-[#6E6E6E]">
              {isOpen[index] ? (
                <>
                  <p className="text-[15px]">{item.para2}</p>
                  <p className="py-[18px] text-[15px]">{item.para3}</p>
                  {/* Add the rest of your content here */}
                  <button className="text-[20px] text-[#000000]" onClick={() => closeReadMore(index)}>Close</button>
                </>
              ) : (
                <>
                  <p className="text-[15px]">{item.para2.slice(0, 100)}...</p>
                  <button className="md:mb-[10px] text-[20px] text-[#000000]" onClick={() => toggleReadMore(index)}>
                    Read More ↓
                  </button>
                </>
              )}
            </div>

            {/* <div className="lg:hidden my-[25px] border-b-[123px] border-black-300 ">
              {" "}
            </div> */}
            {/* <div className="mt-[20px] border-b-[1px] border-black-300"></div> */}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;

