import React, { useState } from 'react'
import ReusebleModal from '../../../components/Modals/ReusebleModal/ReusebleModal'
import styles from './styles.module.scss'

type ObjectStyleType = {
  fontSize?: string,
  height?: string,
  width?: string
}

type PropsType = {
  gameId: number,
  objectStyle: ObjectStyleType,
  text: string,
}

const OrderButton: React.FC<PropsType> = ({ objectStyle, gameId, text }) => {

  const [activeModdal, setActiveModal] = useState(false)

  return (
    <>
      <button style={objectStyle} type='button' className={styles.button} onClick={() => setActiveModal(true)}>
        {text}
      </button>
      <ReusebleModal activeModal={activeModdal} setActiveModal={setActiveModal} width='350px'>
        fgdfgdfgdfgfdg
      </ReusebleModal>
    </>
  )
}

export default OrderButton