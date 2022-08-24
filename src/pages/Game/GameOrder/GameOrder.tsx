import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import GoHomeButton from '../../../components/GoHomeButton/GoHomeButton'
import OrderButton from '../OrderButton/OrderButton'
import styles from './styles.module.scss'

const GameOrder = () => {

    const currentGame = useAppSelector(state => state.games.currentGame)
    const navigate = useNavigate()
    if(!currentGame) {
        return <p>Loading...</p>
    }
    return (
        <div className={styles.image_block} style={{ background: `url(${currentGame.thumbnail}) center`, backgroundSize: 'cover' }}>
            <div className={styles.blur}></div>
            <div className={styles.block}>
                <div className={styles.block_image_header}>
                    <GoHomeButton text='Go back' funcNavigateTo={() => navigate(-1)} />
                    <div>
                        <img alt='favorite' src='/images/favorite.png' />
                    </div>
                </div>
                <div className={styles.block_buy}>
                    <div className={styles.inner_block}>
                        <div className={styles.inner_block_left}>
                            <div className={styles.platform}>
                                <p className={styles.platfrom_text}>{currentGame.platform}</p>
                            </div>
                            <p className={styles.title}>
                                {currentGame.title}
                            </p>
                            <p className={styles.short_desc}>
                                Created by {currentGame.publisher}
                            </p>
                        </div>
                        <div className={styles.inner_block_rigth}>
                            <OrderButton text={`Pre-order € ${currentGame.price}`} gameId={Number(currentGame.id)} objectStyle={{ fontSize: '24px', height: '60px', width: '290px' }} />
                            <p className={styles.releaseDate}>Release date: {currentGame.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameOrder