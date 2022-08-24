import React, { useState } from 'react'
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
    <button style={objectStyle} type='button' className={styles.button}>
      {text}
    </button>
  )
}

export default OrderButton