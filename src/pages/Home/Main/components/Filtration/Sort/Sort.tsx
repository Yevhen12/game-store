import React, { useState } from 'react'
import SortEnum from '../../../../../../constants/sortFilters'
import { useAppSelector, useAppDispatch } from '../../../../../../redux/hooks'
import styles from './styles.module.scss'
import DropMenu from '../../../../../../components/Modals/DropMenu/DropMenu'
import { setSort } from '../../../../../../redux/slices/filterSlice/filterSlice'

export type SortType = {
    name: string,
    property: SortEnum
}

export const sortArray: SortType[] = [
    {
        name: 'New → Old',
        property: SortEnum.DATE_DESC
    },
    {
        name: 'Old → New',
        property: SortEnum.DATE_ASC
    },
    {
        name: 'High → Low',
        property: SortEnum.PRICE_DESC
    },
    {
        name: 'Low → High',
        property: SortEnum.PRICE_ASC
    },
]



const Sort = () => {

    const [activeModal, setActiveModal] = useState(false)
    const filter = useAppSelector(state => state.filter.sort)
    const dispatch = useAppDispatch()

   

    const hendleSort:(sortElem:SortType) => void = (sortElem) => {
        dispatch(setSort(sortElem))
        setActiveModal(false)
    }

    const topAnimation = activeModal ? '35px' : '10px'
    const mappedSortArray = sortArray.map((elem, id) => <p key={id} onClick={() => hendleSort(elem)} className={styles.dropMenu_item}>{elem.name}</p>)

    return (
        <div className={styles.container}>
            <div className={styles.sort_block} onClick={() => setActiveModal(true)}>
                <p>
                    {filter.name}
                </p>
                <img className={activeModal ? styles.arrow_btn_rotated : styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
            </div>
            <DropMenu
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                topAnimation={topAnimation}
                rigthPosition='-10px'
            >
                <div className={styles.dropMenu_items}>
                    {mappedSortArray}
                </div>
            </DropMenu>
        </div>
    )
}

export default React.memo(Sort)