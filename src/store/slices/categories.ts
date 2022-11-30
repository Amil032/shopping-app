import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Categories } from '../../consts/types/types'
interface Initialstate {
  categories: Categories | null
}
const initialState: Initialstate = {
  categories: null
}

export const cartegoryAction = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setAllCategories: (state, action) => {
      state = action.payload
    }
  }
})
export default cartegoryAction.reducer
export const { setAllCategories } = cartegoryAction.actions
export const allCategories = (state: RootState) => state.category.categories
