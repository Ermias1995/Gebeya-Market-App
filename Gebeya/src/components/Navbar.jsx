import {FaUser} from 'react-icons/fa'
import {RiArrowDownSLine} from 'react-icons/ri';
import {NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.png'

function Navbar() {
  return (
    <div className="flex items-center space-x-5 w-full p-4 text-[#1E1E1E]">
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
          <input type="text" placeholder="Search" className="p-2 border rounded-l-2xl"/>
          <button className="p-2 bg-primary text-white rounded-r-2xl">Search</button>
        </div>
    </div>
  )
}
export default Navbar