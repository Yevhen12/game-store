import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setPage } from '../../redux/slices/gameSlice/gameSlice'

const Pagination = () => {

    const dispatch = useAppDispatch()
    const games = useAppSelector(state => state.games.games)
    const [itemOffset, setItemOffset] = useState(0);

    const changePage = (event) => {
        const newOffset = (event.selected * 18) % games.length;
        dispatch(setPage(event.selected + 1))
        setItemOffset(newOffset)
    }

    useEffect(() => {
        const endOffset = itemOffset + 18;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    }, [itemOffset]);


    return (
        <>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => changePage(event)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={6}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination
