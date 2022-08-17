import React, { useRef, useEffect } from 'react'

import styles from './styles.module.scss'
import Header from './components/Header/Header'
import List from './components/List/List'
import Pagination from '../../../components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchGames } from '../../../redux/slices/gameSlice/thunks/fetchGames'
import { useNavigate } from 'react-router-dom'
import qs, { ParsedQs } from 'qs'
import { setParamsUrl } from '../../../redux/slices/filterSlice/filterSlice'
import Filtration from './components/Filtration/Filtration'
import { SortType } from './components/Filtration/Sort/Sort'
import setAllGames from '../../../firebase/games/setAllGames'


export type ParamsType = {
    page: number
    sort: SortType
    genre: number | null
    price: number | null
    age: number | null
    platform: number | null
    search: string | null
}

const Main: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const filterState = useAppSelector(state => state.filter)
    const { page, sort, genre, price, age, platform, search } = filterState
    const scroll = useRef<HTMLDivElement>(null)

    console.log(window.location.search)


    useEffect(() => {
        const getGames: () => Promise<void> = async () => {
            const paramsToGive: ParamsType = {
                page,
                sort,
                genre,
                price,
                age,
                platform,
                search,
            }
            dispatch(await fetchGames(paramsToGive))
        }

        getGames()

    }, [dispatch, page, sort, genre, price, age, platform, search])

    useEffect(() => {
        if (window.location.search) {
            const params: ParsedQs = qs.parse(window.location.search.substring(1))
            dispatch(setParamsUrl(params))
            console.log(params)
        }

        const setGamesFirebase = async () => {
            await setAllGames()
        }

        setGamesFirebase()
    }, [dispatch])

    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollIntoView({ block: 'start' })
        }
    }, [page])


    console.log(search)

    useEffect(() => {
        const params = qs.stringify(
            {
                sort: sort.property,
                genre,
                price,
                age,
                platform,
                search,
                page,
            }
        )

        console.log(params)

        navigate(`?${params}`)
    }, [page, sort, navigate, genre, price, age, platform, search])


    return (
        <main className={styles.section}>
            <div ref={scroll} className={styles.container}>
                <Header />
                <Filtration />
                <List />
                <Pagination />
            </div>
        </main>
    )
}

export default Main
