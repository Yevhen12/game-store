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
    purchasesList: any[],
    uid: string,
}

export interface IDropMenu {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    topAnimation: string
    rigthPosition: string
}

export interface IDropMenuItem  {
    name: string
    image: string
    funcToDo: any
}
