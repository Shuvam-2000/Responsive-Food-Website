import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {

  // side navbar 
    const[sideNav, setSideNav] = useState(false)

    const handlesidebar = () => {
      setSideNav(!sideNav)
    }

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white">
    <div className='flex justify-between py-[20px] px-[20px] bg-[#f1f3f5] border-b relative cursor-pointer'>
      <div>
        <h1 className='text-2xl font-bold py-[0px 2px]'>
        Flavour
        <span className='text-[#fabb02]'>
        Junction</span></h1>
      </div>

      <div className="bg-[#f1f3f5] border-b h-[1vw]">
      
        <ul className='sm:flex gap-9 text-[15px] font-bold py-[6px] hidden'>
          <Link to='/'>
            <li className="hover:text-[#fabb02]">Home</li>
          </Link>
          <Link to='/aboutus'>
            <li className="hover:text-[#fabb02]">About Us</li>
          </Link>
          <Link to='/exploremore'>
            <li className="hover:text-[#fabb02]">Explore More</li>
          </Link>
          <Link to='/signin'>
            <li className="hover:text-[#fabb02]">Sign In</li>
          </Link>
        </ul>
      </div>
      {
        sideNav?(<div className="bg-[#f1f3f5] border-b z-10 w-[200px] absolute top-0 right-0 text-center h-[100vh] flex items-start justify-center">

          <MdClose size={30} 
          className="absolute top-2 left-4 cursor-pointer" 
          onClick={() => setSideNav(!sideNav)}/>

          <FaCartShopping size={30} 
          className="absolute bottom-44 top-68 mx-8 my-18 hover:text-[#fabb02]" 
          onClick={() => setSideNav(!sideNav)}/>

          <ul className='flex text-[15px] font-semibold py-[6px] pt-[14vw] flex-col space-y-20'>
            <Link to='/'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideNav(!sideNav)}>Home</li>
            </Link>
            <Link to='/aboutus'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideNav(!sideNav)}>About Us</li>
            </Link>
            <Link to='/exploremore'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideNav(!sideNav)}>Explore More</li>
            </Link>
            <Link to='/signin'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideNav(!sideNav)}>Sign In</li>
            </Link>
          </ul>
      </div>
      ) : (
        "" 
      )} 

      <div className="gap-5">
        <p>
        <FaCartShopping size={30} className="hidden sm:block  mb-2 hover:text-[#fabb02]"/>
        </p>
        <p>
        <GiHamburgerMenu size={30} className="block sm:hidden cursor-pointer" onClick={handlesidebar}/> 
        </p>
      </div>
    </div>
    </div>
  )
}

export default Header;

