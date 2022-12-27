
export default {
    verifyAuth(to, from, next){
        const token = localStorage.getItem('authToken')   
        if(!token){
            next('/')
        }
        next()
        return
    }
}