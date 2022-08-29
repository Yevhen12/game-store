import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../../../redux/hooks'
import { setModal } from '../../../../../../redux/slices/modalSlice/modalSlice'
import { removeProfileImage } from '../../../../../../redux/slices/userSlice/thunks/removeProfileImage'
import { uploadProfileImage } from '../../../../../../redux/slices/userSlice/thunks/uploadProfileImage'
import styles from './styles.module.scss'
import ReusebleModal from '../../../../../../components/Modals/ReusebleModal/ReusebleModal'

type ModalType = {
    width: string
}

const Modal: React.FC<ModalType> = ({ width }) => {

    const currentUser = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const uploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void> = async (e) => {

        if (!e.target.files) {
            return
        }
        const currentFile = e.target.files[0]
        const path = `profilePhotos/${currentUser.username}/${currentFile.name}`
        dispatch(await uploadProfileImage({ image: path, file: currentFile }))

        dispatch(setModal(false))
    }

    const deletePhoto:() => Promise<void> = async () => {

        dispatch(await removeProfileImage())
        dispatch(setModal(false))
    }

    return (
        <ReusebleModal width={width}>
            <div className={styles.blockModal}>
                <p className={styles.title}>
                    ChangePhoto
                </p>
                <div className={styles.buttons}>
                    <label className={`${styles.button} ${styles.upload}`}>
                        Upload Photo
                        <input
                            type="file"
                            onChange={(e) => uploadPhoto(e)}
                            className={styles.hidden}
                        />
                    </label>
                    <button 
                    className={`${styles.remove} ${styles.button} ${!currentUser.image.length && styles.disabledBtn}`} 
                    disabled={!currentUser.image.length}
                    onClick={deletePhoto}
                    >
                        Remove current photo
                    </button>
                    <button className={styles.button} onClick={() => dispatch(setModal(false))}>
                        Cancel
                    </button>
                </div>

            </div>
        </ReusebleModal>
    )
}

export default Modal