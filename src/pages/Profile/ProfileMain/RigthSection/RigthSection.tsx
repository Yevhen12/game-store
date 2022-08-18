import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../redux/hooks'

const RigthSection = () => {

    const currentUser = useAppSelector(state => state.user.user)

    return (
        <div className={styles.rigth_block}>
            <div className={styles.change_password_block}>
                <p className={styles.change_password}>
                    Change Password:
                </p>
                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        Current password:
                    </p>
                    <input type='password' className={styles.default_input} placeholder="Password" />
                </div>
                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        New password:
                    </p>
                    <input type='password' className={styles.default_input} placeholder="New password" />
                </div>
            </div>

            <div className={`${styles.change_password_block} ${styles.change_email_block}`}>
                <p className={styles.change_password}>
                    Change Email:
                </p>
                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        Current email:
                    </p>
                    <input value={currentUser.email} type='email' className={styles.default_input} placeholder="email" />
                    <button className={styles.send}>Send code</button>
                </div>
                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        Code:
                    </p>
                    <input type='email' className={styles.code_input} placeholder="Code" />
                </div>

                <div className={styles.block_old_password}>
                    <p className={styles.old_password}>
                        New email:
                    </p>
                    <input type='email' className={styles.default_input} placeholder="email" />
                </div>
            </div>
        </div>
    )
}

export default RigthSection