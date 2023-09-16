'use client'
import React from 'react';
// improt {data}
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


var lineColor;

const ProjectDetail = ({ response }) => {

  let [imageScroll, setImageScroll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    lineColor = { borderColor: "black !important" }
    setHoveredIndex(index);
    const targetElement = document.getElementById(`${index}`);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Adjust the offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const targetElementSecond = document.getElementById(`${index}`);
    if (targetElementSecond) {
      // targetElementSecond.previousElementSibling.style.opacity = 100
      // targetElementSecond.nextElementSibling.style.opacity = 100
    }

    setImageScroll(false);
  };



  let routers = useRouter();
  // Check if response is a string (JSON) and parse it into an object
  const parsedResponse = typeof response === 'string' ? JSON.parse(response) : {};

  // Extract the "items" array from the parsedResponse
  const itemsArray = parsedResponse.items || [];

  // console.log(itemsArray)
  return (
    <>


      <div className='absolute -z-10 top-12 px-[20px] md:hidden '>
        <div className=' pt-[10px] mb-[15px]'>
          <p className=' text-[25.6px]'>Projects</p>
        </div>

        {/* {
          data.map((item, index) => (
            <div key={index} className='pb-[20px]'>
              <img src={item.imageuurl} alt="image" className='pb-[10px] ' />
              <p className='text-[12px] text-[#6E6E6E] '> {item.heading} </p>
            </div>
          ))
        } */}



        {itemsArray.map((item, index) => (
          <div key={index} className='pb-[20px]'>
            <Image key={index} width={1000} height={500} className=' ' src={'https:' + item.fields.image.fields.file.url} alt={item.fields.name} />
            <p className='text-[12px] text-[#6E6E6E] mt-[10px]'> {item.fields.name} </p>
          </div>
        ))}


        {/* {itemsArray.map((item, index) => (
          
          <div key={index} className='pb-[20px]'>
            <div className='w-full h-full relative'>
              <Image
                layout="fill"
                objectFit="cover"
                src={'https:' + item.fields.image.fields.file.url}
                alt={item.fields.name}
              />
            </div>
            <p className='text-[12px] text-[#6E6E6E] mt-[10px]'> {item.fields.name} </p>
          </div>
        ))} */}

      </div>



      <div className='hidden md:grid md:grid-cols-12 '>
        <div className='md:col-span-6  md:main '>
          <p className="md:pb-[30px] md:text-[44px]">Projects</p>


          <>
            <table className="md:text-[15px]">
              <thead>
                <tr>
                  <th className="">Date</th>
                  <th className="">Name</th>
                  <th className="">Type</th>
                </tr>
              </thead>
              <tbody>
                {itemsArray.map((item, index) => {
                  // Generate a slug based on the project name
                  const route = item.fields.slug.toLowerCase().replace(/\s+/g, '-');

                  return (
                    <tr key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)} className="">
                      <td className="">
                        {/* Wrap the date with a Link */}
                        <Link href={`/pages/projects/${route}`}>
                          {item.fields.date}
                        </Link>
                      </td>
                      <td className="">
                        {/* Wrap the name with a Link */}
                        <Link href={`/pages/projects/${route}`}>
                          {item.fields.name}
                        </Link>
                      </td>
                      <td className="">
                        {/* Wrap the type with a Link */}
                        <Link href={`/pages/projects/${route}`}>
                          {item.fields.type}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>

        {/* Display images in a loop */}
        <div className="md:imgParent md:col-span-6 md:p-[7.5px] ">
          <div className='md:imgSection'>
            {itemsArray.map((item, index) => (
              <div key={index} id={`${index}`} className={` ${imageScroll ? 'relative w-[50%] h-[100px]' : 'opacity-100  mb-[10px] relative scroll-smooth'} ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'
                }`}>
                <Image key={index} width={300} height={500} className='w-[100%]' src={'https:' + item.fields.image.fields.file.url} alt={item.fields.name} />
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  );
};

export default ProjectDetail;
