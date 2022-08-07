import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../../../constants/pagesRoutes'
import {signIn as logIn} from '../../../../firebase/auth/signIn'
import { useAppDispatch } from '../../../../redux/hooks'
import { fetchUser } from '../../../../redux/slices/userSlice/thunks/fetchUser'

export const Login: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")



    const signIn:(e:React.MouseEvent<HTMLButtonElement>) => void = async (e) => {
        e.preventDefault()
        try{
            const userUID = await logIn(email, password)
            dispatch(await fetchUser(userUID))
            navigate(ROUTES.HOME)
        } catch (err:any) {
            setError(err.message)
            setPassword('')
            setEmail('')
        }
    }

    const isValid = password.length > 6

    return (
        <div className={styles.section}>
            <div className={styles.inner_container}>
                <div className={styles.container} >
                    <p className={styles.log_in}>Log In</p>
                    {error.length > 0 && <p className={styles.error}>{error}</p>}
                    <form method="POST" className={styles.form}>
                        <input
                            value={email}
                            name="email"
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            value={password}
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={`${styles.btn_submit} ${isValid ? styles.btn_submit_active : styles.btn_submit_disabled}`}
                            onClick={(e) => signIn(e)}
                            disabled = {!isValid}
                        >
                            Log In
                        </button>

                    </form>
                </div>
                <div className={styles.bottom_block}>
                    <p className={styles.bottom_block_text}>
                        Don't have an account?
                    </p>
                    <button className={styles.bottom_block_btn} type="button" onClick={() => navigate(`/${ROUTES.SIGN_UP}`)}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

