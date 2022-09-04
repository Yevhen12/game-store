import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../../redux/hooks'
import ChangeUsername from './ChangeUsername/ChangeUsername'
import ChangePassword from './ChangePassword/ChangePassword'
import ChangeEmail from './ChangeEmail/ChangeEmail'

const RigthSection = () => {

    const currentUser = useAppSelector(state => state.user.user)

    return (
        // method="POST" form
        <div className={styles.rigth_block}>
            <ChangePassword />
            <ChangeEmail />
            <ChangeUsername />
        </div>
    )
}

export default React.memo(RigthSection)