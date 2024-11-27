import { FaAngleLeft, FaAngleRight,FaRegHeart,FaAnglesRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import Ellipse_5 from '../assets/Ellipse_5.png';
import Ellipse_3 from '../assets/Ellipse_3.png';
import Ellipse_4 from '../assets/Ellipse_4.png';
import summer_bg from '../assets/summer_bg.png';
import { Latest_collections } from "../data";
import { catagory_buttons } from "../data";
import { catagory_items } from "../data";
import { browse_category } from "../data";

function Home() {
  return (
    <div className="box-border">
        <div id='First_section' className="grid grid-cols-3 bg-primary max-w-[1512px] selection:w-full h-[48.063rem]">
          <div className="flex flex-col md:items-center items-start justify-start pt-20 md:justify-around">
            <h1 className="text-6xl md:text-[7.2rem] font-semibold text-white font-alfa-slab">Gebeya</h1>
            <div className="md:flex hidden items-center justify-center w-[120px] h-[120px] md:w-[16.25rem] md:h-[16.25rem] rounded-full">
              <img src={Ellipse_5} alt="Ellipse_5" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around">
            <div className="flex items-center justify-center w-56 h-56 md:w-[16.25rem] md:h-[16.25rem] rounded-full">
              <img src={Ellipse_3} alt="Ellipse_3"/>
            </div>
            <p className='text-white text-xl md:hidden'>Discover a world of convenience with our user-friendly platform, 
              curaated collections, and exceptional customer service</p>
            <button className='w-[21rem] h-[4.125rem] bg-secondary text-white md:text-[#222222] rounded-lg'>Explore Now</button>
          </div>
          <div className="flex flex-col items-center justify-around">
            <p className='text-white text-xl hidden md:block'>Discover a world of convenience with our user-friendly platform, 
              curaated collections, and exceptional customer service</p>
            <h1 className='text-6xl font-alfa-slab md:text-[7.2rem] text-white'>Shop</h1>
            <div className="md:flex hidden items-center justify-center w-[13.938rem] h-[13.938rem] rounded-full">
              <img src={Ellipse_4} alt="Ellipse_4"/>
            </div>  
          </div>
        </div>
  
        <div id='Second_section' className="">
          <div className="flex flex-row items-center justify-between p-20">
            <p className='font-semibold text-4xl'>Latest Collections</p>
            <div className="hidden md:flex flex-row gap-8">
              <button className='bg-secondary text-white p-2 rounded-l-full'><FaAngleLeft/></button>
              <button className="bg-secondary text-white p-2 rounded-r-full"><FaAngleRight/></button>
            </div>
          </div>

          <div id='1st_sub_section' className="hidden md:grid grid-cols-3 pl-20 pr-20 gap-4">
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

          <div className="overflow-x-auto py-4 md:hidden">
            <div id='1st_sub_section_responsive' className="flex space-x-4 pl-4 pr-4">
              {Latest_collections.map((item) => {
                const { id, name, image, brand, rating, price, category } = item;
                return (
                  <div key={id} className="flex-none w-[360px] max-h-[497px] border-2 p-4 rounded-2xl">
                    <div className="flex flex-col gap-4 border-[#808080]">
                      <div className="relative bg-[#F2F2F2] items-center justify-center border rounded-2xl min-h-64">
                        <img className="m-auto" src={image} alt={name} />
                        <button className='absolute top-5 left-5 bg-white p-2 w-10 h-10 rounded-full flex items-center justify-center'><FaRegHeart /></button>
                        <button className='bg-white p-2 w-[67px] h-[34px] items-center justify-center border rounded-l-full rounded-r-full text-xs absolute top-5 right-5'>In Stock</button>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <h1 className="text-[#808080] border border-[#C1C1C1] rounded-l-full rounded-r-full p-1 min-w-12 flex justify-center">{category}</h1>
                        <h1 className="text-[#808080] flex flex-row items-center"><IoStar className="text-secondary" />{rating} rating</h1>
                      </div>
                    </div>
                    <div id='brand_and_price' className="flex flex-row justify-between">
                      <div className="flex flex-col justify-between gap-10">
                        <div className="flex flex-col gap-0">
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
          </div>
          
          <div id='Filtering buttons' className="flex flex-row items-center justify-center gap-5 p-20 max-w-[1344px]">
            {catagory_buttons.map((button)=>{
              const { id, text } = button;
              return (
                  <button key={id} className="text-[#1E1E1E] border-2 border-[#C1C1C1] p-[10px] rounded-l-full rounded-r-full w-52 h-16 hover:bg-secondary hover:text-white hover:border-none">{text}</button>
              );
            })}
          </div>

          <div id="collections" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-5 gap-y-10 gap-x-6">
            {catagory_items.map((item) => {
              const { id, title, text, image } = item;
              return (
                  <div key={id} className="m-0 p-0 flex flex-col justify-center items-center border-2 border-[#C1C1C1] px-8 py-6 rounded-2xl gap-4 min-w-[205px]">
                      <div className="flex justify-center items-center bg-[#F2F2F2] rounded-2xl min-h-[100px] min-w-[143px]">
                          <img src={image} alt={title} className="object-contain" />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                          <h1 className="text-lg font-semibold">{title}</h1>
                          <p className="text-[#808080] text-base">{text}</p>
                      </div>
                  </div>
              );
            })}
            <div id='see more button' className="col-span-6 flex justify-center items-center">
              <button className="bg-primary text-white px-4 py-2 rounded-lg flex flex-row items-center justify-center">See more<FaAnglesRight/></button>
            </div>
          </div>
        </div>

        <div id='summer banner' className="relative mr-20 ml-20 mt-[120px] border rounded-3xl bg-[#D0D0D0] h-[502px] justify-evenly" style={{ backgroundImage: `url(${summer_bg})` }}>
          <div className="flex flex-col w-2/4 px-10 py-10 gap-10">
            <h1 className="text-[#9847EF] font-semibold text-[40px]">Our Curated Summer Collection</h1>
            <p className="text-[#9847EF] text-2xl">Explore our curated summer collection featuring trending styles,
               vibrant colors and lightweight fabrics perfect for long days and nights.
            </p>
            <button className="bg-secondary text-white p-10 font-medium w-60 h-10 mt-6 rounded-lg flex items-center justify-center">Explore Now</button>
            <div className="absolute top-[352px] left-[430px] w-6 h-6 bg-primary bg-opacity-50 rounded-full z-10"></div>
            <div className="absolute top-[449px] left-[570px] w-10 h-10 bg-primary rounded-full z-10"></div>
            <div className="absolute top-[144px] left-[689px] w-10 h-10 bg-primary rounded-full z-10"></div>
            <div className="absolute top-[100px] left-[896px] w-10 h-10 bg-primary rounded-full z-10"></div>
            <div className="absolute top-[457px] left-[805px] w-6 h-6 bg-primary bg-opacity-50 rounded-full z-10"></div>
            <div className="absolute top-[38px] left-[599px] w-6 h-6 bg-secondary rounded-full z-10"></div>
            <div className="absolute top-[331px] left-[680px] w-14 h-14 bg-secondary rounded-full z-10"></div>
            <div className="absolute top-[251px] left-[776px] w-10 h-10 bg-[#CAD3B8] rounded-full z-10"></div>
            <div className="absolute top-[40px] left-[796px] w-10 h-10 bg-[#CAD3B8] rounded-full z-10"></div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between p-20">
            <p className='font-semibold text-4xl'>Browse by category</p>
            <div className="flex flex-row gap-8">
              <button className='bg-secondary text-white p-2 rounded-l-full'><FaAngleLeft/></button>
              <button className="bg-secondary text-white p-2 rounded-r-full"><FaAngleRight/></button>
            </div>
        </div>

        <div id="Browse by category" className="grid grid-cols-2 md:grid-cols-4 px-20">
          {browse_category.map((item)=>{
            const {id, name, number, image} = item;
            return(
              <div key={id} className="flex flex-col items-center border rounded-2xl md:border-none justify-center gap-6">
                <div className="bg-[#F2F2F2] min-h-[300px] rounded-2xl p-5">
                  <img src={image} alt={name}/>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-semibold text-2xl">{name}</h1>
                  <p className="text-[#808080] text-xl">Over {number} categories in stock</p>
                </div>
              </div>
            );
          })}
        </div>
        
    </div>
  )
}
export default Home