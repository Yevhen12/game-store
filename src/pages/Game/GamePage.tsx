import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IGameItem } from '../../interfaces/interfaces'

const GamePage: React.FC = () => {

    const [game, setGame] = useState<IGameItem>(
        {
            developer: '',
            freetogame_profile_url: '',
            game_url: '',
            genre: '',
            id: '',
            platform: '',
            price: '',
            publisher: '',
            release_date: '',
            short_description: '',
            thumbnail: '',
            title: '',
        }
    )
    const { gameId } = useParams()
    console.log(gameId)

    useEffect(() => {
        if (gameId) {
            const getGame = async () => {
                const gameDoc = doc(db, 'games', gameId)

                const gameData = await getDoc(gameDoc)

                const gameToGet = gameData.data()
                if (gameToGet) {
                    setGame(gameToGet as IGameItem)
                }
            }
            getGame()
        }

    }, [gameId])

    return (
        <h1>
            {game.title}
        </h1>
    )
}

export default GamePage
