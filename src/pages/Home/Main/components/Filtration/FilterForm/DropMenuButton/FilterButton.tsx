import React, { useState } from 'react'
import styles from './button.module.scss'
import DropMenu from '../../../../../../../components/Modals/DropMenu/DropMenu'
import { useAppDispatch } from '../../../../../../../redux/hooks'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { setPage } from '../../../../../../../redux/slices/filterSlice/filterSlice'

type Propstype = {
    dataArray: string[]
    text: string
    setFilters: ActionCreatorWithPayload<number | null, string>
}

const FilterButton: React.FC<Propstype> = ({ dataArray, text, setFilters }) => {

    const [activeModal, setActiveModal] = useState(false)
    const dispatch = useAppDispatch()

    const topAnimation: string = activeModal ? '48px' : '10px'

    const hendleFilter: (elem: string) => void = (elem) => {
        dispatch(setFilters(dataArray.indexOf(elem)))
        dispatch(setPage(1))
        setActiveModal(false)
    }

    const mappedDataArray:JSX.Element[] = dataArray.map((elem, id) => <p key={id} onClick={() => hendleFilter(elem)} className={styles.dropMenu_item}>{elem}</p>)
    return (
        <div className={styles.container}>
            <div className={styles.filter_block} onClick={() => setActiveModal(true)}>
                <div className={styles.common_btn}>{text}</div>
                <img className={activeModal ? styles.arrow_btn_rotated : styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
            </div>
            <DropMenu
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                topAnimation={topAnimation}
                rigthPosition='0px'
            >
                <div className={styles.dropMenu_items}>
                    {mappedDataArray}
                </div>
            </DropMenu>
        </div>
    )
}

export default FilterButton