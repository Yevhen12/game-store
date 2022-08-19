import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../../../redux/hooks'
import { removeProfileImage } from '../../../../../../redux/slices/userSlice/thunks/removeProfileImage'
import { uploadProfileImage } from '../../../../../../redux/slices/userSlice/thunks/uploadProfileImage'
import styles from './styles.module.scss'
import ReusebleModal from '../../../../../../components/Modals/ReusebleModal/ReusebleModal'

type ModalType = {
    activeModal: boolean,
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    width: string
}

const Modal: React.FC<ModalType> = ({ activeModal, setActiveModal, width }) => {

    const currentUser = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const uploadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void> = async (e) => {

        if (!e.target.files) {
            return
        }
        const currentFile = e.target.files[0]
        const path = `profilePhotos/${currentUser.username}/${currentFile.name}`
        dispatch(await uploadProfileImage({ image: path, file: currentFile }))

        setActiveModal(false)
    }

    const deletePhoto:() => Promise<void> = async () => {

        dispatch(await removeProfileImage())
        setActiveModal(false)
    }

    return (
        <ReusebleModal activeModal={activeModal} setActiveModal={setActiveModal} width={width}>
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
                    <button className={styles.button} onClick={() => setActiveModal(false)}>
                        Cancel
                    </button>
                </div>

            </div>
        </ReusebleModal>
    )
}

export default Modal