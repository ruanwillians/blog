<template>
  <div class="q-pa-md" style="min-width: 40%">

    <q-form
      @submit="register"
      class="primary"
    >
    <q-input
        filled
        type="text"
        v-model="username"
        label="Username"
        class="q-mb-sm"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O email é obrigatório']"
      />
    <q-input
        filled
        type="email"
        v-model="email"
        label="Email"
        class="q-mb-sm"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O email é obrigatório']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password"
        class="q-mb-sm"
        lazy-rules
        :rules="[
         val => val && val.length > 0 || 'A senha é obrigatória',
        ]"
      />

      <div>Já possui cadastro? <a href="/" style="text-decoration: none" >Faça Login</a></div>

      <div>
        <q-btn label="Submit" type="submit" color="positive" class="q-mt-md"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import axios from "axios";
import { url } from "../boot/axios";
import { Notify } from "quasar";
export default {
  name: 'RegisterForm',
  data(){
    return {
      username: '',
      email: '',
      password:''
    }
  },
  methods: {
    register(){
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
    }

    axios
        .post(`${url}/api/users`, user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {
          this.title = "";
          this.content = "";
          this.image = "";

            Notify.create({
              type: "success",
              color: "success",
              timeout: 1000,
              message: "usuário criado com sucesso, faça login",
            });
    
        })
        .catch((err) => {
          Notify.create({
              type: "negative",
              color: "negative",
              timeout: 1000,
              message: 'Algo deu errado tente novamente',
            });
        });
    }
  }
}
</script>

<style>
  a {
    color: #31ccec;
  }

  a:hover {
    opacity: 0.8;
  }
</style>
