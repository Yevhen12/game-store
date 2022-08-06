import React, { useState } from 'react'
import styles from '../../LogIn/components/LoginForm/styles.module.scss'
import ROUTES from '../../../constants/pagesRoutes'
import { useNavigate } from 'react-router-dom'
import { ISignUp } from '../../../interfaces/interfaces'
import createUser from '../../../firebase/auth/createUser'
import isUsernameAvailable from '../../../firebase/auth/isUsernameAvailable'

const SignUpForm = () => {

    const navigate = useNavigate()
    const [textForm, setTextForm] = useState<ISignUp>(
        {
            username: '',
            name: '',
            email: '',
            password: '',
        }
    )
    const [error, setError] = useState<string>('')
    const isValid = textForm.username.length > 4 && textForm.name.length > 1 &&  textForm.password.length > 6

    const changeTextForm: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        const { name, value } = e.target
        setTextForm((prevTextForm: ISignUp) => {
            return {
                ...prevTextForm,
                [name]: value
            }
        })
    }

    const signUp: (e: React.MouseEvent<HTMLButtonElement>) => void = async (e) => {
        e.preventDefault()
        try {
            await isUsernameAvailable(textForm.username)
            await createUser(textForm)
            navigate(ROUTES.HOME)
        }
        catch (err: any) {
            setError(err.message)
            setTextForm(
                {
                    username: '',
                    name: '',
                    email: '',
                    password: '',
                }
            )
        }
    }

    return (
        <div className={styles.section}>
            <div className={styles.inner_container}>
                <div className={styles.container} >
                    <p className={styles.log_in}>Sign Up</p>
                    {error.length > 0 && <p className={styles.error}>{error}</p>}
                    <form method="POST" className={styles.form}>
                        <input
                            value={textForm.username}
                            name="username"
                            type="text"
                            placeholder="username"
                            onChange={(e) => changeTextForm(e)}
                        />
                        <input
                            value={textForm.name}
                            name="name"
                            type="text"
                            placeholder="name"
                            onChange={(e) => changeTextForm(e)}
                        />
                        <input
                            value={textForm.email}
                            name="email"
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => changeTextForm(e)}
                        />
                        <input
                            value={textForm.password}
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => changeTextForm(e)}
                        />
                        <button
                            type="submit"
                            className={`${styles.btn_submit} ${isValid ? styles.btn_submit_active : styles.btn_submit_disabled}`}
                            onClick={(e) => signUp(e)}
                            disabled = {!isValid}
                        >
                            Sign Up
                        </button>

                    </form>
                </div>
                <div className={styles.bottom_block}>
                    <p className={styles.bottom_block_text}>
                        Already have an account?
                    </p>
                    <button className={styles.bottom_block_btn} type="button" onClick={() => navigate(`/${ROUTES.LOG_IN}`)}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm
