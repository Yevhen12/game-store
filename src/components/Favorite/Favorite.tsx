import React from 'react'
import { IGameItem } from '../../interfaces/interfaces'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { hendleFavorites } from '../../redux/slices/userSlice/thunks/hendleFavorites'
import styles from './styles.module.scss'

type PropsType = {
    styleObject: object,
    game: IGameItem
}

const Favorite: React.FC<PropsType> = ({ styleObject, game }) => {

    const currentUser = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const isFavorite = currentUser.favoriteGames.some(elem => elem.id === game.id)

    const toggleFavorite = async (e:any) => {
        e.stopPropagation()
        await dispatch(hendleFavorites(game))
    }

    return (
        <img
            alt="like"
            className={styles.favorite}
            src={`${isFavorite ? '/images/favorite-red-icon.png' : '/images/favorite.png'}`}
            style={styleObject}
            onClick = {toggleFavorite}
        />
    )
}

export default React.memo(Favorite)