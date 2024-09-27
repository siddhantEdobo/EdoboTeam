import { createSlice } from "@reduxjs/toolkit";


const amountSlice=createSlice({
name :"amount",
initialState:{
    amount:0,
},
reducers:{
    setTotalAmount:(state,action)=>{
        state.amount=action.payload;
    },
},
    
})

export const {setTotalAmount}=amountSlice.actions;
// export const selectTotalAmount=(state)=>state.setTotalAmount
export default amountSlice.reducer