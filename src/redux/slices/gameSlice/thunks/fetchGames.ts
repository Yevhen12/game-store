import { IGameItem } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setGames } from '../gameSlice';


export const fetchGames = createAsyncThunk('games/fetchGames', async (currentPage:number, { dispatch }) => {

    const url = `https://62ebd6ad705264f263e19b92.mockapi.io/items?p=${currentPage}&l=18`
    console.log(currentPage)

    const { data } = await axios.get<IGameItem[]>(url)
    data.forEach(async (elem) => {
        const gameDoc = doc(db, 'games', elem.id)
        await setDoc(gameDoc, elem)
    })

    dispatch(setGames(data))
})