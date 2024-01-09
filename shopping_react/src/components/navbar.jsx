import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className=' flex w-full h-[80px] justify-end items-center bg-black'>
      <div className='mr-[50px] flex items-center'>
        <Link className='no-underline ml-20 text-2xl text-white ' to="/"> Shop</Link>
        <Link to="/cart" >
          <ShoppingCart className='text-white' size={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar