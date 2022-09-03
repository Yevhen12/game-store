export interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}
export interface ISignUp {
    name: string,
    username: string,
    email: string,
    password: string
}
export interface IUser extends ISignUp {
    recentSearch: any[],
    createdAt: string,
    purchasesList: IBougthGame[],
    uid: string,
    image: string,
    bio: string,
    myGames: IBougthGame[],
    favoriteGames: IGameItem[],
}

export interface IDropMenu {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    topAnimation: string
    rigthPosition: string
}

export interface IDropMenuItem {
    name: string
    image: string
    funcToDo: any
}

export interface IGameItem {
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: string
    platform: string
    price: string
    publisher: string
    release_date: string
    short_description: string
    thumbnail: string
    title: string
    age: number
}

export interface IBougthGame extends IGameItem {
    bougthAt: string
}
