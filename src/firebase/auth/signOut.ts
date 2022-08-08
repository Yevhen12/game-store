import { auth } from "../firebaseConfig"
import { signOut } from "firebase/auth"

const logOut:() => Promise<void> = async () => {
    await signOut(auth)
}

export { logOut } 