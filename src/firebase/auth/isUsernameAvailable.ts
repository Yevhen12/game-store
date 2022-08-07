import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig";

const isUsernameAvailable: (username: string) => void = async (username) => {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
        if (doc.data().username === username) {
            console.log(doc.data().username)
            throw new Error('Such username already exist')
        }
    });
}

export default isUsernameAvailable