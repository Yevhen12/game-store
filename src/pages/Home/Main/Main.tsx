import React, { useRef, useEffect } from 'react'

import styles from './styles.module.scss'
import Header from './components/Header/Header'
import Pagination from '../../../components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchGames } from '../../../redux/slices/gameSlice/thunks/fetchGames'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import qs, { ParsedQs } from 'qs'
import { setParamsUrl } from '../../../redux/slices/filterSlice/filterSlice'
import Filtration from './components/Filtration/Filtration'
import { useLocation } from 'react-router-dom'
import { SortType } from './components/Filtration/Sort/Sort'
import setAllGames from '../../../firebase/games/setAllGames'
import homeRoutes from '../../../constants/homeRoutes'


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
    const user = useAppSelector(state => state.user.user)
    const { page, sort, genre, price, age, platform, search } = filterState
    const scroll = useRef<HTMLDivElement>(null)

    const { gameId } = useParams()
    const pathnameLocation = useLocation().pathname

    const isHistory = pathnameLocation.substring(1) === homeRoutes.HISTORY
    const isMyGames = pathnameLocation.substring(1) === homeRoutes.MY_GAMES
    const isFavorite = pathnameLocation.substring(1) === homeRoutes.FAVORITE



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
        }

        const setGamesFirebase = async () => {
            await setAllGames()
        }

        //setGamesFirebase()
    }, [dispatch])

    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollIntoView({ block: 'start' })
        }
    }, [page])

    useEffect(() => {
        if(!gameId && !isHistory && !isMyGames && !isFavorite) {
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
    
            navigate(`?${params}`)
        }
      
    }, [page, sort, navigate, genre, price, age, platform, search, gameId, isHistory, isMyGames, isFavorite])

    console.log(user)


    return (
        <main className={styles.section}>
            <div ref={scroll} className={styles.container}>
                <Header />
                {!gameId && !isHistory && !isMyGames && !isFavorite && <Filtration />}
                <Outlet />
                {!gameId && !isHistory && !isMyGames && !isFavorite && <Pagination />}
            </div>
        </main>
    )
}

export default React.memo(Main)
