import { configureStore } from '@reduxjs/toolkit'
import reducer from '../sclices/loginSlice'

export const store = configureStore({
  reducer: {
    login: reducer,
  },
})