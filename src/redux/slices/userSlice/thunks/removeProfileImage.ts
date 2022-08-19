import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../../store"
import { deleteObject, ref } from "firebase/storage"
import { storage } from "../../../../firebase/firebaseConfig"
import { setUser } from "../userSlice"

export const removeProfileImage = createAsyncThunk('user/removeProfileImage', async (_, { dispatch, getState }) => {
    const userState = (getState() as RootState).user.user

    if(userState.image) {
        await deleteObject(ref(storage, userState.image))
    }

    dispatch(setUser({...userState, image: ''}))
})