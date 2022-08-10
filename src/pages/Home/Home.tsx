import React from 'react'
import Header from '../../components/Header/Header'
import Main from './Main/Main'
import styles from './styles.module.scss'

const Home: React.FC = () => {

    return (
        <div className={styles.main}>
            <Header />
            <Main />
        </div>
    )
}

export default Home
