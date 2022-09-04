import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingSlice = {
    loading:boolean
    searching: boolean
}

const initialState:LoadingSlice = {
    loading: false,
    searching: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state:LoadingSlice, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setSearching: (state:LoadingSlice, action:PayloadAction<boolean>) => {
            state.searching = action.payload
        }
    }
})

export const { setLoading, setSearching } = loadingSlice.actions

export default loadingSlice.reducer