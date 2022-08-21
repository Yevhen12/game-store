import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../../store"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../../firebase/firebaseConfig"
import { setUser } from "../userSlice"

export const changeUsername = createAsyncThunk('user/removeProfileImage', async (text:string, { dispatch, getState }) => {
    const userState = (getState() as RootState).user.user

    const userRef = doc(db, 'users', userState.uid)

    await updateDoc(userRef, {
        username: text
    })

    dispatch(setUser({...userState, username: text}))
})