import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../../redux/hooks'
import Modal from './Modal/Modal'

const ChangeImage: React.FC = () => {
    const currentUser = useAppSelector(state => state.user.user)
    const [activeModal, setActiveModal] = useState(false)
    const [hover, setHover] = useState(false)

    console.log(currentUser)

    const changePhoto: () => void = () => {
        setActiveModal(true)
    }

    return (
        <div className={styles.block}>
            <div className={styles.block_image_btn}>
                <div className={styles.image_block} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {hover ? (
                        <div className={styles.hover_background} onClick={changePhoto}>
                            <img alt='camera' src='/images/photo-icon.png' className={styles.photo_icon} />
                        </div>
                    ) : null}
                    <img alt='userPhoto' src={currentUser?.image || '/images/profile.png'} className={styles.profile} />
                </div>
                <button type='button' className={styles.button} onClick={changePhoto}>Change Photo</button>
            </div>

            <Modal activeModal={activeModal} setActiveModal={setActiveModal} width='400px' />
        </div>
    )
}

export default ChangeImage