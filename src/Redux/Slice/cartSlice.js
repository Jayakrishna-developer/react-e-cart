import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remainingProducts=state.filter(item=>item!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalprice=existingProduct.price*existingProduct.quantity
                state=[...remainingProducts,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
        },
        removeFromCart:(state,action)=>{
            return state=state.filter(item=>item.id!==action.payload)
        },
          emptyCart:(state)=>{
            return state=[]
        }
    }
})

export default cartSlice.reducer
export const{addToCart,removeFromCart,emptyCart}=cartSlice.actions