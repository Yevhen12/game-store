import React from 'react'
import styles from './styles.module.scss'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../../../../../../redux/hooks'
import { platfromArray } from '../FilterForm'

type PlatformProps = {
    text: string
    setPlatform: ActionCreatorWithPayload<number | null, string>
}

const PlatfromButton: React.FC<PlatformProps> = ({ text, setPlatform }) => {

    const dispatch = useAppDispatch()
    const platfromFilter = useAppSelector(state => state.filter.platform)

    return (
        <>
        {text === 'PC (Windows)' && <div className={styles.border}></div>}
        <button className={`${styles.button} ${platfromArray.indexOf(text) === platfromFilter ? styles.buttonActive : styles.buttonDisabled}`} onClick={() => dispatch(setPlatform(platfromArray.indexOf(text)))}>
            {text}
        </button>
        </>
        
    )
}

export default PlatfromButton