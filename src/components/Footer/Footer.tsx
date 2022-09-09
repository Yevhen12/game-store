import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import PagesRoutes from '../../constants/pagesRoutes'

const Footer = () => {
    const navigate = useNavigate()

    const socialArray = ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Android App', 'iOS App']
    const linksArray = ['https://uk-ua.facebook.com/', 'https://twitter.com/?lang=ua', 'https://www.instagram.com/', 'https://www.youtube.com/', 'https://play.google.com/store/apps;?hl=uk&gl=US', 'https://www.apple.com/ua/app-store/']

    const mappedArray = socialArray.map((elem, id) => <a key={id} className={styles.link} href={linksArray[id]}>{elem}</a>)

    return (
        <div className={styles.footer}>
            <div>
                <img alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} className={styles.logo} onClick={() => navigate(PagesRoutes.HOME)} />
            </div>
            <div className={styles.rigth_block}>
                <div className={styles.made_block}>
                    <p className={styles.made}>MADE BY YEVHEN COMPANY</p>
                    <p className={styles.made}>PROTECTED RIGTHS 2022</p>
                </div>
                <div className={styles.social_media}>
                    {mappedArray}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer)