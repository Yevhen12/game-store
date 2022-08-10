import React from 'react'
import styles from './styles.module.scss'
import Search from './Search/Search'

const Header: React.FC = () => {

    // platstationStore | latest | History | Browse
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <img alt='store' src='/images/store_logo.png' />
                    </li>
                    <li>
                        Latest
                    </li>
                    <li>
                        History
                    </li>
                    <li>
                        Browse
                    </li>
                </ul>
            </nav>
            <Search />
        </header>
    )
}

export default Header
