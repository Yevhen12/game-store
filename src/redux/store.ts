import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice/userSlice'
import loadingReducer from './slices/loadingSlice/loadingSlice'
import gamesReducer from './slices/gameSlice/gameSlice'
import filterReducer from './slices/filterSlice/filterSlice'
import modalSlice from './slices/modalSlice/modalSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    games: gamesReducer,
    filter: filterReducer,
    modal: modalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;