import React from 'react'
import styles from './styles.module.scss'

type PropsType = {
    text: string
    funcNavigateTo: any
}

const Button:React.FC<PropsType> = ({text, funcNavigateTo}) => {
  return (
    <button type='button' className={styles.button} onClick={funcNavigateTo}>
        {text}
    </button>
  )
}

export default React.memo(Button)