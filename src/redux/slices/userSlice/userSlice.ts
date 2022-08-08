import { fetchUser } from './thunks/fetchUser';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/interfaces";

type userStatus = 'loading'| 'success' | 'rejected' | null

type StateType = {
    user:IUser,
    status:userStatus

}

const initialState: StateType = {
    user: {
        name: '',
        username: '',
        email: '',
        password: '',
        recentSearch: [],
        createdAt: '',
        purchasesList: [],
        uid: '',
    },
    status: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state:StateType, action:PayloadAction<IUser>) => {
            state.user = action.payload
        },
        removeUser:(state:StateType) => {
            state.user = initialState.user
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchUser.fulfilled, (state) => {
            state.status = 'success'
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.status = 'rejected'
        })
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
