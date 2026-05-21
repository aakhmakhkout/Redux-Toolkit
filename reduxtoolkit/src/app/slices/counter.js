import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", //? to give the slice an identity so later redux an combine it with reducer like counter/increment, counter/decrement vice versa
    initialState:{value:0}, //? set initaial value
    reducers: {  //? create the update logic, what should happen when the reducer is called
        increment: (state) => { //? redux automatically passes currentState to the function
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => { //? currentState + action (payload)
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions //? creates action creators
export default counterSlice.reducer //? exports actuall reducer function of the slice