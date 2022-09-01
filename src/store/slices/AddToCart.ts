import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface Cart{
  cartItems:Array<CartItem>
}
type CartItem={
  name: string;
  price: number;
}
// Define the initial state using that type
const initialState = {
  cartItems:[{name:'sdsd',price:5}]
}

export const cartActions = createSlice({
  name: 'addToCart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   addToCart: (state,action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state,action) => {
      const newState: CartItem[] = state.cartItems.filter((item) => item.name !== action.payload);
      state.cartItems = newState;
      
    },
  },
})

export const { addToCart, removeFromCart} = cartActions.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartItems

export default cartActions.reducer