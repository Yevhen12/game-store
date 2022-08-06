const createDate:() => string = () => {
    return new Date().getTime().toString()
}

export default createDate