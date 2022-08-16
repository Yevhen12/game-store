import React from 'react'
import styles from './styles.module.scss'
import FilterForm from './FilterForm/FilterForm'
import Sort from './Sort/Sort'
import ListFilters from './ListFilters/ListFilters'

const Filtration = () => {
  return (
    <div className={styles.filtration_block}>
        <div className={styles.sort_block}>
            <h2 className={styles.title}>All PS5 games</h2>
            <Sort />
        </div>
        <FilterForm />
        <ListFilters />
    </div>
  )
}

export default Filtration
