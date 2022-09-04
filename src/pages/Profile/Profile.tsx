import React from 'react'
import Header from '../../components/Header/Header'
import ProfileMain from './ProfileMain/ProfileMain'
import { useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import ForbiddenPage from '../ForbiddenPage/ForbiddenPage'
import Loading from '../Loading/Loading'
import Footer from '../../components/Footer/Footer'

const Profile = () => {

    const { user } = useParams()
    console.log(user)
    const currentUser = useAppSelector(state => state.user.user)
    const statusUser = useAppSelector(state => state.user.status)

    if (statusUser === 'loading') {
        return <Loading />
    }

    return (
        <>
            {
                currentUser.uid === user ?
                    <>
                        <Header />
                        <ProfileMain />
                        <Footer />
                    </>
                    :
                    <ForbiddenPage />
            }
        </>
    )
}

export default React.memo(Profile)