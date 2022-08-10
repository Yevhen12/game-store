import styles from './styles.module.scss'
import Header from './components/Header/Header'
import List from './components/List/List'

const Main: React.FC = () => {
    return (
        <main className={styles.section}>
            <div className={styles.container}>
                <Header />
                <List />
            </div>
        </main>
    )
}

export default Main
