import React, { useState } from 'react'
import styles from './button.module.scss'
import DropMenu from '../../../../../../../components/Modals/DropMenu/DropMenu'
import { useAppDispatch } from '../../../../../../../redux/hooks'
import useWindowSize from '../../../../../../../helpers/hooks/useWindowSize'
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
    const { innerWidth } = useWindowSize()

    let topAnimation = activeModal ? '48px' : '10px'
    let rigthPosition = '0px'

    const hendleFilter: (elem: string) => void = (elem) => {
        dispatch(setFilters(dataArray.indexOf(elem)))
        dispatch(setPage(1))
        setActiveModal(false)
    }

    if(innerWidth < 870 && innerWidth > 640) {
        topAnimation = activeModal ? '35px' : '0px'
        rigthPosition = '-13px'
    } else if (innerWidth < 640) {
        topAnimation = activeModal ? '25px' : '0px'
        rigthPosition = '-9px'
    }

    const mappedDataArray: JSX.Element[] = dataArray.map((elem, id) => <p key={id} onClick={() => hendleFilter(elem)} className={styles.dropMenu_item}>{elem}</p>)
    return (
        <div className={styles.container}>
            <div className={styles.filter_block} onClick={() => setActiveModal(true)}>
                <div className={styles.common_btn}><p>{text}</p></div>
                <img className={activeModal ? styles.arrow_btn_rotated : styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
            </div>
            <DropMenu
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                topAnimation={topAnimation}
                rigthPosition={rigthPosition}
            >
                <div className={styles.dropMenu_items}>
                    {mappedDataArray}
                </div>
            </DropMenu>
        </div>
    )
}

export default React.memo(FilterButton)