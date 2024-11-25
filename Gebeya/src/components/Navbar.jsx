import { useState } from 'react';
import {FaUser} from 'react-icons/fa';
import { FaBagShopping } from "react-icons/fa6";
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import { IoSearch } from "react-icons/io5";
import {NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.png';
import Flag from '../assets/Flag.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center space-x-5 w-full p-4 text-[#1E1E1E] text-base">
      <img src={Logo} alt="Logo" className="h-10"/>

      <div className="relative group">
        <button onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="flex items-center hover:font-semibold hover:cursor-pointer">
          {isOpen ? <><FaUser/> Register/Sign In<RiArrowUpSLine/></> : <><FaUser/> Register/Sign In<RiArrowDownSLine/></>}
        </button>
        <div className="absolute items-center justify-center mt-4 p-5 w-[194px] left-0 hidden bg-white group-hover:block border border-[#C1C1C1]">
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Register</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Sign In</a>
        </div>
      </div>

      <div className="flex items-center space-x-3"></div>
        <div className="flex items-center space-x-3">
            <NavLink to='/' className="hover:font-semibold">Home</NavLink>
            <NavLink to='/' className="hover:font-semibold">Men</NavLink>
            <NavLink to='/' className="hover:font-semibold">Women</NavLink>
            <NavLink to='/' className="hover:font-semibold">Accessories</NavLink>
        </div>

        <div className="relative group">
          <NavLink to='/' 
                  onMouseEnter={()=>setIsOpen(true)}
                  onMouseLeave={()=>setIsOpen(false)}   
                  className='flex flex-row items-center hover:font-semibold'>
            {isOpen ? <>More<RiArrowUpSLine/></> : <>More<RiArrowDownSLine/></>}
          </NavLink>
        </div>

        <div className="flex items-center">
          <IoSearch className="absolute transform translate-x-1"/>
          <input type="text" placeholder={`Search`} className="h-10 p-2 pl-6 border rounded-l-2xl"/>
          <button className="h-10 w-16 p-2 bg-primary text-white rounded-r-2xl flex items-center justify-center"><IoSearch className='text-xl'/></button>
        </div>
        <div className="flex items-center">
          <img src={Flag} alt="Flag" className="h-6 border rounded-full"/>
          <p className='flex items-center hover:font-semibold hover:cursor-pointer'>EN/Currency <RiArrowDownSLine/></p>
        </div>
        <div className="relative flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full">
          <p className='absolute top-0 right-0 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>2</p>
          <FaBagShopping className='text-white'/>
    </div>
    </div>
  )
}
export default Navbar