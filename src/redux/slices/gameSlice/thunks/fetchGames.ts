import { IGameItem } from './../../../../interfaces/interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setGames, setAllFilteredGames } from '../gameSlice';
import { ParamsType } from '../../../../pages/Home/Main/Main';
import { genreArray, priceArray, ageArray, platfromArray } from '../../../../pages/Home/Main/components/Filtration/FilterForm/FilterForm';


export const fetchGames = createAsyncThunk('games/fetchGames', async (params: ParamsType, { dispatch }) => {

    const { sort, page, genre, price, age, platform, search } = params
    const isDesc: boolean = sort.property.includes('-')
    const sortPropery: string = isDesc ? sort.property.substring(1) : sort.property

    const order = isDesc ? 'desc' : 'asc'

    const isGenre = genre !== null
    const isPrice = price !== null
    const isAge = age !== null
    const isPlatform = platform !== null
    const isSearch = search !== null

    const filterByGenre = isGenre ? `&genre=${genreArray[genre]}` : ''
    const filterByPlatform = isPlatform ? `&platform=${platfromArray[platform]}` : ''


    const splitArray = isPrice && priceArray[price].split('-')
    const filterByPrice = splitArray ? `&price_gte=${parseInt(splitArray[0]).toFixed(2)}&price_lte=${parseInt(splitArray[1]).toFixed(2)}` : ''
    
    const numberedAgeArray = ageArray.map(elem => parseInt(elem))

    const maxGameAge = Math.max(...numberedAgeArray)
    const filterByAge = isAge ? `&age_gte=${parseInt(ageArray[age])}&age_lte=${maxGameAge}` : ''
    const filterBySearch = isSearch ? `&title_like=${search}` : ''

    const urlWithPagination = `http://localhost:3001/games?_sort=${sortPropery}&_order=${order}${filterByGenre}${filterByPrice}${filterByAge}${filterByPlatform}${filterBySearch}&_page=${page}&_limit=18`
    const urlAllFilteredGames = `http://localhost:3001/games?_sort=${sortPropery}&_order=${order}${filterByGenre}${filterByPrice}${filterByAge}${filterByPlatform}${filterBySearch}`

    const { data } = await axios.get<IGameItem[]>(urlWithPagination)

    const allGamesFiltered =(await axios.get<IGameItem[]>(urlAllFilteredGames)).data
    dispatch(setAllFilteredGames(allGamesFiltered))
    dispatch(setGames(data))
})