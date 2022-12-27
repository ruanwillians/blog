<template>
  <div class="q-pa-md" style="min-width: 40%">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="primary"
    >
    <q-input
        filled
        type="text"
        v-model="Email"
        label="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O email é obrigatório']"
      />
    <q-input
        filled
        type="email"
        v-model="Email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O email é obrigatório']"
      />

      <q-input
        filled
        type="password"
        v-model="age"
        label="Password"
        lazy-rules
        :rules="[
         val => val && val.length > 0 || 'A senha é obrigatória',
        ]"
      />

      <div>Já possui cadastro? <a href="/" style="text-decoration: none" >Faça Login</a></div>

      <div>
        <q-btn label="Submit" type="submit" color="positive" class="q-mt-md"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm q-mt-md" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
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
