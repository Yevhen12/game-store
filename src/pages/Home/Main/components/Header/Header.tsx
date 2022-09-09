import React, { useRef } from 'react'
import styles from './styles.module.scss'
import Search from './Search/Search'
import PagesRoutes from '../../../../../constants/pagesRoutes'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import homeRoutes from '../../../../../constants/homeRoutes'
import useWindowSize from '../../../../../helpers/hooks/useWindowSize'


const Header: React.FC = () => {

    // platstationStore | latest | History | Browse
    const ref = useRef<HTMLInputElement>(null)
    const { gameId } = useParams()
    const navigate = useNavigate()

    const pathnameLocation = useLocation().pathname

    const isHistory = pathnameLocation.substring(1) === homeRoutes.HISTORY
    const isMyGames = pathnameLocation.substring(1) === homeRoutes.MY_GAMES
    const isFavorite = pathnameLocation.substring(1) === homeRoutes.FAVORITE

    const { innerWidth } = useWindowSize()


    const hendleInput: () => void = () => {
        if (ref.current) {
            ref.current.focus()
        }
    }


    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li onClick={() => navigate(PagesRoutes.HOME)}>
                        <img alt='store' src='/images/store_logo.png' className={styles.img} />
                    </li>
                    <li onClick={() => navigate(homeRoutes.MY_GAMES)}>
                        My games
                    </li>
                    <li onClick={() => navigate(homeRoutes.HISTORY)}>
                        History
                    </li>
                    <li onClick={hendleInput}>
                        Browse
                    </li>
                </ul>
            </nav>
            {!gameId && !isHistory && !isMyGames && !isFavorite && innerWidth > 900 && <Search refInput={ref} />}
        </header>
    )
}

export default React.memo(Header)
