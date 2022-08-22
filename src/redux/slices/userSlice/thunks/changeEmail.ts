import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../../store"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../../firebase/firebaseConfig"
import { setUser } from "../userSlice"

export const changeEmail = createAsyncThunk('user/changeEmail', async (text:string, { dispatch, getState }) => {

    const userState = (getState() as RootState).user.user

    const userRef = doc(db, 'users', userState.uid)

    await updateDoc(userRef, {
        email: text
    })

    dispatch(setUser({...userState, email: text}))
})