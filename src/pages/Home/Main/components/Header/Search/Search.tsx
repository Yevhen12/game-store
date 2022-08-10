import React from 'react'
import styles from './styles.module.scss'

const Search:React.FC = () => {
  return (
    <input type='text' placeholder="Search" className={styles.input}/>
  )
}

export default Search
