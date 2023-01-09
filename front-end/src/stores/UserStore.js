import { defineStore } from "pinia";
import axios from 'axios'
import { url } from '../boot/axios'
import { Notify } from 'quasar'


export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: '',
            password: '',
            id: '', 
            username: ''
        },
    }),
    getters: {
    },
    actions: {
        async login() {

            axios.post(`${url}/api/login`, {
                email: this.user.email,
                password: this.user.password,
            })
                .then((res) => {
                    localStorage.setItem('authToken', res.data.token.token)
                    localStorage.setItem('userId', res.data.id)
                    localStorage.setItem('userName', res.data.username)
                })
                .catch(error => {
                    if (error) {
                            Notify.create({
                                type: 'negative',
                                color: 'negative',
                                timeout: 1000,
                                message: 'Usuário não cadastrado'
                            })
                    }
                })
        }
    }
})