import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ReusebleModal from '../../../components/Modals/ReusebleModal/ReusebleModal'
import { IGameItem } from '../../../interfaces/interfaces'
import getGameToOrder from '../../../firebase/games/getGameToOrder'
import { useAppDispatch } from '../../../redux/hooks'
import { orderGame } from '../../../redux/slices/userSlice/thunks/orderGame'

type PropsType = {
    gameId: number
}

const OrderModal: React.FC<PropsType> = ({ gameId }) => {
    const [currentGame, setCurrentGame] = useState<IGameItem | null>(null)
    const [activeBtn, setActiveBtn] = useState(true)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)

    const dispatch = useAppDispatch()


    useEffect(() => {
        const getGame = async () => {
            const game = await getGameToOrder(gameId)
            if (game) {
                setCurrentGame(game)
            }
        }

        getGame()
    }, [gameId])

    const buyGame = () => {
        setActiveBtn(false)
        setTimeout(async () => {
            if (currentGame) {
                dispatch(await orderGame(currentGame))
                setShowSuccess(true)
            }
        }, 2000)
    }


    return (
        <ReusebleModal width='450px'>
            {!currentGame ?
                (
                    <p>Loading...</p>
                ) :
                (
                    showSuccess ?
                        (
                            <div className={styles.gif}>
                                <img alt='success' src='/images/success.gif' />
                                <p>Success order!</p>
                            </div>
                        )
                        :
                        (
                            <>
                                <div className={styles.headerBlock}>
                                    <p className={styles.header}>Order Game</p>
                                </div>
                                <div className={styles.game}>
                                    <div className={styles.gameLeft}>
                                        <img alt='gamePhoto' src={currentGame.thumbnail} className={styles.gamePhoto} />
                                        <div className={styles.gameTitle}>
                                            <p className={styles.gameTitle}>{currentGame.title}</p>
                                        </div>
                                    </div>
                                    <div className={styles.gameRigth}>
                                        € {currentGame.price}
                                    </div>
                                </div>

                                <div className={styles.buttons}>
                                    <button onClick={buyGame} disabled={!activeBtn} className={`${styles.orderBtn} ${activeBtn ? styles.active : styles.hidden}`}>
                                        Order
                                    </button>
                                </div>
                            </>
                        )

                )
            }

        </ReusebleModal>
    )
}

export default OrderModal