import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'
import { useAppDispatch } from '../../redux/hooks'
import { setPage } from '../../redux/slices/gameSlice/gameSlice'

const Pagination = () => {
    
    const dispatch = useAppDispatch()
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(setPage(event.selected + 1))}
            pageRangeDisplayed={5}
            pageCount={5}
            previousLabel="<"
            renderOnZeroPageCount={undefined}
        />
    )
}

export default Pagination
