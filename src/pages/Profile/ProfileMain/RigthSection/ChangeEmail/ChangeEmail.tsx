import React, { useState } from 'react'
import styles from '../styles.module.scss'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import SaveButton from '../../LeftSection/Biography/SaveButton/SaveButton'
import { auth } from '../../../../../firebase/firebaseConfig'
import { changeEmail } from '../../../../../redux/slices/userSlice/thunks/changeEmail'
import isEmailAvailable from '../../../../../firebase/auth/isEmailExist'
import ErrorData from '../Error/Error'
import { isEmailValid } from '../../../../../helpers/isEmailValid'

const ChangeEmail: React.FC = () => {

    const currentUser = useAppSelector(state => state.user.user)
    const [newEmail, setNewEmail] = useState('')
    const [error, setError] = useState('')
    const dispatch = useAppDispatch()

    const changeCurrentEmail = async () => {
        try {
            if (auth.currentUser) {
                await isEmailAvailable(newEmail)
                if(!isEmailValid(newEmail))  {
                    throw new Error("It's wrong data")
                }
                dispatch(await changeEmail(newEmail))
                setNewEmail('')
                setError('')
            }
        } catch (err: any) {
            console.log(err.message)
            setError(err.message)
            setNewEmail('')
        }

    }

    console.log(error)

    const isChanged = newEmail.length > 6

    return (
        <div className={`${styles.change_password_block} ${styles.change_email_block}`}>
            <p className={styles.change_password}>
                Change Email:
            </p>
            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    Current email:
                </p>
                <div className={styles.default_input_block}>
                    <div className={`${styles.default_input} ${styles.current_email}`}>{currentUser.email}</div>
                </div>
            </div>

            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    New email:
                </p>
                <div className={styles.default_input_block}>
                    <input
                        type='email'
                        className={styles.default_input}
                        placeholder="Email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />

                    {error ? <ErrorData error={error} /> : null}


                    <SaveButton text='Update' isChanged={isChanged} changeUser={changeCurrentEmail} />

                </div>
            </div>
            {/* 
            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    Code:
                </p>
                <div className={styles.default_input_block}>
                    <input
                        type='text'
                        maxLength={10}
                        className={styles.code_input}
                        placeholder="Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={changeCurrentEmail} className={styles.send}>Send code</button>
                </div>
            </div> */}


        </div>
    )
}

export default ChangeEmail