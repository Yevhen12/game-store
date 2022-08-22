import React from 'react'
import styles from './styles.module.scss'

type PropsType = {
    text: string
}

const ErrorModal: React.FC<PropsType> = ({ text }) => {
    return (
        <div className={styles.error_block}>
            <span className={styles.text}>{text}</span>
        </div>
    )
}

export default ErrorModal