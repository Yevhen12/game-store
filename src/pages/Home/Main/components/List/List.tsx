import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import GameItem from '../GameItem/GameItem'
import { fetchGames } from '../../../../../redux/slices/gameSlice/thunks/fetchGames'
import { useAppSelector } from '../../../../../redux/hooks'
import { useAppDispatch } from '../../../../../redux/hooks'
import { IGameItem } from '../../../../../interfaces/interfaces'

const List: React.FC = () => {

    const dispatch = useAppDispatch()
    const games: IGameItem[] = useAppSelector(state => state.games.games)

    console.log(games)

    useEffect(() => {
        if (!games.length) {
            const getGames: () => Promise<void> = async () => {
                dispatch(await fetchGames())
            }
            getGames()
        }
        
    }, [dispatch])

    const mapGamesArray: JSX.Element[] = games.map(elem => <GameItem key={elem.id} {...elem} />)
    return (
        <div className={styles.list}>
            {mapGamesArray}
        </div>
    )
}

export default List
