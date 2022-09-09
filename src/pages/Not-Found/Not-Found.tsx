import React from 'react'
import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import GoHomeButton from '../../components/GoHomeButton/GoHomeButton'
import { useNavigate } from 'react-router-dom'
import PagesRoutes from '../../constants/pagesRoutes'

const ForbiddenPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <img alt='forbidden' src={process.env.PUBLIC_URL + '/images/404-icon.png'} className={styles.image} />
                    <h1 className={styles.error}>Error 404 </h1>
                    <h1 className={styles.text}>Not Found</h1>
                    <GoHomeButton text='Go Home' funcNavigateTo={() => navigate(PagesRoutes.HOME)} />
                </div>
            </section>
        </>
    )
}

export default React.memo(ForbiddenPage)