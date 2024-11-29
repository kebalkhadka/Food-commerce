import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Sucess from '../pages/Sucess';

const Cart = () => {
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

  const [activeCart, setActiveCart] = useState(false); // useState created for toggling of sidebar.
  
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <MdClose 
            className='border-2 border-gray-600 text-gray-600 font-bold text-2xl p-1 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' 
            onClick={() => setActiveCart(!activeCart)} 
          />
        </div>  
        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return <ItemCard key={food.id} id={food.id} name={food.name} img={food.img} qty={food.qty} price={food.price} />
          }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>
        }

        <div className='absolute bottom-0 '>
          <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2 '/>
          <button 
            className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5' 
            onClick={() => navigate("/Sucess")}>Checkout</button> {/* Corrected path */}
        </div>
      </div>
      <FaShoppingCart 
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} 
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
}

export default Cart;
