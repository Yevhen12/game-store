import ReactPaginate from 'react-paginate'
import React from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setPage } from '../../redux/slices/filterSlice/filterSlice'

const Pagination = () => {

    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.filter.page)
    const allFilteredGames = useAppSelector(state => state.games.allGames)

    const GAMES_PER_PAGE = 18
    const pageCount = Math.ceil(allFilteredGames.length / GAMES_PER_PAGE)

    return (
        <>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => dispatch(setPage(event.selected + 1))}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                forcePage={currentPage - 1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default React.memo(Pagination)
