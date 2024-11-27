import { cart } from "../data"
import { FaAngleLeft, FaAngleRight,FaRegHeart,FaAnglesRight } from "react-icons/fa6";

function Cart() {
  return (
    <div>
      <div className="">
        <div id='product' className="">
          {cart.map((item)=>{
            const {id, name, image,image_1, image_2, image_3, price, brand, category, rating} = item;
            return(
              <div key={id} id='Images and Discreption' className="">
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
                </div>
                <div id='Discreption' className="">

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