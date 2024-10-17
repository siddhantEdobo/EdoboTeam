import {
  faBagShopping,
  faBottleWater,
  faBus,
  faCalendarDays,
  faCar,
  faCat,
  faChevronRight,
  faCirclePlus,
  faClock,
  faDoorClosed,
  faL,
  faPhoneSlash,
  faTags,
  faTrash,
  faUserSecret,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./CartComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddToCartButton from "../../common/AddToCartButton";
import CartUnlockCardComponent from "../../common/CartUnlockCardComponent";
import { Images } from "../../assets";
import coin from "../../assets/Icon/coins.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ROUTES_NAVIGATION from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import MobCartBillingComponent from "../../mobcomponent/MobCartComponent/MobCartBillingComponent";
import MobProductCard from "../../common/MobProductCard";
import CartBillingComponent from "./CartBillingComponent";
import ReplceProductComponent from "../../common/ReplaceProductComponent";
import trashIcon from '../../assets/Icon/trash.png'
import leaveWithGuard from '../../assets/Icon/leaveWithGuard.png'
import leaveWithDoor from '../../assets/Icon/leaveWithHome.png'
import avoidcall from '../../assets/Icon/avoidCall.png'
import dogs from '../../assets/Icon/bewareOfDog.png'
import couponBanner from '../../assets/Icon/couponBanner.png'
import sticker1 from '../../assets/sticker1.png'
import sticker2 from '../../assets/sticker2.png'
import slotDelivery from '../../assets/Icon/slotDeliver2.png'
import express from '../../assets/Icon/Express2.png'
import pickUp from '../../assets/Icon/PickUp2.png'
import { flatMap } from "lodash";
import Summary from "./Summary";
import EdiblesComponent from "../HomeComponent/EdiblesComponent";




const NEWOFFERS = [
  {
    id: 1,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
  {
    id: 2,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
  {
    id: 3,

    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
  {
    id: 4,
    name: "Madhur 1Kg",
    imageSrc:
      "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/64f84698d171af6a6696032d/5-1--320x320.jpg",
    price: 9,
    originalPrice: 67,
    quantity: "1 kg",
  },
];


const instruction = [
  {
    instructionIcons: leaveWithGuard,
    title : 'Leave with guard'
  },
  {
    instructionIcons: leaveWithDoor,
    title : 'Leave with door'
  },
  {
    instructionIcons: avoidcall,
    title : 'Avoid calls'
  },
  {
    instructionIcons: dogs,
    title : 'Beware of pets'
  },
  
]


const ComboOffer= [
  {
    id: 1,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  }
]


const EDITIBLE = [
  {
    id: 1,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 2,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 3,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 4,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 5,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 7,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 8,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 9,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 10,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },

  {
    id: 11,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 12,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
  {
    id: 13,
    url: "https://cdn1.storehippo.com/s/60a39f1801d30d79c4caa94b/6502ff9d3fcf6003a40dcfa4/8901808006640-320x320.png",
    title: "Green Masala Milk",
    price: "₹ 41.3",
    mrp: "₹ 51.3",
  },
];

const datesData = [
  { id: 1, text: "Today", date: new Date() , day: 'MON' },
  {
    id: 2,
    text: "Tomorrow",
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    day: 'TUE',
  },
  {
    id: 3,
    text: "",
    date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    day: 'WED',
  },
];

const timeSlots = [
  '8:00AM-12:00PM',
  '12:00PM-4:00PM',
  '4:00PM-8:00PM',
 
]



const CartComponent = () => {
  const [checkout , setCheckout] = useState(false)
  const [slotMenu, setSlotMenu] = useState(false)
  const [changeSlot , setChangeSlot] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [selectDate, setselectDate] = useState(null);
  const [selectTime , setSelectTime]= useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedTips, setSelectedTips] = useState([]);
  const [userInstruction, setUserInstruction] = useState([]);
  const [slotInfo , setSlotInfo] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null);
  const [couponList , setCouponList] = useState(false)
  const [couponApplied , setCouponApplied] =  useState(null)
  const [Tip , setTip] = useState(0)

  const navigate = useNavigate();

  const handleAddInstruction = (data) => {
  
    if (!userInstruction.includes(data)) {
      setUserInstruction([...userInstruction, data]); 
    } else {
      setUserInstruction(userInstruction.filter(item => item !== data)); 
    }

    console.log(userInstruction);
    
  };


  const handleCOD=()=>{
   alert(`Thanks Shop with Edobo, Your Delivery type: ${selectedOption}`)
   navigate(ROUTES_NAVIGATION.HOME)
  }

  const handleSlotInfo=()=>{
    const data = {
        slotDate:  selectDate,
        slotTime: selectTime
      }
      console.log(data)
      setSlotInfo(data)
      setselectDate(null)
      setSelectTime(null)
      
      setChangeSlot(false)
  }

 const CouponCodes = [
  { code: "EDBO10", discount: 10 },
  { code: "EDBO20", discount: 20 },
  { code: "EDBO30", discount: 30 },
  { code: "EDBO40", discount: 40 },



 ]

  const handleProceedCheckOut=()=>{
    setCheckout(true)
    setSlotMenu(true)
  }
  
  
  

  return (
    <div className="cart-container">
      <div className="item-container">{
      slotMenu ? (<div>
      
        <span className="items-count-text">Select Delivery Type</span> 

        <div className="delivery-container">
            <div className="time-bar">
              <span>Pick your date and time according to your convenience</span>
            </div>
            <div className="select-delivery-container">
            <div className="delivery-row">
   <input type='checkbox'
   className="delivery-checkbox"
   checked={selectedOption == 'Slot Delivery'}
   onChange={() => setSelectedOption('Slot Delivery')}
   />
  <img src={slotDelivery} className="delivery-img" />
  <div className="delivery-info">
    <span className="delivery-name">Slot Delivery</span>
    <span className="delivery-time">{slotInfo ? slotInfo.slotDate : 'No date Selected'}, Between {slotInfo ? slotInfo.slotTime : 'No time selected'}</span>
  </div>
</div>


  <div className="changeTime-button">
    <button onClick={()=>setChangeSlot(true)}>Change date and time <FontAwesomeIcon icon={faChevronRight}/></button>
  </div>
</div>

{ changeSlot && (<div className="dataSlot-container">
<span>Choose Date</span>
<div className="date-slots">
{
  datesData.map((items) => (
    <div
    onClick={()=>setselectDate(items.date.getDate())}

     key={items.id}  
     className={`date-card-${selectDate == items.date.getDate()?'selected':'un'}`}>
      <div className="date-text-container"><span style={{fontSize:'8px'}}>{items.text}</span></div>
      <span>{items.day}</span>
      <span className="date-value">{items.date.getDate()}</span>
    </div>
  ))
}
</div>
</div>)}

{ selectDate && (<div className="dataSlot-container">
<span>Choose Time</span>
<div className="time-slots">
{
  timeSlots.map((items)=>(
    <div
    onClick={()=>setSelectTime(items)}
     className={`time-card-${selectTime == items ? 'selected': 'un'}`}>
     {items}
    </div>
  ))
}
{
  selectTime && (<button onClick={handleSlotInfo} className="change-button">Change</button>)
}
</div>
</div>)}

        </div>

        <div className="delivery-container">
            <div className="time-bar">
              <span>Pefer express delivery option for dilevery within 15-20 minutes</span>

            </div>
            <div className="select-delivery-container">
  <div className="delivery-row">
  <input type='checkbox'
  className="delivery-checkbox"
  checked={selectedOption == 'Express Delivery'}
  onChange={(e)=>setSelectedOption('Express Delivery')} />

  
    <img src={express} className="delivery-img" />
    <div className="delivery-info">
      <span  className="delivery-name">Express Delivery</span>

      <span className="delivery-time">*Additional charges may apply</span>
    </div>
  </div>
</div>

        </div>


        <div className="delivery-container">
            <div className="time-bar">
              <span>Pick up your order through our drive through stores near you</span>
            </div>
            <div className="select-delivery-container">
  <div className="delivery-row">
  <input type='checkbox'
  className="delivery-checkbox"
  checked={selectedOption == 'Pick-Up'}
  onChange={(e)=>setSelectedOption('Pick-Up')} />
  
    <img src={pickUp} className="delivery-img" />
    <div className="delivery-info">
      <span  className="delivery-name">Pick up</span>

      <span className="delivery-time">Address of the store near the user appears here</span>
    </div>
  </div>
</div>

        </div>
        
      </div>):(<div>
        
        <span className="items-count-text">{EDITIBLE.length} items added</span> 
            <div className="item-box-container">
               <div className="box-container-title">
               <input type="checkbox" 
               className="delivery-checkbox"
               />
             
                   <span>Product in cart</span>
                   <span style={{color: '#A5A5A5' , fontSize: '10px'}}>({EDITIBLE.length})</span>
               </div>
              <div className="offer-container">
                <div className="claimed-offer-container">
                 <div>
                  <span>Avail combo offer</span>
                 </div>
                 <button>+ Claim offer</button>
               </div>

                    {
                      ComboOffer.map((items)=>(
                        <div className="offer-card">
                        <div style={{display: 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                        <input type="checkbox"
                        className="delivery-checkbox"
                        />
                        <img src={items.url} width={'60px'}/> 
                        <div style={{display: 'flex' , flexDirection: 'column'}}>
                          <span className="offer-item-title">{items.title}</span>
                          <span className="offer-item-price">{items.price}</span>
                          <span className="offer-item-mrp">{items.mrp}</span>
                        </div>
                        </div>
                        <div className="offer-item-button-container">
                          <div>
                            <button onClick={()=>EDITIBLE.push(items)} className="add-button">Add</button>
                          </div>
                          <div>
                           
                          </div>
                        </div>
                        </div>
                      ))
                    }          
          
              </div>
            </div>

            <div className="item-box-container">
            <div className="box-container-title">
              
                   <span>Unlock new offer</span>
                   
               </div>
               <div className="claimed-offer-container">
                 <div>
                  <span>Avail offers</span>
                 </div>
                 <button>+ Claim offer</button>
               </div>

               {
                      NEWOFFERS.map((items)=>(
                        <div className="offer-card">
                        <div style={{display: 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                        <input type="checkbox"
                        className="delivery-checkbox"
                        />
                        <img src={items.imageSrc} width={'60px'}/> 
                        <div style={{display: 'flex' , flexDirection: 'column'}}>
                          <span className="offer-item-title">{items.name}</span>
                          <span className="offer-item-price">₹{items.price}</span>
                          <span className="offer-item-mrp">₹{items.originalPrice}</span>
                        </div>
                        </div>
                        <div className="offer-item-button-container">
                          <div>
                            <button className="add-button">Add</button>
                          </div>
                          <div>
                           
                          </div>
                        </div>
                        </div>
                      ))
                    } 
        </div>

            
    
      </div>)
      } </div>

      {checkout? (<div className="checkout-container">
        <Summary data={EDITIBLE} method={handleCOD} />
      </div>):
      (<div className="checkout-container">
        <div className="delivery-instruction-container">
          <span className="items-count-text">Select delivery Instructions</span>
          <div className="delivery-instruction">
          {
            instruction.map((items)=>(
              <div 
              className={`des-instruction-card ${userInstruction.includes(items) ? 'selected' : ''}`}
              onClick={()=>{handleAddInstruction(items)}}
              >
                <img src={items.instructionIcons}/>
                <h3>{items.title}</h3>
              </div>
            ))
          }
          </div>
        </div>
       <div className="add-tip-container">
            <div>
              <img src={coin} width={'20px'}/>
              <span>Tip your delivery partner</span>
            </div>

            <div className="button-container">
              <button onClick={()=>{if(Tip>0){setTip(Tip-10)}}} className="add-minus-button"><span>-</span></button>
              <span>₹{Tip}</span>
              <button onClick={()=>setTip(Tip+10)} className="add-minus-button"><span>+</span></button>
            </div>
       </div>
      {couponList ? 
      (<div className="coupons-container">
        {
          CouponCodes.map((items)=>(
            <div className="coupon-code-container">
                  <div  className="coupon-code-text-area">

                    <span className="coupon-code">{items.code}</span>
                    <span className="offer-desc"><b>{items.discount}% </b>on this order</span>
                  </div>
                  <button 
                  onClick={()=>{
                    setCouponApplied(items)
                    setCouponList(false)
                    }}>Apply</button>
              </div>

          ))
        }
      </div>):
      (<div className="coupons-container"> 
         <div className="coupon-container">
       { couponApplied!=null 
       ? ( <div className="applied-coupon-code-container">
        <div  className="coupon-code-text-area">

          <span className="coupon-code">{couponApplied.code}</span>
          <span className="offer-desc"><b>{couponApplied.discount}% </b>on this order</span>
        </div>
        <button 
        onClick={()=>{
         
          setCouponList(true)
          }}>Change</button>
    </div>) 
       :(<img 
          onClick={()=>setCouponList(true)}
          src={couponBanner} width={'90%'}/>)}
       </div>
       <div className="billing-container">
        <CartBillingComponent/>
       </div>
      </div>)}

       <div className="checkout-button-container">
        <img src={sticker1} className="saving-banner-sticker1" width={'35px'}/>
        <img src={sticker2} className="saving-banner-sticker2" width={'80px'}/>
      <div className="saving-banner">
        <span>You're saving ₹234 on this order</span>
      </div>
      <button onClick={handleProceedCheckOut} className="checkout-button">Proceed to checkout</button>
      
      </div>

      </div>)}
      
    </div>
  );
};

export default CartComponent;
