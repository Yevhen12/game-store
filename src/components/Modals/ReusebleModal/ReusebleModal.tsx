import React from 'react'
import styles from './styles.module.scss'

type PropsType = {
    activeModal: boolean,
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    width: string
    children: React.ReactNode
}

const ReusebleModal: React.FC<PropsType> = ({ activeModal, setActiveModal, children, width }) => {

    const toggleModal: () => void = () => {
        setActiveModal(false)
    }

    return (
        <div onClick={toggleModal} className={`${styles.windowBlock} ${activeModal ? styles.active : styles.hidden}`}>
            <div style={{width: width}} onClick={(e) => e.stopPropagation()} className={`${styles.innerBlock} ${activeModal ? styles.activeModal : styles.hiddenModal}`}>
                {children}
            </div>
        </div>
    )
}

export default ReusebleModal