import React from 'react'
import styles from '../styles.module.scss'

const Genre = () => {
    return (
        <div className={styles.block_item}>
            <div className={styles.common_btn}>Genre</div>
            <img className={styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
        </div>
    )
}

export default Genre