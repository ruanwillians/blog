<template>

    <q-page padding class="container q-pa-md q-gutter-md">
    <div  >
      <h3>Editar post</h3>
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

        <q-btn label="Editar" type="submit" color="positive" class="q-mt-md" />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { url } from "../boot/axios";
import axios from "axios";
import { Notify } from "quasar";
import {useRouter} from 'vue-router'
export default {
  name: 'PageName',
  setup(){
    const route = useRouter()
    return {
      url,
      route
    }
  },
  data(){
    return {
      id: this.$route.params.id,
      title: '',
      content:'',
      image:'',
    }
  },
  methods: {
    async getPost() {
      axios
        .get(`${url}/api/posts/${this.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {
          this.title = res.data.data.title
          this.content = res.data.data.content
          this.image = res.data.data.image
        })
        .catch((err) => {
          Notify.create({
              type: "success",
              color: "success",
              timeout: 1000,
              message: 'Algo deu errado tente novamente',
            });
        });
    },
    editPost(){
      const post = {
        title: this.title,
        content: this.content,
        image: this.image,
      }

      axios.put(`${url}/api/posts/`+this.id, post, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
      })
      .then((res) => {
        Notify.create({
              type: "success",
              color: "success",
              timeout: 1000,
              message: "Post editado com sucesso",
            });
    
      })
      .catch((err) => {
        Notify.create({
              type: "negative",
              color: "negative",
              timeout: 1000,
              message: 'Algo deu errado tente novamente',
            });
      })
    },
    onSubmit(){
      this.editPost()
      this.route.push(`/feed${localStorage.getItem('userId')}`)
    },
  },

  created() {
    this.getPost();
  },
}

</script>
