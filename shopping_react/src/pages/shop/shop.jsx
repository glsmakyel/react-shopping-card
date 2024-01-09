import React from 'react'
import { PRODUCTS } from "../../products";
import Product from './product'
const Shop = () => {
  return (
    <div className='shop'>
      <div className="mt-24 text-center">
        <h1 className='font-semibold text-7xl'>PedroTech Shop</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product className="m-24 flex flex-col justify-center items-center" data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop