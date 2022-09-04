import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { setModal } from '../../../redux/slices/modalSlice/modalSlice'
import styles from './styles.module.scss'

type PropsType = {
    width: string
    children: React.ReactNode
}

const ReusebleModal: React.FC<PropsType> = ({ children, width }) => {

    const activeModal = useAppSelector(state => state.modal.activeModal)
    const dispatch = useAppDispatch()

    const toggleModal: () => void = () => {
        dispatch(setModal(false))
    }

    return (
        <div onClick={toggleModal} className={`${styles.windowBlock} ${activeModal ? styles.active : styles.hidden}`}>
            <div style={{width: width}} onClick={(e) => e.stopPropagation()} className={`${styles.innerBlock} ${activeModal ? styles.activeModal : styles.hiddenModal}`}>
                {children}
            </div>
        </div>
    )
}

export default React.memo(ReusebleModal)