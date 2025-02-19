import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';


const Cart = () => {
  const [cart, setCart] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      nav('/login');
    }
  }, []);

  const remove = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className='bg-[#111827] min-h-screen h-full flex justify-center items-center flex-wrap gap-10 py-20'>
      {cart.map((product) => (
        <Card key={product.id} product={product} remove={remove}>
          
        </Card>
      ))}
    </div>
  );
};


export default Cart;
