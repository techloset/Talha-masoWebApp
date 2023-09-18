import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" text-[12.8px] md:text-[15px] text-[#000000]  pt-[10px]    ">
        <div className="flex justify-start md:justify-between  mt-[20px] leading-[22px]">
          <div className=" w-[60%]   md:w-auto ">
            <p className="">+1 (416) 761-9736 </p>
            <p>Follow Us </p>
            <p>Send us an Email </p>
          </div>

          <div className=" md:ml-[-30%] text-[#000000] ">
            <p>91 Pelham Avenue</p>
            <p>Toronto, Canada</p>
            <p>M6N 1A5</p>
          </div>

          <div className="hidden md:block ">
            <p>工作室</p>
            <p>微信</p>
            <p>电子邮件</p>
          </div>
        </div>

        <div className=" md:hidden border-t-[1px] border-white mt-[10px]"></div>

        <div className="md:hidden flex gap-3 mt-[10px]">
          <p>工作室</p>
          <p>/</p>
          <p>微信</p>
          <p>/</p>
          <p>电子邮件</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
