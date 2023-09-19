"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import "./MyComponent.css";

const Main = () => {
  const [kalaRang1, setKalaRang1] = useState(false);
  const [kalaRang2, setKalaRang2] = useState(false);
  const [kalaRang3, setKalaRang3] = useState(false);
  const [kalaRang4, setKalaRang4] = useState(false);
  const [kalaRang5, setKalaRang5] = useState(false);
  const [kalaRang6, setKalaRang6] = useState(false);
  const [headingText, setHeadingText] = useState("");
  const [paraText, setparaText] = useState(
    "Design is our tool to create inspiring experiences that empower people and communities."
  );

  const toggleHover1 = () => {
    setKalaRang1(!kalaRang1);
    setHeadingText("2033: An Optimistic Future");
    setparaText("A place to experience everyday life in an optimistic future");
  };
  const toggleHover2 = () => {
    setKalaRang2(!kalaRang2);
    setHeadingText("Mobile Mercantile");
    setparaText("Reimagining the business of retail");
  };
  const toggleHover3 = () => {
    setKalaRang3(!kalaRang3);
    setHeadingText("Full Moon Reflected on the Ocean");
    setparaText("Connecting people through an powerful moment");
  };
  const toggleHover4 = () => {
    setKalaRang4(!kalaRang4);
    setHeadingText("The Studio");
    setparaText("A collective mind of diverse individuals");
  };
  const toggleHover5 = () => {
    setKalaRang5(!kalaRang5);
    setHeadingText("Daniels Regent Park");
    setparaText("Community driven design");
  };
  const toggleHover6 = () => {
    setKalaRang6(!kalaRang6);
    setHeadingText("Refuge in the Sky");
    setparaText("Balancing familiarity with novelty");
  };
  const onleave = () => {
    setHeadingText(
      " Design is our tool to create inspiring experiences that empower people and communities. "
    );
    setparaText("");
  };

  const onmouseLeavee = () => {
    toggleHover1(), onleave();
  };
  const onmouseLeavee2 = () => {
    toggleHover2(), onleave();
  };
  const onmouseLeavee3 = () => {
    toggleHover3(), onleave();
  };
  const onmouseLeavee4 = () => {
    toggleHover4(), onleave();
  };
  const onmouseLeavee5 = () => {
    toggleHover5(), onleave();
  };
  const onmouseLeavee6 = () => {
    toggleHover6(), onleave();
  };

  return (
    <div
      className={` ${
        kalaRang1 ||
        kalaRang2 ||
        kalaRang3 ||
        kalaRang4 ||
        kalaRang5 ||
        kalaRang6
          ? "backgroundColorChange"
          : ""
      }   mt-[10px] md:mt-[5px] px-[15px] -z-10  absolute top-10  w-[100%] h-[88vh] md:top-0 md:p-[7.5px]  md:h-[98vh] overflow-y-hidden  `}
    >
      <div className="md:flex md:justify-evenly h-full md:h-full  ">
        <div className=" mb-[10px] h-[70px] md:h-auto  md:mb-0  md:pl-[90px] md:pr-[90px] md:w-[80%]       ">
          <Image
            src="/images/mason.svg"
            alt="mason logo"
            height="100"
            width="100"
            className="cursor-pointer  w-[50%] md:w-[65%] lg:w-[50%] hidden md:block md:mt-[70px] lg:mt-[70px] "
          />

          <div className="   leading-5 md:mt-[10px] lg:mt-[110px] md:leading-normal  ">
            <h2 className=" text-[#0A0A0A]     md:text-[24px] md:mt-[10px] ">
              {headingText}
            </h2>
            <p className="text-[#505050]    sm:pt-[30px] md:pt-0 md:w-[74%] text-[18px] md:text-[26px]  ">
              {paraText}
            </p>
          </div>
        </div>

        <div className=" h-full my-[14px]  md:w-[80%] md:h-full ">
          <div className="grid grid-cols-12 gap-3 h-[40%]  md:h-[50%]  ">
            <div className=" grid col-span-8  ">
              <div
                className={` art bg-cover bg-center   ${
                  kalaRang1 ? "  filter grayscale-0" : "filter grayscale"
                }  `}
                onMouseEnter={toggleHover1}
                onMouseLeave={onmouseLeavee}
              ></div>
            </div>

            <div className=" col-span-4 grid-flow-row  ">
              <div
                className={`  auction h-[48%] md:h-[48%] bg-cover bg-center mb-[5px] sm:mb-[4px] md:mb-[9px] lg:mb-[10px]    ${
                  kalaRang2 ? "  filter grayscale-0" : "filter grayscale"
                }  `}
                onMouseEnter={toggleHover2}
                onMouseLeave={onmouseLeavee2}
              ></div>

              <div
                className={` moon h-[50%] md:h-[48%]  bg-cover bg-center    ${
                  kalaRang3 ? "  filter grayscale-0" : "filter grayscale"
                }  `}
                onMouseEnter={toggleHover3}
                onMouseLeave={onmouseLeavee3}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 h-[40%]  mt-[10px] md:h-[50%]  ">
            <div className=" col-span-4 grid-flow-row ">
              <Link href="/pages/about">
                {" "}
                <div
                  className={`  group h-[48%] md:h-[47%] bg-cover bg-center mb-[5px] sm:mb-[12px]     ${
                    kalaRang5 ? "  filter grayscale-0" : "filter grayscale"
                  }  `}
                  onMouseEnter={toggleHover5}
                  onMouseLeave={onmouseLeavee5}
                ></div>
              </Link>
              <div
                className={` blackman h-[50%] md:h-[47%]  bg-cover bg-center    ${
                  kalaRang6 ? "  filter grayscale-0" : "filter grayscale"
                }  `}
                onMouseEnter={toggleHover6}
                onMouseLeave={onmouseLeavee6}
              ></div>
            </div>

            <div className=" grid col-span-8 ">
              <div
                className={` tree  bg-cover bg-center    ${
                  kalaRang4 ? "  filter grayscale-0" : "filter grayscale"
                }  `}
                onMouseEnter={toggleHover4}
                onMouseLeave={onmouseLeavee4}
              >
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
