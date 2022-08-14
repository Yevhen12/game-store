import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice/userSlice'
import loadingReducer from './slices/loadingSlice/loadingSlice'
import gamesReducer from './slices/gameSlice/gameSlice'
import filterReducer from './slices/filterSlice/filterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    games: gamesReducer,
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;