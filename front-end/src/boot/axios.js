import { boot } from 'quasar/wrappers'
import axios from 'axios'

const url = "http://localhost:1337"
const api = axios.create({ baseURL: url })



export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
 

  app.config.globalProperties.$api = api

})

export { api, url }
