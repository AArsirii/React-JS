import React, { useState } from 'react';
import './Header.css';
import Userbox from './Userbox';
import { BsBasket3 } from "react-icons/bs";

function Header({setPage, setModalBox}) {
  function changePage(){
    setPage('Basket')
  }
let [cartOpen, setCartOpen]= useState(false)

  return (
    <div className="Header">
      <ul>
        <li onClick={() => setPage('Main')}>MyGlass</li>
        <li onClick={changePage}>Корзина</li>
        <BsBasket3 onClick={() =>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
      </ul>

      {cartOpen && (
        <div className='shop-cart'>
        </div>
      )}


      <Userbox setModalBox={setModalBox}/>
    </div>
  );
}

export default Header;
