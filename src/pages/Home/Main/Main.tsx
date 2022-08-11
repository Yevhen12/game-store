import styles from './styles.module.scss'
import Header from './components/Header/Header'
import List from './components/List/List'
import Pagination from '../../../components/Pagination/Pagination'

const Main: React.FC = () => {
    return (
        <main className={styles.section}>
            <div className={styles.container}>
                <Header />
                <div className={styles.block}></div>
                <List />
                <Pagination />
            </div>
        </main>
    )
}

export default Main
