import { fetchUser } from './thunks/fetchUser';
import { orderGame } from './thunks/orderGame';
import { clearHistory } from './thunks/clearHistory';
import { removeProfileImage } from './thunks/removeProfileImage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/interfaces";

export type StatusType = 'loading'| 'success' | 'rejected' | null

type StateType = {
    user:IUser,
    status:StatusType

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
        bio: '',
        image: '',
        myGames: [],
        favoriteGames: [],
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
        builder.addCase(orderGame.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(orderGame.fulfilled, (state) => {
            state.status = 'success'
        })
        builder.addCase(orderGame.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(clearHistory.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(clearHistory.fulfilled, (state) => {
            state.status = 'success'
        })
        builder.addCase(removeProfileImage.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(removeProfileImage.fulfilled, (state) => {
            state.status = 'success'
        })
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
