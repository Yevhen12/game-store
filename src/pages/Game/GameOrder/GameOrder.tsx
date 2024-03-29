import React, { useState } from 'react'
import { stylesButton1, stylesButton2, stylesFont1, stylesFont2, stylesButton3, stylesFont3, favoriteStyle1, favoriteStyle2 } from './stylesDiferentSizes'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import GoHomeButton from '../../../components/GoHomeButton/GoHomeButton'
import OrderButton from '../OrderButton/OrderButton'
import styles from './styles.module.scss'
import Favorite from '../../../components/Favorite/Favorite'
import Loader from '../../../components/Loader/Loader'
import useWindowSize from '../../../helpers/hooks/useWindowSize'


type ObjectStyle = {
    fontSize: string,
    height: string,
    width: string,
}

type TextStyle = {
    height: string,
    fontWeigth: string,
    fontSize: string,
    color: string,
    textAlign: string,
}
type FavoriteStyle = {
    height: string,
}

const GameOrder = () => {

    const currentGame = useAppSelector(state => state.games.currentGame)
    const navigate = useNavigate()
    const { innerWidth } = useWindowSize()

    let objectStyle:ObjectStyle | {} = {};
    let textStyle:TextStyle | {} = {};
    let favotiteStyles:FavoriteStyle | {} = {};

    if(innerWidth > 1200) {
        objectStyle = stylesButton1
        textStyle = stylesFont1
        favotiteStyles = favoriteStyle1
    } else if (innerWidth < 1200 && innerWidth > 700) {
        objectStyle = stylesButton2
        textStyle = stylesFont2
    } else if (innerWidth < 700) {
        objectStyle = stylesButton3
        textStyle = stylesFont3
        favotiteStyles = favoriteStyle2
    }

    console.log(favotiteStyles)





    if (!currentGame) {
        return <div className={styles.loader_block}>
            <Loader height='200px' width='200px' />
        </div>
    }
    return (
        <div className={styles.image_block} style={{ background: `url(${currentGame.thumbnail}) center`, backgroundSize: 'cover' }}>
            <div className={styles.blur}></div>
            <div className={styles.block}>
                <div className={styles.block_image_header}>
                    <GoHomeButton text='Go back' funcNavigateTo={() => navigate('/')} />
                    <Favorite styleObject={favotiteStyles} game={currentGame} />
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
                                Created by {currentGame.developer}
                            </p>
                        </div>
                        <div className={styles.inner_block_rigth}>
                            <OrderButton
                                text={`Order € ${currentGame.price}`}
                                gameId={Number(currentGame.id)}
                                objectStyle={objectStyle}
                                textStyle={textStyle}
                            />
                            <p className={styles.releaseDate}>Release date: {currentGame.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GameOrder)