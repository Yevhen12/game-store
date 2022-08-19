import React from 'react'
import styles from './styles.module.scss'
import ChangeImage from './ChangeImage/ChangeImage'
import Biography from './Biography/Biography'

const LeftSection = () => {
    return (
        <div className={styles.left_block}>
           <ChangeImage />
           <Biography />
        </div>
    )
}

export default LeftSection