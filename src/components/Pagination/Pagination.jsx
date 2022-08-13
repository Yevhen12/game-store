import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setPage } from '../../redux/slices/gameSlice/gameSlice'

const Pagination = () => {

    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.games.page)

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
                pageCount={6}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination
