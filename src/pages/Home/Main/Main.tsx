import styles from './styles.module.scss'
import Header from './components/Header/Header'

const Main: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Header />
            </div>
        </section>
    )
}

export default Main
