import React from 'react'
import { IGameItem } from '../../interfaces/interfaces'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { hendleFavorites } from '../../redux/slices/userSlice/thunks/hendleFavorites'
import { auth } from '../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import PagesRoutes from '../../constants/pagesRoutes'
import styles from './styles.module.scss'

type PropsType = {
    styleObject: object,
    game: IGameItem
}

const Favorite: React.FC<PropsType> = ({ styleObject, game }) => {

    const currentUser = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isFavorite = currentUser.favoriteGames.some(elem => elem.id === game.id)

    const toggleFavorite = async (e:any) => {
        if(!auth.currentUser) {
            navigate(`/${PagesRoutes.LOG_IN}`)
            return
        }
        e.stopPropagation()
        await dispatch(hendleFavorites(game))
    }

    return (
        <img
            alt="like"
            className={styles.favorite}
            src={`${process.env.PUBLIC_URL + (isFavorite ? '/images/favorite-red-icon.png' : '/images/favorite.png')}`}
            style={styleObject}
            onClick = {toggleFavorite}
        />
    )
}

export default React.memo(Favorite)