<template>
  <div class="q-pa-md" style="min-width: 40%">
    <q-form class="primary" @submit.prevent="onSubmit">
      <q-input
        filled
        type="email"
        class="q-mb-sm"
        v-model="user.user.email"
        label="Email"
        :rules="[(val) => (val && val.length > 0) || 'O email é obrigatório']"
        >
        <template v-slot:prepend>
            <q-icon name="email" />
          </template>
      </q-input>

      <q-input
        filled
        class="q-mb-sm"
        type="password"
        v-model="user.user.password"
        label="Password"
        :rules="[(val) => (val && val.length > 0) || 'A senha é obrigatória']">

        <template v-slot:prepend>
            <q-icon name="password" />
          </template>
      
      </q-input>

      <div>
        <router-view
          >Ainda não possui cadastro?
          <a href="/register" style="text-decoration: none"
            >Cadastre-se</a
          ></router-view
        >
      </div>

      <div>
        <q-btn label="Submit" type="submit" color="positive" class="q-mt-md" />
      </div>
    </q-form>
  </div>
</template>

<script>
import {useUserStore} from '../stores/UserStore'
import {useRouter} from 'vue-router'

export default {
  name: 'LoginForm',
  setup() {
    const user = useUserStore()
    const router = useRouter()
    return {
      user,
      router,
    };
  },
  methods: {
    onSubmit(){
      this.user.login()
      this.router.push(`/feed${localStorage.getItem('userId')}`)
    },
  }
};
</script>

<style>
a {
  color: #31ccec;
}

a:hover {
  opacity: 0.8;
}
</style>
