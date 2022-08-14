import { SortType } from './../../../pages/Home/Main/components/Filtration/Sort/Sort';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParsedQs } from 'qs';
import SortEnum from '../../../constants/sortFilters'

type FilterSlice = {
    sort: SortType
    page: number
}

export type ParamsType = {
    _page: number
    _sort: string
    _order: string
}


const initialState:FilterSlice = {
    sort: {
        name: 'New → Old',
        property: SortEnum.DATE_DESC
    },
    page: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSort: (state:FilterSlice, action:PayloadAction<SortType>) => {
            state.sort = action.payload
        },
        setParamsUrl: (state: FilterSlice, action:PayloadAction<ParsedQs>) => {
            state.page = Number(action.payload._page)
            state.sort.name = (action.payload._order === 'asc' ? (action.payload._sort === 'price' ? 'Low → High' : 'Old → New') : (action.payload._sort === 'price' ? 'High → Low' : 'New → Old')) as string
            state.sort.property = (action.payload._order === 'asc' ? action.payload._sort : '-' + action.payload.sort) as SortEnum
    }
}})

export const { setSort, setParamsUrl } = filterSlice.actions

export default filterSlice.reducer