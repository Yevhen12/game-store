import React from 'react'
import styles from './styles.module.scss'

const FilterForm = () => {
  return (
    <div className={styles.form_block}>
      <div className={styles.block_item}>
        <button className={styles.common_btn}>Genre</button>
        <img className={styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
      </div>

      <div className={styles.block_item}>
        <button className={styles.common_btn}>Price</button>
        <img className={styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
      </div>

      <div className={styles.block_item}>
        <button className={styles.common_btn}>Age rating</button>
        <img className={styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
      </div>
        
    </div>
  )
}

export default FilterForm
