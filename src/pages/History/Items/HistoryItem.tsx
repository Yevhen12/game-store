import { IBougthGame } from '../../../interfaces/interfaces'
import React from 'react'
import styles from './styles.module.scss'

type PropsType = {
    game: IBougthGame
    number: number
}

const HistoryItem: React.FC<PropsType> = ({ game, number }) => {
    return (
        <div className={styles.block}>
            <div className={styles.number}>
                <p>{number + 1}</p>
            </div>
            <div className={styles.game_block}>
                <img alt='gamePhoto' src={game.thumbnail} className={styles.image} />
                <div className={styles.game_info}>
                    <p className={styles.name}>{game.title}</p>
                    <div className={styles.additional_info}>
                        <p className={styles.platform}>
                            {game.platform}
                        </p>
                        <p className={styles.genre}>
                            {game.genre}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.game_date}>
                <p className={styles.date_text}>
                    {game.bougthAt}
                </p>
            </div>
        </div>
    )
}

export default HistoryItem