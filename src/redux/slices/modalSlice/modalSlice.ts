import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalSlice = {
    activeModal:boolean
}

const initialState:ModalSlice = {
    activeModal: false
}

export const modalSlice = createSlice({
    name: 'orderModal',
    initialState,
    reducers: {
        setModal: (state:ModalSlice, action:PayloadAction<boolean>) => {
            state.activeModal = action.payload
        }
    }
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer