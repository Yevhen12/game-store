import { useAppSelector } from "../../redux/hooks"
import { IGameItem } from "../../interfaces/interfaces"


const useSuggestions = () => {
    const allGames = useAppSelector(state => state.games.allGames)

    const fetchGames:(gamesLength: number, curretGameId?:number) => IGameItem[] = (gamesLength: number, curretGameId?:number) => {
        const helper = allGames.map(elem => elem).sort(() => 0.5 - Math.random()).slice(0, gamesLength)
        if(curretGameId) {
            return helper.filter(elem => elem.id !== String(curretGameId))
        }

        return helper
    }

    return { fetchGames }

}

export default useSuggestions