import React from 'react'
import Header from '../../components/Header/Header'
import { Login as LogInForm } from './components/LoginForm/Login'

const LogIn: React.FC = () => {
    return (
        <>
            <Header />
            <LogInForm />
        </>

    )
}

export default LogIn
