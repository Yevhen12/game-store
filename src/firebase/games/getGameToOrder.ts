import { IGameItem } from './../../interfaces/interfaces';
import { getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

const getGameToOrder:(id:number) => Promise<IGameItem | null> = async (id) => {

    const gameRef = doc(db, 'games', String(id))

    const gameDoc = await getDoc(gameRef)

    if(gameDoc.data()) {
        return gameDoc.data() as IGameItem
    } else {
        return null
    }

}

export default getGameToOrder