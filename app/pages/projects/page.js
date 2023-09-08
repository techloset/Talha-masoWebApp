'use client'
import React, { useState } from 'react';
import { data } from './data'

const page = () => {


  let [imageScroll, setImageScroll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
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
    // const offsetTop = targetElement.offsetTop - 100; // Adjust the offset as needed
    setImageScroll(false);
  };

  const projects = [
    {
      year: '2023',
      name: 'Alobar Downtown',
      category: 'Installation',
      image: '/images/asset1.jpeg', // Update with your image file name
    },

    {
      year: '2023',
      name: 'refuge in the water',
      category: " installation",
      image: '/images/asset2.jpeg', // Update with your image file name

    },


    {
      year: "2023",
      name: " lifetime Liberty Market Tower Leasing Office",
      category: "Retail",
      image: '/images/asset3.jpeg', // Update with your image file name

    },


    {
      year: '2023',
      name: "Alobar Down",
      category: 'Hospitality',
      image: '/images/asset4.jpeg', // Update with your image file name

    },


    {
      year: "2023",
      name: "An Optimistic Future",
      category: "Exhibition",
      image: '/images/asset5.jpeg', // Update with your image file name

    },


    {
      year: '2022',
      name: 'Refuge in the Sky',
      category: 'installatio',
      image: '/images/asset6.jpeg', // Update with your image file name

    },


    {
      year: 'category',
      name: 'curio',
      category: 'Retail',
      image: '/images/asset7.jpeg', // Update with your image file name


    },

    {
      year: '2022',
      name: 'An Optimistic Future',
      category: ' Exhibition',
      image: '/images/asset8.jpeg', // Update with your image file name

    },


    {
      year: '2022',
      name: 'China Resources - Runxi Towers',
      category: 'Residential',
      image: '/images/asset9.jpeg', // Update with your image file name


    },

    {
      year: '2021',
      name: 'Private Residence',
      category: 'Residentia',
      image: '/images/asset10.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "One Delisle, Presentation Center",
      category: "Retaial",
      image: '/images/asset11.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "Ledger",
      category: "Residentia",
      image: '/images/asset12.jpeg', // Update with your image file name

    },

    {

      year: "2021",
      name: "Le Sel",
      category: "Hospitatlit",
      image: '/images/asset13.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "Lady Bird Bar",
      category: "Hospitatlit",
      image: '/images/asset14.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "Kimpton Banneker Hotel",
      category: "Hospitatlit",
      image: '/images/asset15.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "Full Moon Reflected On The Ocean At 01: 34",
      category: "Installatio",
      image: '/images/asset16.jpeg', // Update with your image file name

    },


    {
      year: "2021",
      name: "DuEast",
      category: " Residential",
      image: '/images/asset17.jpeg', // Update with your image file name

    },


    {
      year: "2020",
      name: "Runxi Residence, Phase 2",
      category: "Residential",
      image: '/images/asset18.jpeg', // Update with your image file name

    },


    {
      year: "2020",
      name: "Runxi Residence, Phase 1",
      category: "Residential",
      image: '/images/asset19.jpeg', // Update with your image file name

    },


    {
      year: "2020",
      name: "Resilient Retail Concept",
      category: "Retail",
      image: '/images/asset20.jpeg', // Update with your image file name

    },


    {
      year: "2019",
      name: "PurParket",
      category: "Exhibition",
      image: '/images/asset21.jpeg', // Update with your image file name

    },


    {
      year: "2019",
      name: "iQ Food Co., Sheppard Avenue",
      category: "Retail",
      image: '/images/asset22.jpeg', // Update with your image file name

    },


    {
      year: "2019",
      name: "Common Collective Concept",
      category: "Residential",
      image: '/images/asset23.jpeg', // Update with your image file name

    },


    {
      year: "2019",
      name: "Bayview Residence",
      category: "Retail",
      image: '/images/asset24.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Virtouse Pie, UBC",
      category: "Hospitality",
      image: '/images/asset25.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Virtouse Pie, College Street",
      category: "Retail",
      image: '/images/asset26.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Village Juicery, College Canada Mal",
      category: "Retail",
      image: '/images/asset27.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Kingston & Co.",
      category: "Residential",
      image: '/images/asset28.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Kimpton Saint george Hottel",
      category: "Hospitalit",
      image: '/images/asset29.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "Jing'an Residenc",
      category: "Residential",
      image: '/images/asset30.jpeg', // Update with your image file name

    },


    {
      year: "2018",
      name: "iQ Food Co., Yorkdale Mall",
      category: "Retail",
      image: '/images/asset31.jpeg', // Update with your image file name

    },


    {
      year: "2017",
      name: "Village Juicery Yorkdale Mall",
      category: "Retail",
      image: '/images/asset32.jpeg', // Update with your image file name

    },


    {
      year: "2017",
      name: "Picnic, Bloor Street",
      category: "Retail",
      image: '/images/asset33.jpeg', // Update with your image file name

    },


    {
      year: "2017",
      name: "La Banane",
      category: "Hospitality",
      image: '/images/asset34.jpeg', // Update with your image file name

    },


    {
      year: "2017",
      name: "iQ Food Co., King Street West",
      category: "Retail",
      image: '/images/asset35.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Park View Manor",
      category: "Residential",
      image: '/images/asset36.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "NXT City Night",
      category: "Installation",
      image: '/images/asset37.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Feast and Revel",
      category: "Hospitality",
      image: '/images/asset38.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Curated properties saels centre",
      category: "Retail",
      image: '/images/asset39.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Copper Spirits and Sights",
      category: "Hospitality",
      image: '/images/asset40.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Cabin Residences",
      category: "Residential",
      image: '/images/asset41.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Andy Warhol: Stars of The Silver",
      category: "Exhibition",
      image: '/images/asset42.jpeg', // Update with your image file name
    },


    {
      year: "2016",
      name: "Andaz Hotel",
      category: "Hospitality",
      image: '/images/asset43.jpeg', // Update with your image file name
    },


    {
      year: "2015",
      name: "TIFF digiPlaySpace 2015",
      category: "Exhibition",
      image: '/images/asset44.jpeg', // Update with your image file name
    },


    {
      year: "2015",
      name: "Private Residence",
      category: "Resident",
      image: '/images/asset45.jpeg', // Update with your image file name
    },

    {
      year: "2015",
      name: "Pink Tartan Runwa",
      category: "Installation",
      image: '/images/asset46.jpeg', // Update with your image file name
    },


    {
      year: "2015",
      name: "Equinox",
      category: "Hospitality",
      image: '/images/asset47.jpeg', // Update with your image file name
    },


    {
      year: "2014",
      name: "TIFF digiPlaySpace 2015",
      category: "Exhibitioyn",
      image: '/images/asset48.jpeg', // Update with your image file name
    },


    {
      year: "2014",
      name: "Private Residence, Toronto",
      category: "Residential",
      image: '/images/asset49.jpeg', // Update with your image file name
    },


    {
      year: "2014",
      name: "Come up to My Room",
      category: "Installation",
      image: '/images/asset50.jpeg', // Update with your image file name
    },


    {
      year: "2014",
      name: "Cloudscape",
      category: "Installatio",
      image: '/images/asset51.jpeg', // Update with your image file name

    },


    {
      year: "2013",
      name: "TIFF digiPlaySpace 2013",
      category: "Exhibition",
      image: '/images/asset52.jpeg', // Update with your image file name

    },

    {
      year: "2013",
      name: "Marilyn Monroe Cafe",
      category: "Hospitality",
      image: '/images/asset53.jpeg', // Update with your image file name

    },

    {
      year: "2012",
      name: "Junction Design Crawl",
      category: "Installatio",
      image: '/images/asset54.jpeg', // Update with your image file name

    },


    {
      year: "2011",
      name: "Private Residence",
      category: "Residential",
      image: '/images/asset55.jpeg', // Update with your image file name

    },


  ]



  return (
    <div className=''>

      <div className='absolute -z-10 top-12 px-[20px] md:hidden '>
        <div className=' pt-[10px] mb-[15px]'>
          <p className=' text-[25.6px]'>Projects</p>
        </div>

        {
          data.map((item) => (
            <div className='pb-[20px]'>
              <img src={item.imageuurl} alt="" className='pb-[10px] ' />
              <p className='text-[12px] text-[#6E6E6E] '> {item.heading} </p>
            </div>
          ))
        }
      </div>



      <div className="hidden md:grid md:grid-cols-12">
        <div className="md:col-span-8  md:main">
          <p className="md:pb-[30px] md:text-[44px]">Projects</p>
          <div>
            <table className="md:text-[15px]">
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}

                  >
                    <td>{project.year}</td>
                    <td>{project.name}</td>
                    <td>{project.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:imgParent md:col-span-4 md:p-[7.5px]">
          <div className="md:imgSection">
            {projects.map((project, index) => (

              <div id={`${index}`} className={` ${imageScroll ? 'relative w-[50%] h-[100px]' : 'opacity-100 w-[auto] h-[auto] mb-[10px] relative scroll-smooth'} ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'
                }`}>
                <img
                  key={index}
                  src={`${project.image}`}
                  alt=""
                  className='w-[auto] h-[auto] '
                />
              </div>
            ))}
          </div>
        </div>
      </div>





    </div>
  )
}

export default page