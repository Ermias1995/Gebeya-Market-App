import { FaInstagram,FaWhatsapp,FaXTwitter } from "react-icons/fa6";
import {RiArrowDownSLine} from 'react-icons/ri';
import { useState } from "react";
import footer_icon from '../assets/footer_icon.png';

function Footer() {
    const [isOpen, setIsOpen] = useState({
      about: false,
      products: false,
      discover: false,
    });

    const toggleDropdown = (section) => {
      setIsOpen((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };
  return (
    <>
    <div className='flex flex-col-reverse md:flex md:flex-row md:justify-between bg-primary min-h-[423px] mt-40'>
      <div id='Logo side' className="flex flex-col items-center justify-center">
        <div className="flex md:ml-14">
          <img className="hidden md:block" src={footer_icon} alt="Logo"/>
          <img className="md:hidden w-10 h-10" src={footer_icon} alt="Logo"/>
        </div>
        <div className="bg-white w-4/5 px-3 flex m-auto items-center justify-center h-[1px] rounded-s-full md:hidden my-6"></div>
        <div className="flex flex-row items-center justify-center gap-8 md:ml-14 pb-10">
          <button className="text-white text-3xl"><FaInstagram/></button>
          <button className="text-white text-3xl"><FaWhatsapp/></button>
          <button className="text-white text-3xl"><FaXTwitter/></button>
        </div>
      </div>
      <div id='Link-side' className="hidden md:grid grid-cols-3 text-white mr-14 gap-6">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-2xl">About</h1>
          <button className="text-xl">About Us</button>
          <button className="text-xl">News & Blog</button>
          <button className="text-xl">Location</button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-2xl">Products</h1>
          <button className="text-xl">Pricing</button>
          <button className="text-xl">Store</button>
          <button className="text-xl">Features</button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-2xl">Discover</h1>
          <button className="text-xl">Contact Us</button>
          <button className="text-xl">Customers</button>
          <button className="text-xl">Affilates</button>
        </div>
      </div>

      {/* Responsive Footer Links and Logo */}
      <div className="md:hidden text-white mr-14 pl-10 mb-10">
      <div className="flex flex-col">
        <div>
        {isOpen.about? <button onClick={() => toggleDropdown('about')} className="font-bold text-2xl w-full text-left">About</button>
                 : <button onClick={() => toggleDropdown('about')} className="flex items-center justify-between font-bold text-2xl w-full text-left">About<RiArrowDownSLine/></button>}
          {isOpen.about && (
            <div className="flex flex-col pl-4">
              <button className="text-xl">About Us</button>
              <button className="text-xl">News & Blog</button>
              <button className="text-xl">Location</button>
            </div>
          )}
        </div>
        <div className="mt-4">
          {isOpen.products? <button onClick={() => toggleDropdown('products')} className="font-bold text-2xl w-full text-left">Products</button>
                 : <button onClick={() => toggleDropdown('products')} className="flex items-center justify-between font-bold text-2xl w-full text-left">Products<RiArrowDownSLine/></button>}
          {isOpen.products && (
            <div className="flex flex-col pl-4">
              <button className="text-xl">Pricing</button>
              <button className="text-xl">Store</button>
              <button className="text-xl">Features</button>
            </div>
          )}
        </div>
        <div className="mt-4">
        {isOpen.discover? <button onClick={() => toggleDropdown('discover')} className="font-bold text-2xl w-full text-left">Discover</button>
                 : <button onClick={() => toggleDropdown('discover')} className="flex items-center justify-between font-bold text-2xl w-full text-left">Discover<RiArrowDownSLine/></button>}
          {isOpen.discover && (
            <div className="flex flex-col pl-4">
              <button className="text-xl">Contact Us</button>
              <button className="text-xl">Customers</button>
              <button className="text-xl">Affiliates</button>
            </div>
          )}
        </div>
      </div>
      </div>

    </div>
    <div className="bg-white h-8"></div>
    </>
  )
}
export default Footer