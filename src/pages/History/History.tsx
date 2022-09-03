import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import ClearHistory from './ClearHistory/ClearHistory'
import { Navigate, useNavigate } from 'react-router-dom'
import HistoryItem from './Items/HistoryItem'
import styles from './styles.module.scss'
import { auth } from '../../firebase/firebaseConfig'
import PagesRoutes from '../../constants/pagesRoutes'

const History: React.FC = () => {

  const userState = useAppSelector(state => state.user.user)
  const navigate = useNavigate()
  console.log(userState.myGames)

  const mappedBougthGames: JSX.Element[] = userState.purchasesList.map((game, id) => <HistoryItem key={game.id} game={game} number={id} />)

  if(!auth.currentUser) {
    return <Navigate to={`/${PagesRoutes.LOG_IN}`} />
  }

  return (
    <div className={styles.history}>
      <p className={styles.history_text}>
        History
      </p>
      {userState.purchasesList.length > 0 ? (
        <>
          <div className={styles.history_block}>
            <div className={styles.list}>
              {mappedBougthGames}
            </div>
          </div>

          <ClearHistory />
        </>
      ) :
        (
          <div className={styles.empty_block}>
            <p className={styles.text}>You don't have history!</p>
            <div className={styles.image_block}>
              <img alt='dont-know' src='/images/dont-know.png' className={styles.image} />
            </div>
            <div className={styles.btn_block}>
              <button type='button' onClick={() => navigate('/')} className={styles.btn}>
                Buy games
              </button>
            </div>
          </div>

        )
      }



    </div>
  )
}

export default History