import { SortType, sortArray } from './../../../pages/Home/Main/components/Filtration/Sort/Sort';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParsedQs } from 'qs';
import SortEnum from '../../../constants/sortFilters'

type FilterSlice = {
    sort: SortType
    page: number
    age: number | null
    genre: number | null
    price: number | null
    platform: number | null
    search: string | null
}

export type ParamsType = {
    page: number
    sort: string
    order: string
}


const initialState: FilterSlice = {
    sort: {
        name: 'New → Old',
        property: SortEnum.DATE_DESC
    },
    page: 1,
    age: null,
    genre: null,
    price: null,
    platform: null,
    search: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSort: (state: FilterSlice, action: PayloadAction<SortType>) => {
            state.sort = action.payload
        },
        setPage: (state: FilterSlice, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setAge: (state: FilterSlice, action: PayloadAction<number | null>) => {
            state.age = action.payload
        },
        setGenre: (state: FilterSlice, action: PayloadAction<number | null>) => {
            state.genre = action.payload
        },
        setPrice: (state: FilterSlice, action: PayloadAction<number | null>) => {
            state.price = action.payload
        },
        setPlatform: (state: FilterSlice, action: PayloadAction<number | null>) => {
            state.platform = action.payload
        },
        setSearch: (state: FilterSlice, action: PayloadAction<string | null>) => {
            state.search = action.payload
        },
        setParamsUrl: (state: FilterSlice, action: PayloadAction<ParsedQs>) => {
            state.page = Number(action.payload.page)
            state.sort = sortArray.find(elem => elem.property === action.payload.sort) as SortType
            state.genre = action.payload.genre !== null && action.payload.genre !== '' ? Number(action.payload.genre) : null
            state.age = action.payload.age !== null && action.payload.age !== '' ? Number(action.payload.age) : null
            state.platform = action.payload.platform !== null && action.payload.platform !== '' ? Number(action.payload.platform) : null
            state.price = action.payload.price !== null && action.payload.price !== '' ? Number(action.payload.price) : null
            state.search = action.payload.search !== null && action.payload.search !== '' ? String(action.payload.search) : null
        },
    }
})

export const { setSort, setParamsUrl, setPage, setAge, setGenre, setPrice, setPlatform, setSearch } = filterSlice.actions

export default filterSlice.reducer