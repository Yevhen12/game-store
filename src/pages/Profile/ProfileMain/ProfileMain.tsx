import React from 'react'
import styles from './styles.module.scss'
import LeftSection from './LeftSection/LeftSection'
import RigthSection from './RigthSection/RigthSection'

const ProfileMain = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <LeftSection />
            <RigthSection />
        </div>
    </section>
  )
}

export default React.memo(ProfileMain)