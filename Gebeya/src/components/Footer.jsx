import { FaInstagram,FaWhatsapp,FaXTwitter } from "react-icons/fa6";
import footer_icon from '../assets/footer_icon.png';

function Footer() {
  return (
    <div className='flex justify-stretch bg-primary min-h-[423px] mt-40'>
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
      <div className="Link-side">

      </div>
    </div>
  )
}
export default Footer