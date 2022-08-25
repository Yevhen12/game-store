import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCurrentGame } from '../../redux/slices/gameSlice/thunks/getCurrentGame'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import Loading from '../Loading/Loading'
import styles from './styles.module.scss'
import GameOrder from './GameOrder/GameOrder'

const GamePage: React.FC = () => {

    const currentGame = useAppSelector(state => state.games.currentGame)
    const gameState = useAppSelector(state => state.games)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { gameId } = useParams()
    
    useEffect(() => {
        if (gameId) {
            const getGame = async () => {
                dispatch(await getCurrentGame(gameId))
            }
            getGame()
        }

    }, [gameId, dispatch])

    if (gameState.status === 'loading' || !currentGame) {
        return <Loading />
    }


    return (
        <div className={styles.block_game}>
            <GameOrder />
        </div>
    )
}

export default GamePage
