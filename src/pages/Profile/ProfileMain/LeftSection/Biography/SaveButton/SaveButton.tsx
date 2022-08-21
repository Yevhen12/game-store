import React from 'react'
import styles from './styles.module.scss'

type SaveButtonType = {
    text: string,
    isChanged: boolean,
    changeUser: () => Promise<void>
}

const SaveButton:React.FC<SaveButtonType> = ({text, isChanged, changeUser}) => {
    return (
        <button
            className={`${styles.button} ${isChanged ? styles.activeBtn : styles.disabledBtn}`}
            type='button'
            disabled={!isChanged}
            onClick={changeUser}
        >
            {text}
        </button>
    )
}

export default SaveButton