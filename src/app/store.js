import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../servicos/userSlice'

export default configureStore({
  reducer: {
    user: usersSlice,
  },
})