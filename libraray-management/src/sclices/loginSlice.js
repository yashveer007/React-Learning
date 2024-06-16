import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
  name : ''
}

export const counterSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    addUserName: (state, action) => {
        state.name = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addUserName } = counterSlice.actions

export default counterSlice.reducer