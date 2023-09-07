'use client'
import React, { useState } from 'react';
// import Image from 'next/image';
// import assset1 from '../public/images/asset1.jpeg'
// import assset2 from '../public/images/asset2.jpeg'
// import assset3 from '../public/images/asset3.jpeg'
// import assset4 from '../public/images/asset4.jpeg'
// import assset2 from '../public/images/asset2.jpeg'
// import assset2 from '../../../public/images/asset2.jpeg'

const ProjectTable = () => {
  let [imageStyle, setImageStyle] = useState(false);


  const handleMouseEnter = (index) => {
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
    const targetElementSecond = document.getElementById(`${index}`);
    if (targetElementSecond) {
      // targetElementSecond.previousElementSibling.style.opacity = 100
      // targetElementSecond.nextElementSibling.style.opacity = 100
    }
    // const offsetTop = targetElement.offsetTop - 100; // Adjust the offset as needed
    setImageStyle(false);
  };

  const projects = [
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset1.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset2.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset3.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset4.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset5.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset6.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset7.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset8.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset9.jpeg', // Update with your image file name
    },
    {
      year: '2023',
      name: 'Refuge in the Water',
      category: 'Installation',
      image: '/images/asset10.jpeg', // Update with your image file name
    },



  ];



  return (
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

            <div id={`${index}`} className={imageStyle ? 'opacity-100 relative w-[50%] h-[100px] bg-orange-500 ' : 'bg-pink-500 opacity-30 w-[auto] h-[auto] mb-[10px] relative scroll-smooth '}>
              <img
                key={index}
                src={`${project.image}`}
                alt=""
                className='w-[auto] h-[auto]'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
