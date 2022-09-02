import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentGame } from '../../redux/slices/gameSlice/thunks/getCurrentGame'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import Loading from '../Loading/Loading'
import styles from './styles.module.scss'
import GameOrder from './GameOrder/GameOrder'
import GameSuggestions from './GameSuggestions/GameSuggestions'
import GameText from './GameText/GameText'

const GamePage: React.FC = () => {

    const currentGame = useAppSelector(state => state.games.currentGame)
    const gameState = useAppSelector(state => state.games)
    const dispatch = useAppDispatch()

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
            <GameText />
            <GameSuggestions />
        </div>
    )
}

export default GamePage
