import React, { useState } from 'react'
import styles from '../styles.module.scss'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import SaveButton from '../../LeftSection/Biography/SaveButton/SaveButton'
import { changeUsername } from '../../../../../redux/slices/userSlice/thunks/changeUsername'
import ErrorData from '../Error/Error'
import isUsernameAvailable from '../../../../../firebase/auth/isUsernameAvailable'

const ChangeUsername: React.FC = () => {

    const currentUser = useAppSelector(state => state.user.user)
    const [text, setText] = useState(currentUser.username)
    const [error, setError] = useState('')

    const dispatch = useAppDispatch()

    const isChanged = currentUser.username !== text

    const changeUsernameFunc = async () => {
        try {
            await isUsernameAvailable(text)
            dispatch(await changeUsername(text))
            setError('')
        } catch (err: any) {
            setText(currentUser.username)
            setError(err.message)
        }

    }

    return (
        <div className={`${styles.change_password_block} ${styles.change_email_block}`}>
            <p className={styles.change_password}>
                Change username:
            </p>

            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    Current username:
                </p>
                <div className={styles.default_input_block}>
                    <input
                        defaultValue={currentUser.username}
                        type='text'
                        className={styles.default_input}
                        placeholder="Password"
                        onChange={(e) => setText(e.target.value)}
                    />

                    <div className={styles.error_flex}>
                        {error ? <ErrorData error={error} /> : null}
                        <SaveButton text='Save' isChanged={isChanged} changeUser={changeUsernameFunc} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ChangeUsername)