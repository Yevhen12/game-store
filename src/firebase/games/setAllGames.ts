import axios from "axios"
import { setDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { IGameItem } from "../../interfaces/interfaces"


const setAllGames = async () => {

    const url = 'http://localhost:3001/games'

    const { data } = await axios.get<IGameItem[]>(url)

    data.forEach(async (elem) => {
        const gameDoc = doc(db, 'games', elem.id)

        await setDoc(gameDoc, elem, { merge: true })
    })
}

export default setAllGames