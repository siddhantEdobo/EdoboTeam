import React from 'react'
import MobHeaderComponent from "../MobHeaderNavigation";
import emptycartimg from '../../assets/Mob/mob-image/emptyCart.png'
import  './EmptyCart.css'

function EmptyCart() {
  return (
    <div>
        <MobHeaderComponent text={' Your Cart'}/>
    <div className='empty-cart-container'>
        <img src={emptycartimg} width={'200px'}/>
        <span className='header-text'>It's raining discounts !</span>
        <span className='sub-header-text'>just not in your cart</span>
    </div>
    </div>
  )
}

export default EmptyCart