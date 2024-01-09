import React from 'react'
import { ShopContext } from "../../context/shop-context"
import { useContext } from 'react';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className='font-sans text-center' >
      <div className="w-[400px]" >
        <img src={productImage} /></div>
      <div>
        <div className='text-center'>
          <p><b>{productName}</b></p>
        </div>
        <p className='text-center'>${price}</p>
      </div>
      <button onClick={() => addToCart(id)} className='border-black border-2 pl-2 pr-2 pt-1 pb-1 hover:bg-gray-900 cursor-pointer hover:text-white duration-700 rounded-3xl'>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
