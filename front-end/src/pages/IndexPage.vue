<template>
  <q-page class="column flex-center">
    <img src="../assets/LOGO.png" style="width: 75px; height: 75px;"/>
    <h4>Login</h4>
    <LoginFormVue/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import LoginFormVue from 'src/components/LoginForm.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {LoginFormVue}
})
</script>
