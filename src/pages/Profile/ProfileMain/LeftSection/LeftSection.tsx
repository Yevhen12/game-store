import React from 'react'
import styles from './styles.module.scss'
import ChangeImage from './ChangeImage/ChangeImage'

const LeftSection = () => {
    return (
        <div className={styles.left_block}>
           <ChangeImage />
        </div>
    )
}

export default LeftSection