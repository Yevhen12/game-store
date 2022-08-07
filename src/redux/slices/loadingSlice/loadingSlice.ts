import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingSlice = {
    loading:boolean
}

const initialState:LoadingSlice = {
    loading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state:LoadingSlice, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer