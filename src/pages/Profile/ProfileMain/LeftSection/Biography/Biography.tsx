import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import { changeBiography } from '../../../../../redux/slices/userSlice/thunks/changeBiography'
import SaveButton from './SaveButton/SaveButton'

const Biography: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user)
  const [text, setText] = useState(currentUser.bio)
  const dispatch = useAppDispatch()

  const changeBio = async () => {
    dispatch(await changeBiography(text))
  }

  const isChanged = text !== currentUser.bio

  return (
    <>
      <div className={styles.biography_block}>
        <p className={styles.biography}>Biography: </p>
      </div>
      <textarea
        defaultValue={currentUser.bio}
        className={styles.textarea}
        onChange={(e) => setText(e.target.value)}
        placeholder='Tell about yourself...'
      />
      <div className={styles.block_button}>
        <SaveButton text='Save changes' isChanged={isChanged} changeUser={changeBio} />
      </div>
    </>
  )
}

export default Biography