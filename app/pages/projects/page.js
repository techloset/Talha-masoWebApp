import React from 'react'
import { data } from './data'


const page = () => {
  return (
    <div className='bg-cyan-500'>

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



      <div className='bg-pink-500 '>

        <div>
          <p>Projects</p>

          <table>
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

        <div>heelo</div>

      </div>

    </div>
  )
}

export default page