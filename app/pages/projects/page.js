import React from 'react'
import { data } from './data'
import Image from 'next/image'
import assset1 from '../../../public/images/asset1.jpeg'
import assset2 from '../../../public/images/asset2.jpeg'
import assset3 from '../../../public/images/asset3.jpeg'
import assset4 from '../../../public/images/asset4.jpeg'
import assset5 from '../../../public/images/asset5.jpeg'
import assset6 from '../../../public/images/asset6.jpeg'
import assset7 from '../../../public/images/asset7.jpeg'
import assset8 from '../../../public/images/asset8.jpeg'
import assset9 from '../../../public/images/asset9.jpeg'
import assset10 from '../../../public/images/asset10.jpeg'
import assset11 from '../../../public/images/asset11.jpeg'
import assset12 from '../../../public/images/asset12.jpeg'
import assset13 from '../../../public/images/asset13.jpeg'
import assset14 from '../../../public/images/asset14.jpeg'
import assset15 from '../../../public/images/asset15.jpeg'
import assset16 from '../../../public/images/asset16.jpeg'
import assset17 from '../../../public/images/asset17.jpeg'
import assset18 from '../../../public/images/asset18.jpeg'
import assset19 from '../../../public/images/asset19.jpeg'
import assset20 from '../../../public/images/asset20.jpeg'
import assset21 from '../../../public/images/asset21.jpeg'
import assset22 from '../../../public/images/asset22.jpeg'
import assset23 from '../../../public/images/asset23.jpeg'
import assset24 from '../../../public/images/asset24.jpeg'
import assset25 from '../../../public/images/asset25.jpeg'
import assset26 from '../../../public/images/asset26.jpeg'
import assset27 from '../../../public/images/asset27.jpeg'
import assset28 from '../../../public/images/asset28.jpeg'
import assset29 from '../../../public/images/asset29.jpeg'
import assset30 from '../../../public/images/asset30.jpeg'
import assset31 from '../../../public/images/asset31.jpeg'
import assset32 from '../../../public/images/asset32.jpeg'
import assset33 from '../../../public/images/asset33.jpeg'
import assset34 from '../../../public/images/asset34.jpeg'
import assset35 from '../../../public/images/asset35.jpeg'
import assset36 from '../../../public/images/asset36.jpeg'
import assset37 from '../../../public/images/asset37.jpeg'
import assset38 from '../../../public/images/asset38.jpeg'
import assset39 from '../../../public/images/asset39.jpeg'
import assset40 from '../../../public/images/asset40.jpeg'
import assset41 from '../../../public/images/asset41.jpeg'
import assset42 from '../../../public/images/asset42.jpeg'
import assset43 from '../../../public/images/asset43.jpeg'
import assset44 from '../../../public/images/asset44.jpeg'
import assset45 from '../../../public/images/asset45.jpeg'
import assset46 from '../../../public/images/asset46.jpeg'
import assset47 from '../../../public/images/asset47.jpeg'
import assset48 from '../../../public/images/asset48.jpeg'
import assset49 from '../../../public/images/asset49.jpeg'
import assset50 from '../../../public/images/asset50.jpeg'
import assset51 from '../../../public/images/asset51.jpeg'
import assset52 from '../../../public/images/asset52.jpeg'
import assset53 from '../../../public/images/asset53.jpeg'
import assset54 from '../../../public/images/asset54.jpeg'




const page = () => {
  return (
    <div className=''>

      {/* <div className='absolute -z-10 top-12 px-[20px] md:hidden '>
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
      </div> */}



      <div className='hidden  md:grid md:grid-cols-12 '>

        
          <div className='md:pl-[90px] md:pt-[90px] md:pr-[30px]  md:col-span-8 md:text-[15px] '>
            <p className='text-[44px] md:pb-[30px] '>Projects</p>
            <table className='   '>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
              <tr>
                <td>2023</td>
                <td>refuge in the water</td>
                <td>installation</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>lifetime Liberty Market Tower Leasing Office</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>Alobar Downtown</td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>An Optimistic Future</td>
                <td>Exhibition</td>
              </tr>


              <tr>
                <td>2022</td>
                <td>Refuge in the Sky</td>
                <td>installation</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>curio</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>An Optimistic Future</td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>  China Resources - Runxi Towers</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>  Private Residence</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>  One Delisle,Presentation Center</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>  Ledger</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>Le Sel</td>
                <td>Hospitatlity</td>
              </tr>
              <tr>
                <td>2021</td>
                <td> Lady Bird Bar</td>
                <td>Hospitatlity</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>  Kimpton Banneker Hotel</td>
                <td>Hospitatlity</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>   Full Moon Reflected On The Ocean At 01:34</td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2021</td>
                <td> DuEast</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2020</td>
                <td> Runxi Residence,Phase 2</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2020</td>
                <td> Runxi Residence,Phase 1</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>Resilient Retail Concept</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>PurParket</td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>iQ Food Co., Sheppard Avenue</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Common Collective Concept</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Bayview Residence</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Virtouse Pie,UBC</td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Virtouse Pie,College Street</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Village Juicery ,College Canada Mall</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Kingston & Co.</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Kimpton Saint george Hottel</td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Jing'an Residence</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>iQ Food Co.,Yorkdale Mall</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>Village Juicery Yorkdale Mall</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>Picnic, Bloor Street</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>La Banane</td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>iQ Food Co.,King Street West</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Park View Manor</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>NXT City Night</td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Feast and Revel </td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Curated properties saels centre</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Copper Spirits and Sights</td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Cabin Residences</td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Andy Warhol: Stars of The Silver</td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>Andaz Hotel </td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>TIFF digiPlaySpace 2015 </td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>Private Residence </td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>Pink Tartan Runway </td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>Equinox </td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2014</td>
                <td> TIFF digiPlaySpace 2015</td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>Private Residence,Toronto </td>
                <td>Residential</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>Come up to My Room </td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>Cloudscape </td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2013</td>
                <td> TIFF digiPlaySpace 2013</td>
                <td>Exhibition</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>Marilyn Monroe Cafe </td>
                <td>Hospitality</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>Junction Design Crawl </td>
                <td>Installation</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>Private Residence</td>
                <td>Residential</td>
              </tr>



            </table>
          </div>

       

        <div className=' md:col-span-4 md:p-[7.5px] '>
          <Image src={assset1} alt="" className='md:pb-[7.5px]' />
          <Image src={assset2} alt="" className='md:pb-[7.5px]' />
          <Image src={assset3} alt="" className='md:pb-[7.5px]' />
          <Image src={assset4} alt="" className='md:pb-[7.5px]' />
          <Image src={assset5} alt="" className='md:pb-[7.5px]' />
          <Image src={assset6} alt="" className='md:pb-[7.5px]' />
          <Image src={assset7} alt="" className='md:pb-[7.5px]' />
          <Image src={assset8} alt="" className='md:pb-[7.5px]' />
          <Image src={assset9} alt="" className='md:pb-[7.5px]' />
          <Image src={assset10} alt="" className='md:pb-[7.5px]' />
          <Image src={assset11} alt="" className='md:pb-[7.5px]' />
          <Image src={assset12} alt="" className='md:pb-[7.5px]' />
          <Image src={assset13} alt="" className='md:pb-[7.5px]' />
          <Image src={assset14} alt="" className='md:pb-[7.5px]' />
          <Image src={assset15} alt="" className='md:pb-[7.5px]' />
          <Image src={assset16} alt="" className='md:pb-[7.5px]' />
          <Image src={assset17} alt="" className='md:pb-[7.5px]' />
          <Image src={assset18} alt="" className='md:pb-[7.5px]' />
          <Image src={assset19} alt="" className='md:pb-[7.5px]' />
          <Image src={assset20} alt="" className='md:pb-[7.5px]' />
          <Image src={assset21} alt="" className='md:pb-[7.5px]' />
          <Image src={assset22} alt="" className='md:pb-[7.5px]' />
          <Image src={assset23} alt="" className='md:pb-[7.5px]' />
          <Image src={assset24} alt="" className='md:pb-[7.5px]' />
          <Image src={assset25} alt="" className='md:pb-[7.5px]' />
          <Image src={assset26} alt="" className='md:pb-[7.5px]' />
          <Image src={assset27} alt="" className='md:pb-[7.5px]' />
          <Image src={assset28} alt="" className='md:pb-[7.5px]' />
          <Image src={assset29} alt="" className='md:pb-[7.5px]' />
          <Image src={assset30} alt="" className='md:pb-[7.5px]' />
          <Image src={assset31} alt="" className='md:pb-[7.5px]' />
          <Image src={assset32} alt="" className='md:pb-[7.5px]' />
          <Image src={assset33} alt="" className='md:pb-[7.5px]' />
          <Image src={assset34} alt="" className='md:pb-[7.5px]' />
          <Image src={assset35} alt="" className='md:pb-[7.5px]' />
          <Image src={assset36} alt="" className='md:pb-[7.5px]' />
          <Image src={assset37} alt="" className='md:pb-[7.5px]' />
          <Image src={assset38} alt="" className='md:pb-[7.5px]' />
          <Image src={assset39} alt="" className='md:pb-[7.5px]' />
          <Image src={assset40} alt="" className='md:pb-[7.5px]' />
          <Image src={assset41} alt="" className='md:pb-[7.5px]' />
          <Image src={assset42} alt="" className='md:pb-[7.5px]' />
          <Image src={assset43} alt="" className='md:pb-[7.5px]' />
          <Image src={assset44} alt="" className='md:pb-[7.5px]' />
          <Image src={assset45} alt="" className='md:pb-[7.5px]' />
          <Image src={assset46} alt="" className='md:pb-[7.5px]' />
          <Image src={assset47} alt="" className='md:pb-[7.5px]' />
          <Image src={assset48} alt="" className='md:pb-[7.5px]' />
          <Image src={assset49} alt="" className='md:pb-[7.5px]' />
          <Image src={assset50} alt="" className='md:pb-[7.5px]' />
          <Image src={assset51} alt="" className='md:pb-[7.5px]' />
          <Image src={assset52} alt="" className='md:pb-[7.5px]' />
          <Image src={assset53} alt="" className='md:pb-[7.5px]' />
          <Image src={assset54} alt="" />

        </div>

      </div>

    </div>
  )
}

export default page