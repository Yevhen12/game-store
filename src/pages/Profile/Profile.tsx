import React from 'react'
import styles from './styles.module.scss'
import Header from '../../components/Header/Header'
import ProfileMain from './ProfileMain/ProfileMain'
import { useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import ForbiddenPage from '../ForbiddenPage/ForbiddenPage'
import Loading from '../Loading/Loading'

const Profile = () => {

    const { user } = useParams()
    console.log(user)
    const currentUser = useAppSelector(state => state.user.user)
    const statusUser = useAppSelector(state => state.user.status)

    if(statusUser === 'loading') {
        return <Loading />
    }

    return (
        <>
            {
                currentUser.username === user ?
                    <>
                        <Header />
                        <ProfileMain />
                    </>
                    :
                    <ForbiddenPage />
            }
        </>
    )
}

export default Profile