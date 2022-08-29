import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { setModal } from '../../../redux/slices/modalSlice/modalSlice'
import OrderModal from '../OrderModal/OrderModal'
import styles from './styles.module.scss'

type ObjectStyleType = {
  fontSize?: string,
  height?: string,
  width?: string,
  borderRadius?:string,
}

type TextStyleType = {
  color?: string,
  fontWeigth?: string,
  fontSize?: string,
  height?: string
}

type PropsType = {
  gameId: number,
  objectStyle: ObjectStyleType,
  text: string,
  textStyle: TextStyleType,
}

const OrderButton: React.FC<PropsType> = ({ objectStyle, gameId, text, textStyle }) => {

  const currentUser = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  const isBougth = currentUser.myGames.some(elem => elem.id === String(gameId))

  return (
    <>
      {isBougth ?
        (
          <p style={textStyle}>BOUGTH</p>
        ) :
        (
          <>
            <button style={objectStyle} type='button' className={styles.button} onClick={() => dispatch(setModal(true))}>
              {text}
            </button>

          </>
        )
      }

      <OrderModal gameId={gameId} />

    </>
  )
}

export default OrderButton