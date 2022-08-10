import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice/userSlice'
import loadingReducer from './slices/loadingSlice/loadingSlice'
import gamesReducer from './slices/gameSlice/gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    games: gamesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;