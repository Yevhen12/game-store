import React from 'react'
import { IDropMenuItem } from '../../../../interfaces/interfaces'
import styles from './styles.module.scss'

const Item:React.FC<IDropMenuItem> = ({name, image, funcToDo}) => {
  return (
    <div className={styles.block} onClick={funcToDo}>
        <img alt={name} src={process.env.PUBLIC_URL + image} className={styles.img} />
        <p className={styles.text}>{name}</p>
    </div>
  )
}

export default React.memo(Item)
