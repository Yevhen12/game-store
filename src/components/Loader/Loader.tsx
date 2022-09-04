import React from "react";
import styles from './styles.module.scss'
import { TailSpin } from 'react-loader-spinner'

type PropsType = {
    height: string,
    width: string
}

const Loader: React.FC<PropsType> = ({ height, width }) => {
    return (
        <div className={styles.loader}>
            <TailSpin height={height} width={width} color='rgba(120,120,120,150)' />
        </div>
    )
}

export default React.memo(Loader)