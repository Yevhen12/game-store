import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../../redux/hooks'
import Modal from './Modal/Modal'

const ChangeImage: React.FC = () => {
    const currentUser = useAppSelector(state => state.user.user)
    const [activeModal, setActiveModal] = useState(false)

    console.log(currentUser)

    const changePhoto:() => void = () => {
        setActiveModal(true)
    }

    return (
        <div className={styles.block}>
            <div className={styles.block_image_btn}>
                <img alt='userPhoto' src={currentUser?.image || '/images/profile.png'} className={styles.profile} onClick={changePhoto}/>
                <button type='button' className={styles.button} onClick={changePhoto}>Change Photo</button>
                <div className={styles.biography_block}>
                    <p className={styles.biography}>Biography: </p>
                </div>
            </div>

           <Modal activeModal={activeModal} setActiveModal={setActiveModal} width='400px'/>
        </div>
    )
}

export default ChangeImage