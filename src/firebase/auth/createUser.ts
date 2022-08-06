import { auth, db } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ISignUp } from '../../interfaces/interfaces'
import { IUser } from '../../interfaces/interfaces'
import { setDoc, doc } from 'firebase/firestore'
import createDate from '../../helpers/createDate'


const createUser = async (user: ISignUp) => {
    const currentUser = await createUserWithEmailAndPassword(auth, user.email, user.password)
    const docUser = doc(db, 'users', currentUser.user.uid)

    const userToSet: IUser = {
        ...user,
        recentSearch: [],
        createdAt: createDate(),
        purchasesList: [],
    }

    await setDoc(docUser, userToSet)

}

export default createUser