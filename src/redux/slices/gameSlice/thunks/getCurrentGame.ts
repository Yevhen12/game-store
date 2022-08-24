import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setCurrentGame } from '../gameSlice';
import { IGameItem } from '../../../../interfaces/interfaces';


export const getCurrentGame = createAsyncThunk('games/getCurrentGame', async (id: string, { dispatch }) => {
    const gameDoc = doc(db, 'games', id)

    const gameData = await getDoc(gameDoc)

    const gameToGet = gameData.data()

    if (gameToGet) {
        dispatch(setCurrentGame(gameToGet as IGameItem))
    }
})