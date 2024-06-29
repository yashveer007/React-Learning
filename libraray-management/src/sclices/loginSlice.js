import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
  name : '',
  isLogin : false
}

export const counterSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    addUserName: (state, action) => {
      console.log("payload",action.payload)
        state.name = action.payload.name;
        state.isLogin = action.payload.isLogin;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addUserName } = counterSlice.actions

export default counterSlice.reducer