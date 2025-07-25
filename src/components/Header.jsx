import React, { useState } from 'react'
import logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

const Header = () => {
  let [show, setShow] = useState(false)


  return (
    <div className={`lg:py-2 ${show ? "mb-0" : "mb-8 lg:mb-0"}`}>
      <Container>
        <Flex className= 'flex items-center'>
          <div className="w-1/3">
            <div className="mt-3 lg:mt-0">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="">
            <ul className={`lg:flex gap-[40px] pb-2 text-center mt-2 duration-300 ease-in-out ${show == true ? "bg-[#302f2f] mt-0" : " lg:mt-0 mt-[-180px] "}`}>
              <li>
                <a className='text-[14px] font-dms font-normal lg:text-[#767676] text-white lg:hover:text-[#262626] hover:text-blue-100 duration-300 ease-in-out' href="#">Home</a>
              </li>
              <li>
                <a className='text-[14px] font-dms font-normal lg:text-[#767676] text-white lg:hover:text-[#262626] hover:text-blue-100 duration-300 ease-in-out' href="#">Shop</a>
              </li>
              <li>
                <a className='text-[14px] font-dms font-normal lg:text-[#767676] text-white lg:hover:text-[#262626] hover:text-blue-100 duration-300 ease-in-out' href="#">About</a>
              </li>
              <li>
                <a className='text-[14px] font-dms font-normal lg:text-[#767676] text-white lg:hover:text-[#262626] hover:text-blue-100 duration-300 ease-in-out' href="#">Contacts</a>
              </li>
              <li>
                <a className='text-[14px] font-dms font-normal lg:text-[#767676] text-white lg:hover:text-[#262626] hover:text-blue-100 duration-300 ease-in-out' href="#">Journal</a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden absolute top-2 right-2" onClick={() => setShow(!show)}>{show ? <RxCross1 /> : <FaBars />}


          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header