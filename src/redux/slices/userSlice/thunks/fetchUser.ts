import { IUser } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { setUser } from "../userSlice";

export const fetchUser = createAsyncThunk('user/fetchUser', async (uid: string, { dispatch }) => {
    const docUser = doc(db, 'users', uid)

    const dataUser = await getDoc(docUser)

    const userToFetch = dataUser.data()

    if (userToFetch) {
        dispatch(setUser(userToFetch as IUser))
    }

})