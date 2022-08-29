import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import { setModal } from '../../../../../redux/slices/modalSlice/modalSlice'
import Modal from './Modal/Modal'

const ChangeImage: React.FC = () => {
    const currentUser = useAppSelector(state => state.user.user)
    const [hover, setHover] = useState(false)
    const dispatch = useAppDispatch()

    const changePhoto: () => void = () => {
        dispatch(setModal(true))
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

            <Modal width='400px' />
        </div>
    )
}

export default ChangeImage