import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import GoHomeButton from '../../components/GoHomeButton/GoHomeButton'
import { useNavigate } from 'react-router-dom'
import PagesRoutes from '../../constants/pagesRoutes'
import Footer from '../../components/Footer/Footer'

const ForbiddenPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <img alt='forbidden' src='/images/forbidden-icon.png' className={styles.image} />
                    <h1 className={styles.error}>Error, </h1>
                    <h1 className={styles.text}>You don't have access to this page :(</h1>
                    <GoHomeButton text='Go Home' funcNavigateTo={() => navigate(PagesRoutes.HOME)} />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default React.memo(ForbiddenPage)