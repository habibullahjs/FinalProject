import React from 'react'
import { HiBars2 } from "react-icons/hi2"
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Container from './Container'
import Flex from './Flex'


const Navbar = () => {
    return (
        <nav className='py-2 lg:mt-0   bg-[#F5F5F3]'>
            <Container>
                <Flex className="items-center">
                    <div className="lg:w-1/4 w-full flex justify-center lg:justify-start">
                        <Flex className={` mt-2 lg:mt-0 flex items-center gap-2`}>
                            <div className="">
                                <HiBars2 />
                            </div>
                            <h3>Shop by Category</h3>
                        </Flex>
                    </div>
                    <div className="lg:w-2/4 mt-2 lg:mt-0   w-full flex justify-center lg:justify-start">
                        <div className="relative">
                            <input type="text" placeholder='Search Products' className='w-full bg-white py-3 pl-3'
                             />
                             <div className="absolute right-6 top-[50%] translate-y-[-50%]">
                            <FaSearch />
                        </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 mt-2 lg:mt-0  w-full flex justify-center lg:justify-start">
                    <Flex className=" mt-2 lg:mt-0  flex gap-6 justify-end">
                        <div className="flex">
                            <FaUser />
                            <FaCaretDown />
                        </div>
                        <FaShoppingCart />
                    </Flex>
                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar