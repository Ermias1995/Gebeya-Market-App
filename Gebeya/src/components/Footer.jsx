import { FaInstagram,FaWhatsapp,FaXTwitter } from "react-icons/fa6";
import footer_icon from '../assets/footer_icon.png';

function Footer() {
  return (
    <div className='flex justify-between bg-primary min-h-[423px] mt-40'>
      <div id='Logo side' className="flex flex-col items-center justify-center">
        <div className="flex ml-14">
          <img src={footer_icon} alt="Logo"/>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 ml-14">
          <button className="text-white text-3xl"><FaInstagram/></button>
          <button className="text-white text-3xl"><FaWhatsapp/></button>
          <button className="text-white text-3xl"><FaXTwitter/></button>
        </div>
      </div>
      <div id='Link-side' className="grid grid-cols-3 text-white">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-2xl">About</h1>
          <button className="text-xl">About Us</button>
          <button className="text-xl">News & Blog</button>
          <button className="text-xl">Location</button>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}
export default Footer