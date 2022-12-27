import { defineStore } from "pinia";
import axios from 'axios'
import {url} from '../boot/axios'


export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: '',
            password: '',
        }
    }),
    getters: {
    },
    actions: {
      async login() {

            axios.post(`${url}/api/auth/local`, {
                headers: {
                    "content-type": "application/json"
                },
                identifier: this.user.email,
                password: this.user.password,
            })
                .then((res) => {
                    localStorage.setItem('authToken', res.data.jwt)
                    localStorage.setItem('userName', res.data.user.username)
                    localStorage.setItem('userId', res.data.user.id)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})