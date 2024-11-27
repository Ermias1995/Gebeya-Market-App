import { cart } from "../data"
import { FaAngleLeft, FaAngleRight,FaRegHeart,FaAnglesRight } from "react-icons/fa6";
import { FaInstagram,FaWhatsapp,FaXTwitter } from "react-icons/fa6";
function Cart() {
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
                  <p className=""><span className="font-medium text-2xl">${price}</span> <span className="line-through text-[#808080] text-base">$300</span> <span className="">-50%</span></p>
                  <p>50 units left</p>
                  <p>+ shipping fee may vary on location</p>
                  <p>{rating} rating</p>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
        <div id='delivery and return' className=""></div>
      </div>
      <div className="Overview and similar items"></div>
    </div>
  )
}
export default Cart