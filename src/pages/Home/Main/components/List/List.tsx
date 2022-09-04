import React from 'react'
import styles from './styles.module.scss'
import GameItem from '../GameItem/GameItem'
import { useAppSelector } from '../../../../../redux/hooks'
import { IGameItem } from '../../../../../interfaces/interfaces'
import SkeletonItem from '../GameItem/SkeletonItem'
import 'react-loading-skeleton/dist/skeleton.css'

const List: React.FC = () => {

    const games: IGameItem[] = useAppSelector(state => state.games.games)
    const gamesStatus = useAppSelector(state => state.games.status)
    const isSearch = useAppSelector(state => state.loading.searching)

    const skeletonGames = Array.from({ length: 18 }).fill(0).map((_, id) => <SkeletonItem key={id} />)

    const mapGamesArray: JSX.Element[] = games.map(elem => <GameItem key={elem.id} {...elem} />)

    return (
        <>
            {
                games.length > 0 ?
                    (
                        <div className={styles.list}>
                            {gamesStatus === 'loading' || isSearch ? skeletonGames : mapGamesArray}
                        </div>
                    ) :
                    (
                        <>
                            {gamesStatus === 'loading' || isSearch ? (
                                <div className={styles.list}>
                                    {gamesStatus === 'loading' && skeletonGames}
                                </div>
                            ) :
                                (
                                    <div className={styles.no_results}>
                                        <p className={styles.text}>There are no results!</p>
                                        <img src='/images/sad-face-icon.png' alt='sad' className={styles.sad} />
                                    </div>
                                )
                            }
                        </>
                    )
            }
        </>
    )

}

export default React.memo(List)
