import React, { useRef } from 'react'
import styles from './styles.module.scss'
import Search from './Search/Search'
import PagesRoutes from '../../../../../constants/pagesRoutes'
import { useNavigate, useParams } from 'react-router-dom'


const Header: React.FC = () => {

    // platstationStore | latest | History | Browse
    const ref = useRef<HTMLInputElement>(null)
    const { gameId } = useParams()
    const navigate = useNavigate()

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
                    <li>
                        History
                    </li>
                    <li onClick={hendleInput}>
                        Browse
                    </li>
                </ul>
            </nav>
            {!gameId && <Search refInput={ref} />}
        </header>
    )
}

export default Header
