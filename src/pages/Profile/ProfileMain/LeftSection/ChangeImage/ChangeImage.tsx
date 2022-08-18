import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../../redux/hooks'

const ChangeImage: React.FC = () => {
    const currentUser = useAppSelector(state => state.user.user)
    const [activeModal, setActiveModal] = useState(false)

    console.log(currentUser)

    return (
        <div className={styles.block}>
            <div className={styles.block_image_btn}>
                <img alt='userPhoto' src={currentUser?.image || '/images/profile.png'} className={styles.profile} />
                <button type='button' className={styles.button}>Change Photo</button>
                <div className={styles.biography_block}>
                    <p className={styles.biography}>Biography: </p>
                </div>
                <textarea className={styles.textarea} placeholder='Tell about yourself...' />
            </div>
        </div>
    )
}

export default ChangeImage