import DropMenu from "../../Modals/DropMenu/DropMenu";
import { IDropMenuItem } from '../../../interfaces/interfaces'
import styles from './styles.module.scss'
import Item from './Item/Item'
import { logOut } from '../../../firebase/auth/signOut'
import { useAppDispatch } from '../../../redux/hooks'
import {removeUser} from '../../../redux/slices/userSlice/userSlice'

type Props = {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}


const ProfileDropMenu: React.FC<Props> = ({ activeModal, setActiveModal }) => {

    //profile | cart | favourite | History | Exit
    const dispatch = useAppDispatch()
    const removeSignedUser = async () => {
        await logOut()
        dispatch(removeUser())
        setActiveModal(false)
    }

    const dropMenuItems: IDropMenuItem[] = [
        {
            name: 'Profile',
            image: '/images/user-icon.png',
            funcToDo: () => console.log(1)
        },
        {
            name: 'Favorite',
            image: '/images/heart-uncolored.png',
            funcToDo: () => console.log(2)
        },
        {
            name: 'Cart',
            image: '/images/shopping-cart-icon.png',
            funcToDo: () => console.log(3)
        },
        {
            name: 'History',
            image: '/images/history-icon.png',
            funcToDo: () => console.log(4)
        },
        {
            name: 'Exit',
            image: '/images/exit-icon.png',
            funcToDo: removeSignedUser
        },
    ]

    const allItems = dropMenuItems.map((elem, id) => <Item key={id} {...elem} />)

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

export default ProfileDropMenu
