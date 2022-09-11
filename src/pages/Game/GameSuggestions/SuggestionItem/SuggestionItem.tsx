import React from 'react'
import Button from './Button/Button'
import { IGameItem } from '../../../../interfaces/interfaces'
import { useNavigate } from 'react-router-dom'
import Favorite from '../../../../components/Favorite/Favorite'
import styles from './styles.module.scss'

type PropsType = {
    game: IGameItem
}

const SuggestionItem: React.FC<PropsType> = ({ game }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.block}>
            <div className={styles.block_flex}>
                <img onClick={() => navigate(`/games/${game.id}`)} alt='gamePhoto' src={game.thumbnail} className={styles.image} />
                <p onClick={() => navigate(`/games/${game.id}`)} className={styles.title}>{game.title}</p>
                <p className={styles.genre}>{game.genre}</p>
                <p className={styles.platform}>{game.platform}</p>
                <div className={styles.block_it}>
                    <div>
                        <Button text='More...' funcNavigateTo={() => navigate(`/games/${game.id}`)} />
                    </div>
                    <Favorite game={game} styleObject={{}} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(SuggestionItem)