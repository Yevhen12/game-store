import React from 'react'
import { IDropMenu } from '../../../interfaces/interfaces'
import styles from './styles.module.scss'



const DropMenu: React.FC<IDropMenu> = ({ children, activeModal, setActiveModal, topAnimation, rigthPosition }) => {

  const toggleModal:() => void = () => {
    setActiveModal(false)
  }
  return (
    <>
      <div onClick={() => toggleModal()} className={`${styles.windowBlock} ${activeModal ? styles.active : styles.hidden}`}>
      </div>
      <div style={{top:topAnimation, right:rigthPosition}} onClick={(e) => e.stopPropagation()} className={`${styles.containerBlock} ${activeModal ? styles.toActive : styles.toHide}`}>
        {children}
      </div>

    </>
  )
}

export default React.memo(DropMenu)
