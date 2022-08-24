import React, { useState } from 'react'
import styles from '../styles.module.scss'
import SaveButton from '../../LeftSection/Biography/SaveButton/SaveButton'
import { changePassword } from '../../../../../redux/slices/userSlice/thunks/changePassword'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks'
import ErrorData from '../Error/Error'

const ChangePassword: React.FC = () => {

    const [oldPassord, setOldPasssword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [error, setError] = useState('')

    const currentUser = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()

    const changeCurrentPassword = async () => {
        try {
            if (oldPassord !== currentUser.password) {
                throw new Error("it's not your current password")
            }
            if(oldPassord === newPassword) {
                throw new Error("Your new password is the same as your previous")
            }
            
            dispatch(changePassword(newPassword))
            
            setNewPassword('')
            setOldPasssword('')
            setError('')
        } catch (err: any) {
            setError(err.message)
            setNewPassword('')
            setOldPasssword('')
        }
    }
    
    const isChanged = oldPassord.length > 6

    return (
        <div className={styles.change_password_block}>
            <p className={styles.change_password}>
                Change Password:
            </p>
            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    Current password:
                </p>
                <div className={styles.default_input_block}>
                    <input
                        value={oldPassord}
                        onChange={(e) => setOldPasssword(e.target.value)}
                        type='password'
                        className={styles.default_input}
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className={styles.block_curret_email}>
                <p className={styles.old_password}>
                    New password:
                </p>
                <div className={styles.default_input_block}>
                    <input
                        type='password'
                        className={styles.default_input}
                        placeholder="New password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                    {error ? <ErrorData error={error} /> : null}
                    <SaveButton text='Update' isChanged={isChanged} changeUser={changeCurrentPassword} />
                </div>
            </div>
        </div>

    )
}

export default ChangePassword