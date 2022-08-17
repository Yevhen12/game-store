import { ParsedQs } from 'qs';
import { fetchGames } from './thunks/fetchGames';
import { StatusType } from './../userSlice/userSlice';
import { IGameItem } from './../../../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GamesSlice = {
    games: IGameItem[]
    allGames: IGameItem[]
    status: StatusType
}

const initialState: GamesSlice = {
    games: [],
    allGames: [],
    status: null,
}

export const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGames: (state: GamesSlice, action: PayloadAction<IGameItem[]>) => {
            state.games = action.payload
        },
        setAllFilteredGames: (state: GamesSlice, action: PayloadAction<IGameItem[]>) => {
            state.allGames = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchGames.pending, (state: GamesSlice) => {
            state.status = 'loading'
        })
        builder.addCase(fetchGames.fulfilled, (state: GamesSlice) => {
            state.status = 'success'
        })
        builder.addCase(fetchGames.rejected, (state: GamesSlice) => {
            state.status = 'rejected'
        })
    }
})

export const { setGames, setAllFilteredGames } = gameSlice.actions

export default gameSlice.reducer