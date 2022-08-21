import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../redux/hooks'
import ChangeUsername from './ChangeUsername/ChangeUsername'
import ChangePassword from './ChangePassword/ChangePassword'

const RigthSection = () => {

    const currentUser = useAppSelector(state => state.user.user)

    return (
        // method="POST" form
        <div className={styles.rigth_block}>
            <ChangePassword />
            <div className={`${styles.change_password_block} ${styles.change_email_block}`}>
                <p className={styles.change_password}>
                    Change Email:
                </p>
                <div className={styles.block_curret_email}>
                    <p className={styles.old_password}>
                        Current email:
                    </p>
                    <div className={styles.current_email_block}>
                        <input defaultValue={currentUser.email} type='email' className={styles.default_input} placeholder="Email" />
                        <button className={styles.send}>Send code</button>
                    </div>
                </div>
                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        Code:
                    </p>
                    <div className={styles.code_input_block}>
                        <input type='text' maxLength={4} className={styles.code_input} placeholder="Code" />
                    </div>
                </div>

                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        New email:
                    </p>
                    <input type='email' className={styles.default_input} placeholder="Email" />
                </div>
            </div>
           <ChangeUsername />
        </div>
    )
}

export default RigthSection