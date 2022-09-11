import React from 'react'
import styles from './styles.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
        <img alt='logo' src={process.env.PUBLIC_URL + '/images/logo-white-new.png'} />
    </div>
  )
}

export default React.memo(Loading)
