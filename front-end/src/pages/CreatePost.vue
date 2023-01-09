<template>
  <q-page padding class="container q-pa-md q-gutter-md">
    <div class="col col-md-1 col-sm-5 q-ma-lg">
      <h3>Novo Post</h3>
      <q-form @submit.prevent="onSubmit">
        <q-input
          type="text"
          label="Título"
          class="q-mb-sm"
          v-model="title"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'O título é obrigatório',
          ]"
        />

        <q-input
          filled
          type="textarea"
          v-model="content"
          label="Conteúdo"
          class="q-mb-sm"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'O conteúdo é obrigatório',
          ]"
        />

        <div>Imagem</div>
        <q-input
          filled
          type="text"
          v-model="image"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'A imagem é obrigatória',
          ]"
        />

        <q-btn label="Criar" type="submit" color="positive" class="q-mt-md" />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { url } from "../boot/axios";
import { LocalStorage } from "quasar";
import { Notify } from "quasar";
import {useRouter} from 'vue-router'
export default {
  name: "PageName",
  setup() {
    const route = useRouter()
    return {
      url,
      route
    };
  },
  data() {
    return {
      title: "",
      content: "",
      image: "",
    };
  },
  methods: {
    async createPost() {
      const post = {
        title: this.title,
        content: this.content,
        image: this.image,
        userId: LocalStorage.getItem("userId"),
      };
      axios
        .post(`${url}/api/posts`, post, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {0
            Notify.create({
              type: "success",
              color: "success",
              timeout: 1000,
              message: "Post criado com sucesso",
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
    },
    onSubmit(){
      this.createPost()
      this.route.push(`/feed${localStorage.getItem('userId')}`)
    }
  },
};
</script>
<style scoped>
@media only screen and (min-width: 700px) {
  .container {
    width: 65vw;
    height: 50vh;
    margin: 0 auto;
  }
}
</style>
