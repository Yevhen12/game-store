import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export { signIn } 