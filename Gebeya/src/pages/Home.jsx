import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Ellipse_5 from '../assets/Ellipse_5.png';
import Ellipse_3 from '../assets/Ellipse_3.png';
import Ellipse_4 from '../assets/Ellipse_4.png'

function Home() {
  return (
    <div className="box-border">
        <div id='First_section' className="grid grid-cols-3 bg-primary max-w-[1512px] selection:w-full h-[48.063rem]">
          <div className="flex flex-col items-center justify-around">
            <h1 className="font-normal text-[7.2rem] text-white font-alfa-slab">Gebeya</h1>
            <div className="flex items-center justify-center w-[16.25rem] h-[16.25rem] rounded-full">
              <img src={Ellipse_5} alt="Ellipse_5" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around">
            <div className="flex items-center justify-center w-[16.25rem] h-[16.25rem] rounded-full">
              <img src={Ellipse_3} alt="Ellipse_3"/>
            </div>
            <button className='w-[21rem] h-[4.125rem] bg-secondary text-[#222222] rounded-lg'>Explore Now</button>
          </div>
          <div className="flex flex-col items-center justify-around">
            <p className='text-white text-xl '>Discover a world of convenience with our user-friendly platform, 
              curaated collections, and exceptional customer service</p>
            <h1 className='font-normal font-alfa-slab text-[7.2rem] text-white'>Shop</h1>
            <div className="flex items-center justify-center w-[13.938rem] h-[13.938rem] rounded-full">
              <img src={Ellipse_4} alt="Ellipse_4"/>
            </div>  
          </div>
        </div>
        {/* <div id='space' className="h-24 w-full"></div> */}
        <div id='Second_section' className="">
          <div className="flex flex-row items-center justify-between p-20">
            <p className='font-semibold text-4xl'>Latest Collections</p>
            <div className="flex flex-row gap-8">
              <button className='bg-secondary text-white p-2 rounded-l-full'><FaAngleLeft/></button>
              <button className="bg-secondary text-white p-2 rounded-r-full"><FaAngleRight/></button>
            </div>
          </div>
          <div id='1st_sub_section' className="grid grid-rows-3 pl-20">
            <div className="w-[27.188rem] h-[31.063rem] border-2 border-[808080] rounded-2x1">

            </div>
          </div>
        </div>
    </div>
  )
}
export default Home