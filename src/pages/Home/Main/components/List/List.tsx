import React from 'react'
import styles from './styles.module.scss'
import GameItem from '../GameItem/GameItem'
import { useAppSelector } from '../../../../../redux/hooks'
import { IGameItem } from '../../../../../interfaces/interfaces'

const List: React.FC = () => {

    const games: IGameItem[] = useAppSelector(state => state.games.games)

    const mapGamesArray: JSX.Element[] = games.map(elem => <GameItem key={elem.id} {...elem} />)
    return (
        <>
            <div className={styles.list}>
                {mapGamesArray}
            </div>
        </>
    )

}

export default List
