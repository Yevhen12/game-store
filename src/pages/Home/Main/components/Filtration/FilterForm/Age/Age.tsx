import React, { useState } from 'react'
import styles from './styles.module.scss'
import DropMenu from '../../../../../../../components/Modals/DropMenu/DropMenu'

const Age: React.FC = () => {

    const [activeModal, setActiveModal] = useState(false)
    const topAnimation: string = activeModal ? '48px' : '10px'
    const ageArray = ['6+', '9+', '12+', '16+', '18+']

    const hendleFilterAge: (elem: string) => void = (elem) => {
        console.log(elem)
        setActiveModal(false)
    }

    console.log(styles)

    const mappedAgeArray = ageArray.map((elem, id) => <p key={id} onClick={() => hendleFilterAge(elem)} className={styles.dropMenu_item}>{elem}</p>)
    return (
        <div className={styles.container}>
            <div className={styles.age_block} onClick={() => setActiveModal(true)}>
                <div className={styles.common_btn}>Age rating</div>
                <img className={activeModal ? styles.arrow_btn_rotated : styles.arrow_btn} alt='arrow' src='/images/down-arrow.png' />
            </div>
            <DropMenu
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                topAnimation={topAnimation}
                rigthPosition='0px'
            >
                <div className={styles.dropMenu_items}>
                    {mappedAgeArray}
                </div>
            </DropMenu>
        </div>
    )
}

export default Age