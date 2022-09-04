import React, { useEffect, useState } from 'react'
import ReusebleModal from '../../../../components/Modals/ReusebleModal/ReusebleModal'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { setModal } from '../../../../redux/slices/modalSlice/modalSlice'
import { clearHistory } from '../../../../redux/slices/userSlice/thunks/clearHistory'
import Loader from '../../../../components/Loader/Loader'
import styles from './styles.module.scss'



const ClearModal: React.FC = () => {

    const dispatch = useAppDispatch()
    const activeModal = useAppSelector(state => state.modal.activeModal)
    const userStatus = useAppSelector(state => state.user.status)
    const [gif, setGif] = useState('')

    useEffect(() => {
        setGif('')
        setTimeout(() => {
            setGif('/images/error-icon.gif')
        }, 0)
    }, [activeModal])

    const clear = async () => {
        await dispatch(clearHistory())
        dispatch(setModal(false))
    }



    return (
        <ReusebleModal width='330px'>
            {userStatus === 'loading' ? (
                <div className={styles.loader_block}>
                    <Loader height='30px' width='30px' />
                </div>
            )
                : (
                    <>
                        <div className={styles.title_block}>
                            <p className={styles.title}>Warning</p>
                            <img alt='alarm' src={gif} className={styles.error} />
                        </div>
                        <div className={styles.text}>
                            <p>You can't restore your history list if u submit this action</p>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.cancel} >
                                <button type='button' onClick={() => dispatch(setModal(false))}>
                                    Cancel
                                </button>
                            </div>
                            <div className={styles.clear}>
                                <button type='button' onClick={() => clear()}>
                                    Clear
                                </button>
                            </div>
                        </div>
                    </>
                )
            }

        </ReusebleModal>
    )
}

export default React.memo(ClearModal)