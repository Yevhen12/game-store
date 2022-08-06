import React from 'react'
import styles from '../../LogIn/components/LoginForm/styles.module.scss'
import ROUTES from '../../../constants/pagesRoutes'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

    console.log('ssdasda')

    const navigate = useNavigate()
    return (
        <div className={styles.section}>
            <div className={styles.inner_container}>
                <div className={styles.container} >
                    <p className={styles.log_in}>Sign Up</p>
                    {/* {error && <p className="text-sm text-red-500 mb-5"> {error.message}</p>} */}
                    <form method="POST" className={styles.form}>
                        <input
                            // value={textForm.email}
                            name="username"
                            type="text"
                            placeholder="username"
                        //onChange={(e) => changetextForm(e)}
                        />
                        <input
                            // value={textForm.email}
                            name="name"
                            type="text"
                            placeholder="name"
                        //onChange={(e) => changetextForm(e)}
                        />
                        <input
                            // value={textForm.email}
                            name="email"
                            type="email"
                            placeholder="Email address"
                        //onChange={(e) => changetextForm(e)}
                        />
                        <input
                            //value={textForm.password}
                            name="password"
                            type="password"
                            placeholder="Password"
                        // onChange={(e) => changetextForm(e)}
                        />
                        <button
                            type="submit"
                            className={styles.btn_submit}
                        // onClick={(e) => signIn(e)}
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
