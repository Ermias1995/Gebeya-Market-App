import { FaAngleLeft, FaAngleRight,FaRegHeart } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import Ellipse_5 from '../assets/Ellipse_5.png';
import Ellipse_3 from '../assets/Ellipse_3.png';
import Ellipse_4 from '../assets/Ellipse_4.png';
import { Latest_collections } from "../data";
import { catagory_buttons } from "../data";

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
          <div id='1st_sub_section' className="grid grid-cols-3 pl-20 pr-20 gap-4">
            {/* <div className="max-w-[435px] max-h-[497px] border-2  p-4 rounded-2xl">
              <div className="flex flex-col gap-4 border-[#808080]">
                <div className="relative bg-[#F2F2F2] items-center justify-center border rounded-2xl">
                  <img className="m-auto" src={French_kiss_bag} alt="French_kiss_bag" />
                  <button className='absolute top-5 left-5 bg-white p-2 w-10 h-10 rounded-full flex items-center justify-center'><FaRegHeart/></button>
                  <button className='bg-white p-2 w-[67px] h-[34px] items-center 
                  justify-center border rounded-l-full rounded-r-full text-xs
                  absolute top-5 right-5'>In Stock</button>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-[#808080] border border-[#C1C1C1] rounded-l-full rounded-r-full p-1">Women</h1>
                  <h1 className="text-[#808080] flex flex-row items-center"><IoStar className="text-secondary"/>2k+ rating</h1>
                </div>
              </div>
              <div id='brand_and_price' className="flex flex-row justify-between">
                <div className="flex flex-col justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-2xl font-semibold">French kiss Bag</h1>
                    <h1 className="text-[#808080] text-lg">ALDO</h1>
                  </div>
                  <h1 className="text-2xl font-semibold">$500</h1>
                </div>
                <div className="flex flex-col justify-between">
                  <div className=""></div>
                  <button className="bg-secondary text-xl text-white h-[74px] p-3 rounded-l-2xl rounded-r-2xl">Add to cart</button>
                </div>
              </div>
            </div> */}
            {Latest_collections.map((item)=>{
              const { id, name, image, brand, rating, price, category } = item;
              return(
                <div key={id} className="max-w-[435px] max-h-[497px] border-2  p-4 rounded-2xl">
                  <div className="flex flex-col gap-4 border-[#808080]">
                    <div className="relative bg-[#F2F2F2] items-center justify-center border rounded-2xl min-h-64">
                      <img className="m-auto" src={image} alt={name} />
                      <button className='absolute top-5 left-5 bg-white p-2 w-10 h-10 rounded-full flex items-center justify-center'><FaRegHeart/></button>
                      <button className='bg-white p-2 w-[67px] h-[34px] items-center 
                      justify-center border rounded-l-full rounded-r-full text-xs
                      absolute top-5 right-5'>In Stock</button>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <h1 className="text-[#808080] border border-[#C1C1C1] rounded-l-full rounded-r-full p-1 min-w-12 flex justify-center">{category}</h1>
                      <h1 className="text-[#808080] flex flex-row items-center"><IoStar className="text-secondary"/>{rating} rating</h1>
                    </div>
                  </div>
                  <div id='brand_and_price' className="flex flex-row justify-between">
                    <div className="flex flex-col justify-between gap-10">
                      <div className="flex flex-col gap-0">
                        {/* <h1 className="text-2xl font-semibold">{name}</h1> */}
                        <h1 className="text-[#808080] text-lg">{brand}</h1>
                      </div>
                      <h1 className="text-2xl font-semibold">${price}</h1>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className=""></div>
                      <button className="bg-secondary text-xl text-white h-[74px] p-3 rounded-l-2xl rounded-r-2xl">Add to cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id='Filtering buttons' className="flex flex-row items-center justify-center gap-5 p-20 max-w-[1344px]">
            {catagory_buttons.map((button)=>{
              const { id, text } = button;
              return (
                  <button key={id} className="text-[#1E1E1E] border-2 border-[#C1C1C1] p-[10px] rounded-l-full rounded-r-full w-52 h-16 hover:bg-secondary hover:text-white hover:border-none">{text}</button>
              );
            })}
          </div>
          <div id="collections" className="grid grid-row-2 pl-20 pr-20 gap-10">
            
          </div>
        </div>
    </div>
  )
}
export default Home