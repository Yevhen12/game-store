import React from 'react'
import Header from '../../components/Header/Header'
import Main from './Main/Main'
import styles from './styles.module.scss'
import Footer from '../../components/Footer/Footer'

const Home: React.FC = () => {

    return (
        <div className={styles.main}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default React.memo(Home)
