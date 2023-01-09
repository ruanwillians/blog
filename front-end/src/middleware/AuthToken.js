
export default {
    verifyAuth(to, from, next){
        const token = localStorage.getItem('authToken')
        if(!token){
            next('/')
            localStorage.clear()
        }
        next()
    },

    redirect(to, from, next) {
        const token = localStorage.getItem('authToken')
        const id = localStorage.getItem('userId')
        if(token){
            next(`/feed${id}`)
        }
        next()
    }
}