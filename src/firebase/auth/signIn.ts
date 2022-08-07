import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

const signIn:(email: string, password: string) => Promise<string> = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)

    return auth.currentUser?.uid || ''
}

export { signIn } 