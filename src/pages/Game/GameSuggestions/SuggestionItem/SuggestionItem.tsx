import React from 'react'
import { IGameItem } from '../../../../interfaces/interfaces'
import OrderButton from '../../OrderButton/OrderButton'
import styles from './styles.module.scss'

type PropsType = {
    game: IGameItem
}

const SuggestionItem: React.FC<PropsType> = ({ game }) => {

    return (
        <div className={styles.block}>
            <img alt='gamePhoto' src={game.thumbnail} className={styles.image} />
            <p className={styles.title}>{game.title}</p>
            <p className={styles.genre}>{game.genre}</p>
            <p className={styles.platform}>{game.platform}</p>
            <div>
                <OrderButton 
                gameId={Number(game.id)}
                text={`Order € ${game.price}`} 
                objectStyle={{ fontSize: '15px', height: '35px', width: '150px', borderRadius: '6px' }}
                textStyle={{ color: 'white', fontSize: '16px', fontWeigth: '500', height: '40px' }}
                />
            </div>
        </div>
    )
}

export default SuggestionItem