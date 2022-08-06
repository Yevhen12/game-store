import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../../../constants/pagesRoutes'

export const Login: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className={styles.section}>
            <div className={styles.inner_container}>
                <div className={styles.container} >
                    <p className={styles.log_in}>Log In</p>
                    {/* {error && <p className="text-sm text-red-500 mb-5"> {error.message}</p>} */}
                    <form method="POST" className={styles.form}>
                        <input
                            // value={textForm.email}
                            name="email"
                            type="email"
                            className="rounded px-4 py-3 w-full border mb-2 text-sm outline-none "
                            placeholder="Email address"
                            //onChange={(e) => changetextForm(e)}
                        />
                        <input
                            //value={textForm.password}
                            name="password"
                            type="password"
                            className="rounded px-4 py-3 w-full border mb-5 text-sm outline-none "
                            placeholder="Password"
                           // onChange={(e) => changetextForm(e)}
                        />
                        <button
                            type="submit"
                            className={styles.btn_submit}
                           // onClick={(e) => signIn(e)}
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

