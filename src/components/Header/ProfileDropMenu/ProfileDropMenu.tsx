import React, {useMemo} from 'react'

import DropMenu from "../../Modals/DropMenu/DropMenu";
import { useNavigate } from "react-router-dom";
import homeRoutes from "../../../constants/homeRoutes";
import { IDropMenuItem } from '../../../interfaces/interfaces'
import styles from './styles.module.scss'
import Item from './Item/Item'
import { logOut } from '../../../firebase/auth/signOut'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { removeUser } from '../../../redux/slices/userSlice/userSlice'

type Props = {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}


const ProfileDropMenu: React.FC<Props> = ({ activeModal, setActiveModal }) => {

    //profile | cart | favourite | History | Exit
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const currentUser = useAppSelector(state => state.user.user)


    const removeSignedUser = async () => {
        await logOut()
        dispatch(removeUser())
        setActiveModal(false)
    }
    const navigateToSomewhere = (link:string) => {
        setActiveModal(false)
        setTimeout(() => {
            navigate(link)
        }, 300)
    }


    const dropMenuItems: IDropMenuItem[] = [
        {
            name: 'Profile',
            image: '/images/user-icon.png',
            funcToDo: () => navigateToSomewhere(`/profile/${currentUser.uid}`)
        },
        {
            name: 'Favorite',
            image: '/images/heart-uncolored.png',
            funcToDo: () => navigateToSomewhere(`/${homeRoutes.FAVORITE}`)
        },
        {
            name: 'My games',
            image: '/images/shopping-cart-icon.png',
            funcToDo: () => navigateToSomewhere(`/${homeRoutes.MY_GAMES}`)
        },
        {
            name: 'History',
            image: '/images/history-icon.png',
            funcToDo:  () => navigateToSomewhere(`/${homeRoutes.HISTORY}`)
        },
        {
            name: 'Exit',
            image: '/images/exit-icon.png',
            funcToDo: removeSignedUser
        },
    ]

    const allItems = useMemo(() => dropMenuItems.map((elem, id) => <Item key={id} {...elem} />), [dropMenuItems])

    const topAnimation: string = activeModal ? '35px' : '10px'
    return (
        <DropMenu
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            topAnimation={topAnimation}
            rigthPosition='-10px'
        >
            <div className={styles.items}>
                {allItems}
            </div>
        </DropMenu>
    )
}

export default React.memo(ProfileDropMenu)
