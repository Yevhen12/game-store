import { IGameItem } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setUser } from '../userSlice';


export const hendleFavorites = createAsyncThunk('user/hendleFavorites', async (game: IGameItem, { dispatch, getState }) => {

    const currentUser = (getState() as RootState).user.user
    const isFavorite = currentUser.favoriteGames.some(elem => elem.id === game.id)

    const userDoc = doc(db, 'users', currentUser.uid)

    let newArray:IGameItem[];
    if (isFavorite) {
        newArray = currentUser.favoriteGames.filter(obj => obj.id !== game.id)
    } else {
        newArray = [...currentUser.favoriteGames, game]
    }
    await updateDoc(userDoc, {
        favoriteGames: newArray
    })

    dispatch(setUser({ ...currentUser, favoriteGames: newArray }))


})