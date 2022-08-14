import styles from './styles.module.scss';
import ROUTES from '../../constants/pagesRoutes'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { auth } from '../../firebase/firebaseConfig';
import { useState } from 'react';
import ProfileDropMenu from './ProfileDropMenu/ProfileDropMenu';

const Header: React.FC = () => {

  const navigate = useNavigate()
  const user = useAppSelector(state => state.user.user)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [activeModal, setActiveModal] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img alt="logo" src="/images/logo.png" className={styles.logo} onClick={() => navigate(ROUTES.HOME)} />
        <div className={styles.sony_block}>
          <img alt='sony' src='/images/sony.png' />
        </div>
        {
          auth.currentUser ?
            (
              <div className={styles.outer_profile_bloсk}>
                <div
                  className={styles.profile_block}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setActiveModal(true)}
                >
                  <img alt='user' src='/images/profile.png' className={styles.profile_block_image} />
                  <p className={`${styles.text} ${isHovered && styles.underline}`}>{user.username}</p>
                </div>
                <ProfileDropMenu
                  activeModal={activeModal}
                  setActiveModal={setActiveModal}
                />
              </div>
            )
            :
            (
              <p className={styles.text} onClick={() => navigate(`/${ROUTES.LOG_IN}`)}>Log in</p>
            )
        }

      </div>

    </header>
  )
}

export default Header