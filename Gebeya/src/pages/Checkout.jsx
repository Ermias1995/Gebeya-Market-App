import Burbery_shine from '../assets/Burbery_shine.png'
import { CiCreditCard1,CiWallet } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";

function Checkout() {
  return (
    <div className='flex flex-col gap-10'>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className=" flex flex-col p-4 border border-[#808080] rounded-lg">
          <h1 className='font-semibold text-2xl my-4'>Shipping Address</h1>
          <h1 className="font-semibold text-lg">Name</h1>
          <input type="text" placeholder="First & Last Name" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          <h1 className="font-semibold text-lg mt-3">Address 1</h1>
          <input type="text" placeholder="5kilo Addis Ababa, Ethiopia" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          <h1 className="font-semibold text-lg mt-3">Address 2</h1>
          <input type="text" placeholder="Addis Ababa University" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          <div className=" flex flex-row items-center gap-4">
            <div className="">
              <h1 className="font-semibold text-lg mt-3">City</h1>
              <input type="text" placeholder="Enter City" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
            </div>
            <div className="">
              <h1 className="font-semibold text-lg mt-3">State</h1>
              <select name="State" className="border border-[#C1C1C1] rounded-lg h-14 p-3">
                <option value="">Select State</option>
                <option value="">Addis Ababa</option>
                <option value="">Bahir Dar</option>
                <option value="">Mekelle</option>
                <option value="">Hawassa</option>
                <option value="">Dire Dawa</option>
              </select>
            </div>
            <div className="">
              <h1 className="font-semibold text-lg mt-3">Zip</h1>
              <input type="text" placeholder="Zip code" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start border border-[#808080] rounded-lg p-4">
          <h1 className="font-semibold text-2xl my-4">Order Summery</h1>
          <hr className="w-full my-4"/>
          <div id='image and name' className="flex items-center gap-3">
            <img src={Burbery_shine} alt="French kiss bag" className="bg-[#F2F2F2] p-2 h-24 w-24 rounded-lg"/>
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">Burberry shine</h1>
              <h1 className='text-[#808080]'>FENDI</h1>
            </div> 
          </div>
          <div id='price' className="flex items-center justify-between">
            <p className='text-[#808080]'>Subtotal</p>
            <p>$150</p>
          </div>
          <div id='price' className="flex items-center justify-between">
            <p className='text-[#808080]'>Shipping</p>
            <p>$10</p>
          </div>
          <div id='price' className="flex items-center justify-between">
            <p className='text-[#808080]'>Tax</p>
            <p>$5</p>
          </div>
          <hr className="w-full my-4"/>
          <div id='price' className="flex items-center justify-between">
            <p className='text-[#808080]'>Total</p>
            <p>$165</p>
          </div>
          <button className='w-[350px] h-[53px] bg-secondary text-white rounded-lg'>Place Order</button>
        </div>
      </div>
      <div className="flex flex-col justify-start border border-[#808080] rounded-lg p-4 w-4/5 md:ml-44">
        <h1 className="font-semibold text-2xl my-4">Payment Method</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:w-[750px] mt-4">
          <div className="flex flex-col items-center justify-center hover:bg-secondary hover:text-white text-[#808080] hover:cursor-pointer w-[266px] h-[136px] border border-[#808080] rounded-lg">
            <CiCreditCard1 className=''/>
            <p>Card</p>
          </div>
          <div className="flex flex-col items-center justify-center hover:bg-secondary hover:text-white text-[#808080] hover:cursor-pointer w-[266px] h-[136px] border border-[#808080] rounded-lg">
            <CiWallet/>
            <p>wallet</p>
          </div>
          <div className="flex flex-col items-center justify-center hover:bg-secondary hover:text-white text-[#808080] hover:cursor-pointer w-[266px] h-[136px] border border-[#808080] rounded-lg">
            <BiTransfer/>
            <p>Bank Transfer</p>
          </div>
        </div>
        <h1 className="font-semibold text-lg mt-4">Name on Card</h1>
        <input type="text" placeholder="First & Last Name" className="border border-[#C1C1C1] rounded-lg h-14 p-2 w-full"/>
        <h1 className="font-semibold text-lg mt-4">Card number</h1>
        <input type="text" placeholder="0000 0000 0000 0000" className="border border-[#C1C1C1] rounded-lg h-14 p-2 w-full"/>
        <div className=" flex flex-col md:flex-row items-center md:gap-4">
          <div className="">
            <h1 className="font-semibold text-lg mt-3">Expiry</h1>
            <input type="text" placeholder="MM" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          </div>
          <div className="">
            <h1 className="font-semibold text-lg mt-3 text-white">a</h1>
            <input type="text" placeholder="YYYY" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          </div>
          <div className="">
            <h1 className="font-semibold text-lg mt-3">CVV</h1>
            <input type="text" placeholder="CVV" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Checkout