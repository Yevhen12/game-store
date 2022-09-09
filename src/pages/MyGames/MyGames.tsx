import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Navigate, useNavigate } from 'react-router-dom'
import GameItem from '../Home/Main/components/GameItem/GameItem'
import styles from './styles.module.scss'
import { auth } from '../../firebase/firebaseConfig'
import PagesRoutes from '../../constants/pagesRoutes'
import SkeletonItem from '../Home/Main/components/GameItem/SkeletonItem'

const MyGames: React.FC = () => {

    const userState = useAppSelector(state => state.user.user)
    const userStatus = useAppSelector(state => state.user.status)
    const navigate = useNavigate()

    const mappedGames = userState.myGames.map(elem => <GameItem key={elem.id} {...elem} />)
    const skeletonGames = Array.from({ length: 6 }).fill(0).map((_, id) => <SkeletonItem key={id} />)



    if (!auth.currentUser) {
        return <Navigate to={`/${PagesRoutes.LOG_IN}`} />
    }

    return (
        <div className={styles.my_games}>
            <p className={styles.my_games_text}>
                My games
            </p>
            {userState.myGames.length > 0 ? (
                <>
                    <div className={styles.my_games_block}>
                        <div className={styles.list}>
                            {userStatus === 'loading' ? skeletonGames : mappedGames}
                        </div>
                    </div>
                </>
            ) :
                (
                    <>
                        {userStatus === 'loading' ? (
                            <div className={styles.list}>
                                {skeletonGames}
                            </div>
                        )
                            :
                            (
                                <div className={styles.empty_block}>
                                    <p className={styles.text}>You don't have any games!</p>
                                    <div className={styles.image_block}>
                                        <img alt='dont-know' src={process.env.PUBLIC_URL + '/images/dont-know.png'} className={styles.image} />
                                    </div>
                                    <div className={styles.btn_block}>
                                        <button type='button' onClick={() => navigate('/')} className={styles.btn}>
                                            Buy games
                                        </button>
                                    </div>
                                </div>
                            )
                        }

                    </>

                )
            }

        </div>
    )
}

export default React.memo(MyGames)