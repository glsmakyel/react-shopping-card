import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, uptadeCartItemCount } = useContext(ShopContext);
  return (
    <div className='h-64 flex items-center m-8 w-700 shadow-md rounded-2xl'>
      <img src={productImage} className='w-48' />
      <div className='w-full text-3xl'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='w-10 text-center font-bold'>
          <button onClick={() => removeFromCart(id)} className='grid-cols-3 w-24 h-12 bg-slate-700 hover:bg-slate-950 text-white font-bold rounded ml-5'> - </button>
          <input className='ml-5' value={cartItems[id]} onChange={(e) => uptadeCartItemCount(Number(e.target.value).id)} />
          <button onClick={() => addToCart(id)} className=' grid-cols-3 w-24 h-12 bg-slate-700 hover:bg-slate-950 text-white font-bold rounded ml-5'>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

