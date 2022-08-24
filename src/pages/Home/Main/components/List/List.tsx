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
            {
                games.length > 0 ?
                    (
                        <div className={styles.list}>
                            {mapGamesArray}
                        </div>
                    ) :
                    (
                        <div className={styles.no_results}>
                            <p className={styles.text}>There are no results!</p>
                            <img src='/images/sad-face-icon.png' alt='sad' className={styles.sad}/>
                        </div>
                    )
            }
        </>
    )

}

export default List
