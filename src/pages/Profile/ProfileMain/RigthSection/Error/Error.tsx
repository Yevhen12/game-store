import React, { useState } from 'react'
import styles from './styles.module.scss'
import ErrorModal from '../ErrorModal/ErrorModal'

type PropsType = {
    error: string
}

const Error: React.FC<PropsType> = ({ error }) => {
    const [errorModal, setErrorModal] = useState<boolean>(false)


    return (
        <>
            <img
                alt='error'
                onMouseEnter={() => setErrorModal(true)}
                onMouseLeave={() => setErrorModal(false)}
                src='/images/error-icon.png'
                className={styles.error}
            />

            {
                errorModal && <div className={styles.relative}><ErrorModal text={error} /></div>
            }

        </>
    )
}

export default React.memo(Error)