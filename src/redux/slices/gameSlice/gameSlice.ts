import { fetchGames } from './thunks/fetchGames';
import { StatusType } from './../userSlice/userSlice';
import { IGameItem } from './../../../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentGame } from './thunks/getCurrentGame';

export type GamesSlice = {
    games: IGameItem[]
    allGames: IGameItem[]
    status: StatusType,
    currentGame: IGameItem | null
}

const initialState: GamesSlice = {
    games: [],
    allGames: [],
    status: null,
    currentGame: null
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
        },
        setCurrentGame: (state: GamesSlice, action: PayloadAction<IGameItem>) => {
            state.currentGame = action.payload
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
        builder.addCase(getCurrentGame.pending, (state: GamesSlice) => {
            state.status = 'loading'
        })
        builder.addCase(getCurrentGame.fulfilled, (state: GamesSlice) => {
            state.status = 'success'
        })
    }
})

export const { setGames, setAllFilteredGames, setCurrentGame } = gameSlice.actions

export default gameSlice.reducer