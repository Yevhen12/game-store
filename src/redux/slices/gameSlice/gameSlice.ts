import { fetchGames } from './thunks/fetchGames';
import { StatusType } from './../userSlice/userSlice';
import { IGameItem } from './../../../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GamesSlice = {
    games: IGameItem[]
    page: number
    status: StatusType
}


const initialState:GamesSlice = {
    games:[],
    page: 1,
    status: null,
}

export const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGames: (state:GamesSlice, action:PayloadAction<IGameItem[]>) => {
            state.games = action.payload
        },
        setPage: (state:GamesSlice, action:PayloadAction<number>) => {
            state.page = action.payload
        }
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

export const { setGames, setPage } = gameSlice.actions

export default gameSlice.reducer