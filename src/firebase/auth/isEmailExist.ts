import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig";

const isEmailAvailable: (email: string) => void = async (email) => {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
        if (doc.data().email === email) {
            throw new Error('Such email already exist')
        }
    });
}

export default isEmailAvailable