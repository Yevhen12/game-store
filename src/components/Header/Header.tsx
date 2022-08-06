import styles from './styles.module.scss';
import ROUTES from '../../constants/pagesRoutes'
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img alt="logo" src="/images/logo.png" className={styles.logo} onClick = {() => navigate(ROUTES.HOME)} />
        <div className={styles.sony_block}>
          <img alt='sony' src='/images/sony.png' />
        </div>
        <p className={styles.text} onClick = {() => navigate(`/${ROUTES.LOG_IN}`)}>Log in</p>
      </div>
    </div>
  )
}

export default Header

