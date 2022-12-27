import { defineStore } from 'pinia';
import axios from 'axios'
import {url} from '../boot/axios'

const token = localStorage.getItem('authToken')

export const usePostStore = defineStore('post', {
  state: () => ({
    post: []
  }),

  getters: {

  },

  actions: {
    async getPosts(){
      axios.get(`${url}/api/posts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res)=> {
        this.post = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})
