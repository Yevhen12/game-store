import React from 'react'
import styles from './styles.module.scss'
import Genre from './Genre/Genre'
import Price from './Price/Price'
import Age from './Age/Age'

const FilterForm = () => {
  return (
    <div className={styles.form_block}>
      <Genre />
      <Price />
      <Age />  
    </div>
  )
}

export default FilterForm
