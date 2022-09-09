import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import { setModal } from '../../../../../redux/slices/modalSlice/modalSlice'
import Modal from './Modal/Modal'
import Loader from '../../../../../components/Loader/Loader'

const ChangeImage: React.FC = () => {
    const currentUser = useAppSelector(state => state.user.user)
    const userStatus = useAppSelector(state => state.user.status)
    const [hover, setHover] = useState(false)
    const dispatch = useAppDispatch()

    const changePhoto: () => void = () => {
        dispatch(setModal(true))
    }

    console.log(userStatus)

    return (
        <div className={styles.block}>
            <div className={styles.block_image_btn}>
                <div className={styles.image_block} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {hover ? (
                        <div className={styles.hover_background} onClick={changePhoto}>
                            <img alt='camera' src={process.env.PUBLIC_URL + '/images/photo-icon.png'} className={styles.photo_icon} />
                        </div>
                    ) : null}
                    {userStatus === 'loading' && <div className={styles.loader_block}><Loader height='30px' width='30px' /></div>}
                    <img alt='userPhoto' src={currentUser?.image || process.env.PUBLIC_URL + '/images/profile.png'} className={styles.profile} />
                </div>
                <button type='button' className={styles.button} onClick={changePhoto}>Change Photo</button>
            </div>

            <Modal width='400px' />
        </div>
    )
}

export default React.memo(ChangeImage)