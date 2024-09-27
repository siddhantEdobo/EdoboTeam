import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import './MobHeaderNav.css'

export default function MobHeaderNavigation({text}) {

    const navigate = useNavigate()

    const onClickBackHandler = () => {
   
        navigate(-1);
      
    };

  return (
    <div 
     className="cart-view-header"
     >
   <button onClick={onClickBackHandler} className="button">
  <FontAwesomeIcon icon={faChevronLeft}  className="backIcon"/>
</button>
     <span className="Header-text">{text}</span>
  
     </div>
  )
}
