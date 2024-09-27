import React from 'react'
import './MobCartView.css'
import ROUTES_NAVIGATION from "../../../routes/routes";
import { useNavigate } from 'react-router-dom';
import gift from '../../../assets/Icon/gift.png'


export default function MobCartView() {

    const navigate = useNavigate(); 
    const onCartClickHandler = () => {
        navigate(ROUTES_NAVIGATION.CART);
      };

  return (
  <div className='view-cart-container'>
      <img className="gift-icon" src={gift} width={'50px'}/>
      <div className="view-card">
    <span><b>6 items</b> | ₹ 2785</span>
    <button onClick={onCartClickHandler}>View cart</button>
  </div>
  </div>
  )
}
