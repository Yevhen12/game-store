import React, {useRef, useEffect} from 'react'

import styles from './styles.module.scss'
import Header from './components/Header/Header'
import List from './components/List/List'
import Pagination from '../../../components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchGames } from '../../../redux/slices/gameSlice/thunks/fetchGames'
import qs from 'qs'

const Main: React.FC = () => {

    const dispatch = useAppDispatch()
    const currentPage: number = useAppSelector(state => state.games.page)
    const scroll = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const getGames: () => Promise<void> = async () => {
            dispatch(await fetchGames(currentPage))
        }

        getGames()

    }, [dispatch, currentPage])

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

        console.log(params)
    }, [currentPage])


    return (
        <main className={styles.section}>
            <div ref={scroll} className={styles.container}>
                <Header />
                <div className={styles.block}></div>
                <List />
                <Pagination />
            </div>
        </main>
    )
}

export default Main
