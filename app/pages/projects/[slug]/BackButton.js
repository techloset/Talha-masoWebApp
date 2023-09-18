import React from "react";
import Link from "next/link";
import Image from "next/image";

const BackButton = () => {
  return (
    <div className="">
      <Link href="/pages/projects">
        <div className=" hidden   md:fixed  z-0  md:flex  md:mt-[10px] md:ml-[94%]  md:p-[10px] ">
          <Image
            src="/images/cross.svg"
            alt="cross"
            width="100"
            height="100"
            className="  mt-[8px] w-[20px] h-[20px] cursor-pointer  "
          />
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
