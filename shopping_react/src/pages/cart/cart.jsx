import React from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import CartItems from './cart-item';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-5xl'>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
        {totalAmount > 0 ? (
          <div className='checkout'>
            <p>Subtotal: ${totalAmount}</p>
            <button className='border-none w-40 h-12 bg-gray-800 text-white rounded-lg m-2 cursor-pointer'>Continue Shopping</button>
            <button className='border-none w-40 h-12 bg-gray-800 text-white rounded-lg m-2 cursor-pointer'>Checkout</button>
          </div>
        ) : (
          <h1 className='text-2xl'>Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;




// import React from 'react'
// import { PRODUCTS } from '../../products'
// import { ShopContext } from "../../context/shop-context"
// import { useContext } from 'react';
// import CartItems from './cart-item';

// const Cart = () => {
//   const { cartItems } = useContext(ShopContext);
//   return (
//     <div className='flex flex-col justify-center items-center'>
//       <div>
//         <h1 className='text-5xl'>Your Cart Items</h1>
//       </div>
//       <div className="cartItems">
//         {PRODUCTS.map((product) => {
//           if (cartItems[product.id] !== 0) {
//             return <CartItems data={product} />
//           }
//         })}
//         {totalAmount > 0 ?
//           <div className='checkout'>

//             <p>Subtotal:$</p>
//             <button className='border-none w-40 h-12 bg-gray-800 text-white rounded-lg m-2 cursor-pointer'>Continue Shopping</button>
//             <button className='border-none w-40 h-12 bg-gray-800 text-white rounded-lg m-2 cursor-pointer'>Checkout</button>

//           </div>
//           : <h1>Your Cart is Empty</h1>}
//       </div>
//     </div>
//   )
// }

// export default Cart

