<template>
  <q-page class="column flex-center">
    <img src="../assets/LOGO.png" style="width: 75px; height: 75px;"/>
    <h4>Registre-se</h4>
    <RegisterFormVue/>
  </q-page>
</template>

<script>
import RegisterFormVue from 'src/components/RegisterForm.vue';
export default {
  name: 'RegisterPage',
  components: {
    RegisterFormVue
  }
}
</script>
