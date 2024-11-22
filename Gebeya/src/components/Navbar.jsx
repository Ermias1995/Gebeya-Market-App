import {FaUser} from 'react-icons/fa';
import {RiArrowDownSLine} from 'react-icons/ri';
import { IoSearch } from "react-icons/io5";
import {NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.png';
import Flag from '../assets/Flag.png';

function Navbar() {
  return (
    <div className="flex items-center space-x-5 w-full p-4 text-[#1E1E1E] text-base">
      <img src={Logo} alt="Logo" className="h-10"/>
      <div className="flex items-center">
        <FaUser/>Register/Sign In<RiArrowDownSLine/>
      </div>
      <div className="flex items-center space-x-3"></div>
        <div className="flex items-center space-x-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Men</NavLink>
            <NavLink to='/'>Women</NavLink>
            <NavLink to='/'>Accessories</NavLink>
            <NavLink to='/' className='flex flex-row items-center'>More<RiArrowDownSLine/></NavLink>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder={`${<IoSearch />}Search`} className="h-10 p-2 border rounded-l-2xl"/>
          <button className="h-10 p-2 bg-primary text-white rounded-r-2xl"><IoSearch/></button>
        </div>
        <div className="flex items-center">
          <img src={Flag} alt="Flag" className="h-6 border rounded-full"/>
          <p className='flex items-center hover:cursor-pointer'>EN/Currency <RiArrowDownSLine/></p>
        </div>
    </div>
  )
}
export default Navbar