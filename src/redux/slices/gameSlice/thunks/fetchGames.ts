import { IGameItem } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { url } from "../../../../constants/gameURL"
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setGames } from '../gameSlice';


export const fetchGames = createAsyncThunk('games/fetchGames', async (_, { dispatch }) => {
    const { data } = await axios.get<IGameItem[]>(url)

    data.forEach(async (elem) => {
        const gameDoc = doc(db, 'games', elem.id)
        await setDoc(gameDoc, elem)
    })

    dispatch(setGames(data))
})