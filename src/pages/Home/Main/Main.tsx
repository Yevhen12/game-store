import React, {useRef, useEffect} from 'react'

import styles from './styles.module.scss'
import Header from './components/Header/Header'
import List from './components/List/List'
import Pagination from '../../../components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchGames } from '../../../redux/slices/gameSlice/thunks/fetchGames'
import { useNavigate } from 'react-router-dom'
import qs, { ParsedQs } from 'qs'
import { setParamsUrl } from '../../../redux/slices/gameSlice/gameSlice'
import Filtration from './components/Filtration/Filtration'

const Main: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const currentPage: number = useAppSelector(state => state.games.page)
    const scroll = useRef<HTMLDivElement>(null)

    console.log(window.location.search)


    useEffect(() => {
        const getGames: () => Promise<void> = async () => {
            dispatch(await fetchGames(currentPage))
        }

        getGames()

    }, [dispatch, currentPage])

    useEffect(() => {
        if(window.location.search) {
            const params:ParsedQs = qs.parse(window.location.search.substring(1))
            dispatch(setParamsUrl(params))
           console.log(params)
        }
        
    }, [dispatch])

    useEffect(() => {
        if(scroll.current) {
            scroll.current.scrollIntoView({block: 'start'})
        }
    }, [currentPage])


    useEffect(() => {
        const params = qs.stringify(
            {
                p:currentPage
            }
        )

       navigate(`?${params}`)
    }, [currentPage, navigate])


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
