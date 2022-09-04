import React, { useState } from 'react'
import ClearModal from './ClearModal/ClearModal'
import { useAppDispatch } from '../../../redux/hooks'
import { setModal } from '../../../redux/slices/modalSlice/modalSlice'
import styles from './styles.module.scss'

const ClearHistory: React.FC = () => {

    const dispatch = useAppDispatch()
    return (
        <>
            <div className={styles.clear_block}>
                <button type='button' onClick={() => dispatch(setModal(true))} className={styles.clearHistory}>
                    Clear history
                </button>
            </div>
            <ClearModal />
        </>
    )
}

export default React.memo(ClearHistory)