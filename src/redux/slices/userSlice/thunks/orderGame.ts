import { IBougthGame, IGameItem } from '../../../../interfaces/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { setUser } from '../userSlice';


export const orderGame = createAsyncThunk('user/orderGame', async (game: IGameItem, { dispatch, getState }) => {

    const currentUser = (getState() as RootState).user.user

    const userDoc = doc(db, 'users', currentUser.uid)

    let newArrayMyGames: IBougthGame[] = [...currentUser.myGames, { ...game, bougthAt: new Date().toLocaleDateString() }];
    let newArrayPurchaseGames: IBougthGame[] = [...currentUser.purchasesList, { ...game, bougthAt: new Date().toLocaleDateString() }];

    await updateDoc(userDoc, {
        myGames: newArrayMyGames,
        purchasesList: newArrayPurchaseGames,
    })


    dispatch(setUser({ ...currentUser, myGames: newArrayMyGames, purchasesList: newArrayPurchaseGames }))

})