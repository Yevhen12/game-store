import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import HistoryItem from './Items/HistoryItem'
import styles from './styles.module.scss'

const History: React.FC = () => {

  const userState = useAppSelector(state => state.user.user)
  console.log(userState.myGames)

  const mappedBougthGames:JSX.Element[] = userState.myGames.map((game, id) => <HistoryItem key={game.id} game={game} number={id} />)

  return (
    <div className={styles.history}>
      <p className={styles.history_text}>
        History
      </p>

      <div className={styles.history_block}>
        <div className={styles.list}>
          {mappedBougthGames}
        </div>
      </div>
    </div>
  )
}

export default History