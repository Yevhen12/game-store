import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import GameItem from '../GameItem/GameItem'
import { fetchGames } from '../../../../../redux/slices/gameSlice/thunks/fetchGames'
import { useAppSelector } from '../../../../../redux/hooks'
import { useAppDispatch } from '../../../../../redux/hooks'
import { IGameItem } from '../../../../../interfaces/interfaces'

const List: React.FC = () => {

    const dispatch = useAppDispatch()
    const games: IGameItem[] = useAppSelector(state => state.games.games)
    const currentPage: number = useAppSelector(state => state.games.page)


    useEffect(() => {
        const getGames: () => Promise<void> = async () => {
            console.log('dfdsfdsfs')
            dispatch(await fetchGames(currentPage))
        }
        getGames()

    }, [dispatch, currentPage])

    const mapGamesArray: JSX.Element[] = games.map(elem => <GameItem key={elem.id} {...elem} />)
    return (
        <div className={styles.list}>
            {mapGamesArray}
        </div>
    )
}

export default List
