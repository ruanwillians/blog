import { boot } from 'quasar/wrappers'
import axios from 'axios'
import {useRouter} from 'vue-router'

const router = useRouter()
const url = "http://localhost:3333"
const api = axios.create({ baseURL: url,
  headers: {
    "content-type": "application/json"
},
})

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = api
})

export { api, url }
