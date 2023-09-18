import React from "react";
import { Client } from "@/app/lib/contentful";
import Image from "next/image";
import Footer from "@/app/component/footer/Footer";
import Link from "next/link";

const Page = async ({ params }) => {
  const response = await Client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  if (response.items.length === 0) {
    return <div>No matching data found for this slug.</div>;
  }

  const entry = response.items[0];

  const { name, type, location, date, description, featuredImage } =
    entry.fields;

  const imageUrls = featuredImage.map((image) => image.fields.file.url);

  return (
    <>
      <div className="hidden  md:flex  md:mt-[10px] md:ml-[93%]  md:p-[10px]   md:fixed">
        <Link href="/pages/projects">
          <Image
            src="/images/cross.svg"
            alt="cross"
            width="100"
            height="100"
            className=" mt-[8px]  w-[20px] h-[20px] cursor-pointer  "
          />
        </Link>
      </div>

      <div className=" absolute -z-10 top-14 pl-[20px] pr-[20px] md:pt-[90px] md:pl-[90px] md:mr-[90px] ">
        <h1 className=" h-[55px] pt-[10px] mb-[15px] text-[25.6px] ">{name}</h1>

        <div className="text-[12px] mt-[35px]  md:text-[15px]">
          <div className="md:flex">
            <div className=" pb-[20px] md:w-[50%]">
              <div className="mb-[10px]">
                <p className="text-[#000000]">Type</p>
                <p className="text-[#6E6E6E]"> {type}</p>
              </div>
              <div className="mb-[10px] ">
                <p className="text-[#000000]">Location</p>
                <p className="text-[#6E6E6E]"> {location}</p>
              </div>
              <div className="text-[#000000]">
                <p>Year</p>
                <p className="text-[#6E6E6E]"> {date}</p>
              </div>
            </div>
            <div className=" md:w-[50%] ">
              <p className="text-[#6E6E6E] w-[93.5%] md:w-auto">
                {" "}
                {description}
              </p>
            </div>
          </div>

          <div></div>
          {/* images array  */}
          <div className=" md:hidden  ">
            {imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                className="mt-[10px] w-[100%] "
                src={`https:${imageUrl}`}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>

          <div className="md:w-[100%] mt-[10px] md:flex md:flex-wrap md:gap-[10px] hidden">
            {imageUrls.map((imageUrl, index) => {
              return (
                <>
                  {index % 3 !== 0 ? (
                    <div
                      key={index}
                      className="md:relative md:flex md:justify-center md:p-[1px] md:w-[49.1%] md:h-[700px]  "
                    >
                      <Image
                        key={index}
                        src={`https:${imageUrl}`}
                        alt={`Image ${index + 1}`}
                        fill={true}
                      />
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="md:relative md:flex md:p-[10px] md:h-[700px] md:w-[100%]  "
                    >
                      <Image
                        key={index}
                        src={`https:${imageUrl}`}
                        alt={`Image ${index + 1}`}
                        fill={true}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="w-[100%] h-[1px] mt-[85px] mx-auto border-t-[1.5px] ">
            {" "}
          </div>
          <div className="mb-[30px]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
