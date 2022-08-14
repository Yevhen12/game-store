import { IGameItem } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setGames } from '../gameSlice';
import { ParamsType } from '../../../../pages/Home/Main/Main';


export const fetchGames = createAsyncThunk('games/fetchGames', async (params:ParamsType, { dispatch }) => {

    const {sort, currentPage} = params
    const isDesc:boolean = sort.property.includes('-')
    const sortPropery:string = isDesc ? sort.property.substring(1) : sort.property

    const order:string = isDesc ? 'desc' : 'asc'

    const url = `http://localhost:3000/games?_sort=${sortPropery}&_order=${order}&_page=${currentPage}&_limit=18`

    const { data } = await axios.get<IGameItem[]>(url)
    data.forEach(async (elem) => {
        const gameDoc = doc(db, 'games', elem.id)
        await setDoc(gameDoc, elem)
    })

    dispatch(setGames(data))
})