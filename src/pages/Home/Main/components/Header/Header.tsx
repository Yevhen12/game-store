import React, { useRef } from 'react'
import styles from './styles.module.scss'
import Search from './Search/Search'

const Header: React.FC = () => {

    // platstationStore | latest | History | Browse
    const ref = useRef<HTMLInputElement>(null)

    const hendleInput:() => void = () => {
        if(ref.current) {
            ref.current.focus()
        }
    }
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
                    <li onClick={hendleInput}>
                        Browse
                    </li>
                </ul>
            </nav>
            <Search refInput={ref} />
        </header>
    )
}

export default Header
