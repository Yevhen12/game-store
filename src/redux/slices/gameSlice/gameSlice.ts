import { fetchGames } from './thunks/fetchGames';
import { StatusType } from './../userSlice/userSlice';
import { IGameItem } from './../../../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GamesSlice = {
    games: IGameItem[]
    status: StatusType
}

const initialState = {
    games:[],
    status: null,
}

export const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGames: (state:GamesSlice, action:PayloadAction<IGameItem[]>) => {
            state.games = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchGames.pending, (state:GamesSlice) => {
            state.status = 'loading'
        })
        builder.addCase(fetchGames.fulfilled, (state:GamesSlice) => {
            state.status = 'success'
        })
        builder.addCase(fetchGames.rejected, (state:GamesSlice) => {
            state.status = 'rejected'
        })
    }
})

export const { setGames } = gameSlice.actions

export default gameSlice.reducer