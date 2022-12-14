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
            <div className={styles.relative}>
                <img
                    alt='error'
                    onMouseEnter={() => setErrorModal(true)}
                    onMouseLeave={() => setErrorModal(false)}
                    src={process.env.PUBLIC_URL + '/images/error-icon.png'}
                    className={styles.error}
                />

                {
                    errorModal && <ErrorModal text={error} />
                }
            </div>
        </>
    )
}

export default React.memo(Error)