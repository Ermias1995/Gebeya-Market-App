import { useState } from 'react';
import {FaUser} from 'react-icons/fa';
import { FaBagShopping,FaAngleRight } from "react-icons/fa6";
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import {NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.png';
import Flag from '../assets/Flag.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    console.log(isMoreOpen);
  return (
    <div className="flex items-center justify-center space-x-5 w-full p-4 text-[#1E1E1E] text-base">
      <button onClick={()=>setIsMoreOpen(true)} className='flex text-xl items-center justify-center md:hidden'><VscThreeBars/></button>
      <img src={Logo} alt="Logo" className="h-10"/>

      {/* Responsive Nabar */}
      {isMoreOpen && (
        <div className=" relative group">
          <div className="absolute items-center justify-center w-[207px] left-0  bg-white group-hover:block border border-[#C1C1C1]">
            <div className="flex flex-row gap-5 py-2 items-center justify-center">
              <img src={Logo} alt="Logo" className="h-10"/>
              <button onClick={()=>setIsMoreOpen(false)} className='flex text-xl items-center justify-center'><RxCross2 /></button>
            </div>
            <hr></hr>
              <p className='flex justify-center py-2'>Register/Sign In<FaAngleRight/></p>
            <hr></hr>
            <a href="#" className="block ml-5 px-2 py-2 hover:font-semibold">Our Catagories</a>
            <a href="#" className="block ml-5 px-2 py-2 hover:font-semibold">Men</a>
            <a href="#" className="block ml-5 px-2 py-2 hover:font-semibold">Women</a>
            <a href="#" className="block ml-5 px-2 py-2 hover:font-semibold">Kids</a>
            <a href="#" className="block ml-5 px-2 py-2 hover:font-semibold">Accessories</a>
            <p className='flex justify-center py-2'>More<RiArrowDownSLine/></p>
            <hr></hr>
            <div className="flex items-center">
              <img src={Flag} alt="Flag" className="h-6 border rounded-full"/>
              <p className='flex items-center hover:font-semibold hover:cursor-pointer'>EN/Currency <RiArrowDownSLine/></p>
            </div>
          </div> 
        </div>
      )
      }
      {/* ///////////////////// */}

      <div className="relative md:block hidden group" onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
        <button className="flex items-center hover:font-semibold hover:cursor-pointer">
          {isOpen ? <><FaUser/> Register/Sign In<RiArrowUpSLine/></> : <><FaUser/> Register/Sign In<RiArrowDownSLine/></>}
        </button>
        <div className="absolute items-center justify-center pt-4 p-5 w-[194px] left-0 hidden bg-white group-hover:block border border-[#C1C1C1]">
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Register</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Sign In</a>
        </div>
      </div>

        <div className="hidden md:flex items-center space-x-3">
            <NavLink to='/' className="hover:font-semibold">Home</NavLink>
            <NavLink to='/cart' className="hover:font-semibold">Men</NavLink>
            <NavLink to='/women' className="hover:font-semibold">Women</NavLink>
            <NavLink to='/' className="hover:font-semibold">Accessories</NavLink>
        </div>

        <div className="relative hidden md:block group" onMouseEnter={()=>setIsOpen(true)}
                  onMouseLeave={()=>setIsOpen(false)}>
          <NavLink to='/' className='flex flex-row items-center hover:font-semibold'>
            {isOpen ? <>More<RiArrowUpSLine/></> : <>More<RiArrowDownSLine/></>}
          </NavLink>
          <div className="absolute items-center justify-center pt-4 p-5 w-[194px] left-0 hidden bg-white group-hover:block border border-[#C1C1C1]">
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Perfumes</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Jewelries</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Gym wears</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Vintage wears</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Sport wears</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Pyjamas</a>
            <hr></hr>
            <a href="#" className="block ml-5 px-4 py-2 hover:font-semibold">Slippers</a>
          </div>
        </div>

        <div className="flex items-center">
          <IoSearch className="absolute transform translate-x-1"/>
          <input type="text" placeholder={`Search`} className="h-10 p-2 pl-6 border rounded-l-2xl"/>
          <button className="h-10 w-16 p-2 bg-primary text-white rounded-r-2xl flex items-center justify-center"><IoSearch className='text-xl'/></button>
        </div>
        <div className="hidden md:flex items-center">
          <img src={Flag} alt="Flag" className="h-6 border rounded-full"/>
          <p className='flex items-center hover:font-semibold hover:cursor-pointer'>EN/Currency <RiArrowDownSLine/></p>
        </div>
        <div className="relative flex items-center justify-center w-11 h-11 md:bg-primary bg-[#222222] text-white rounded-full">
          <p className='hidden absolute top-0 right-0 bg-red-600 text-white text-xs w-4 h-4 md:flex items-center justify-center rounded-full'>2</p>
          <FaBagShopping className='text-white'/>
    </div>
    </div>
  )
}
export default Navbar;