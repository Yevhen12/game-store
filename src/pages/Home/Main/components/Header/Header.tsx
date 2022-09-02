import React, { useRef } from 'react'
import styles from './styles.module.scss'
import Search from './Search/Search'
import PagesRoutes from '../../../../../constants/pagesRoutes'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import homeRoutes from '../../../../../constants/homeRoutes'


const Header: React.FC = () => {

    // platstationStore | latest | History | Browse
    const ref = useRef<HTMLInputElement>(null)
    const { gameId } = useParams()
    const navigate = useNavigate()

    const pathnameLocation = useLocation().pathname

    const isHistory = pathnameLocation.substring(1) === homeRoutes.HISTORY

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
                        <img alt='store' src='/images/store_logo.png' />
                    </li>
                    <li>
                        Latest
                    </li>
                    <li onClick={() => navigate(homeRoutes.HISTORY)}>
                        History
                    </li>
                    <li onClick={hendleInput}>
                        Browse
                    </li>
                </ul>
            </nav>
            {!gameId && !isHistory && <Search refInput={ref} />}
        </header>
    )
}

export default Header
