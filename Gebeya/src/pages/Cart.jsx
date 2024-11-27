import { cart } from "../data"
import { FaAngleLeft, FaAngleRight,FaRegHeart,FaAnglesRight, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaInstagram,FaWhatsapp,FaXTwitter,FaBagShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
function Cart() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div className="">
        <div id='product' className="">
          {cart.map((item)=>{
            const {id, name, image,image_1, image_2, image_3, price, brand, category, rating} = item;
            return(
              <div key={id} id='Images and Discreption' className="flex justify-start">
                <div id='images' className="flex flex-col items-center justify-center w-[321px] gap-2">
                  <div id='main image' className="bg-[#F2F2F2] border rounded-2xl">
                    <img src={image} alt={name}/>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <img className='bg-[#F2F2F2] w-14 h-14 rounded-lg' src={image} alt={name} />
                    <img className='bg-[#F2F2F2] w-14 h-14 rounded-lg' src={image_1} alt={name} />
                    <img className='bg-[#F2F2F2] w-14 h-14 rounded-lg' src={image_2} alt={name} />
                    <img className='bg-[#F2F2F2] w-14 h-14 rounded-lg' src={image_3} alt={name} />
                  </div>
                  <p className="text-lg mt-5">Share this Product</p>
                  <div id='share links' className="flex items-center justify-start gap-4">
                    <button className="text-black text-3xl"><FaInstagram/></button>
                    <button className="text-black text-3xl"><FaWhatsapp/></button>
                    <button className="text-black text-3xl"><FaXTwitter/></button>
                  </div>
                </div>
                <div id='Discreption' className="flex flex-col">
                  <h1 className="text-4xl font-semibold">{name}</h1>
                  <p className="text-lg font-medium">Brand: {brand}</p>
                  <hr className="my-2"/>
                  <p className=""><span className="font-medium text-2xl">${price}</span> <span className="line-through text-[#808080] text-base">$300</span> <span className="bg-[#006200] bg-opacity-10 text-[#006200] text-base rounded-md">-50%</span></p>
                  <p className="text-[#006200] text-opacity-70 text-sm">50 units left</p>
                  <p className="text-[#808080] text-sm">+ shipping fee may vary on location</p>
                  <h1 className="text-[#808080] flex flex-row items-center"><IoStar className="text-secondary"/>{rating} rating</h1>
                  <hr />
                  <div id='quantity' className="flex flex-row items-center justify-between">
                    <h1 className="text-base pt-2">Quantity:</h1>
                    <div id='quantity' className="flex flex-row items-center justify-between rounded border border-black mt-4">
                      <button className="bg-secondary p-2 text-2xl text-white" onClick={()=>{setNumber(number - 1)}}><FaMinus/></button>
                      <p className="text-2xl px-4">{number}</p>
                      <button className="bg-secondary p-2 text-2xl text-white" onClick={()=>{setNumber(number + 1)}}><FaPlus/></button>
                    </div>
                  </div>
                  <h1 className="text-base pt-2 mt-4">Size: <span className="px-3 py-2 border border-[#C1C1C1] rounded-lg">20</span> <span className="px-3 py-2 border border-[#C1C1C1] rounded-lg"> 25</span> 
                  <span className="px-3 py-2 border border-[#C1C1C1] rounded-lg"> 31</span> <span className="px-3 py-2 border border-[#C1C1C1] rounded-lg"> 37 </span></h1>
                  
                  <div id='color' className="flex flex-row items-center justify-between mt-4">
                    <h1 className="text-lg pt-2 mt-4 flex items-center justify-center pb-3">Color:</h1>
                    <div className="bg-[#EBCDD5] border border-[#808080] w-10 h-10 rounded-[4px]"></div>
                    <div className="bg-[#4444FF] border border-[#808080] w-10 h-10 rounded-[4px]"></div>
                    <div className="bg-[#FF4646] border border-[#808080] w-10 h-10 rounded-[4px]"></div>
                    <div className="bg-[#242425] border border-[#808080] w-10 h-10 rounded-[4px]"></div>
                  </div>
                  <div id='buttons' className="flex flex-row items-center justify-between gap-2">
                    <button className="border border-black p-4 text-2xl rounded-lg flex items-center"><FaBagShopping/>Add to Cart</button>
                    <button className="bg-secondary p-4 text-2xl text-white rounded-lg">Buy Now</button>
                  </div>
                  <p className="text-[#006200] mt-4">Pickup & Pay on collection available</p>
                </div>
                <div className="flex flex-col">
                  <p>Delivery & Returns</p>
                  <hr className="w-full"/>
                  <h1>Location</h1>
                  <select className="flex flex-col border border-[#808080] rounded-lg p-2 mt-2">
                    <option value="">Location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                  <select className="border border-[#808080] rounded-lg p-2 mt-2">
                    <option value="">Sub-Location</option>
                    <option value="sublocation1">Sub-Location 1</option>
                    <option value="sublocation2">Sub-Location 2</option>
                    <option value="sublocation3">Sub-Location 3</option>
                  </select>
                  <h1 className="flex items-center mt-4 text-lg gap-2"><TbTruckDelivery className="text-2xl"/>Delivery</h1>
                  <p className="text-sm pl-7">Estimated delivery time is 1-12 business days </p>
                  <p className="text-sm pl-7"><span className="font-medium">For Same-Day-Delivery:</span>F Please place your order before 12pm</p>
                  <p className="text-sm pl-7"><span className="font-medium">Next-Day-Delivery:</span> Orders placed after 12pm will be delivered the next day.</p>
                  <p><span className="font-medium pl-7">Note:</span> Availability may vary by location</p>
                </div>
              </div>
            );
          })}
        </div>
        <div id='delivery and return' className="flex flex-col">
          <h1>Delivery & Returns</h1>
        </div>
      </div>
      <div className="Overview and similar items"></div>
    </div>
  )
}
export default Cart