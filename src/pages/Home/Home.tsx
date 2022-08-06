import React from 'react'
import Header from '../../components/Header/Header'
import { auth } from '../../firebase/firebaseConfig'

const Home = () => {
    return (
        <>
            <Header />
            {auth.currentUser ? 'hello' + auth.currentUser.email : 'U r not logged' }
        </>
    )
}

export default Home
