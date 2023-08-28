import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "./homeslice";
export default configureStore({
  reducer: {
    home: homeSlice
  },
})