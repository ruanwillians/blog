<template>
  <q-page padding class="container q-pa-md q-gutter-md">
    <div class="col col-md-6 col-sm-5 q-ma-lg" >
      <h3>{{post.title}}</h3>
    <p style="font-size: 15px; text-align: justify;" class="text-caption text-grey" >{{ post.content}}</p>
    <q-img
          :src="post.image"
          class="q-mt-sm q-mb-sm"
        />
    </div>
    
  </q-page>
</template>

<script>
import axios from 'axios'
import {url} from '../boot/axios'
export default {
  name: 'PostInfo',
  setup(){
    return {
    }
  },
  data(){
    return {
      idPost: this.$route.params.id,
      post: [],
    }
  },
  methods: {
    async getPostInfo(){
      axios
        .get(`${url}/api/posts/${this.idPost}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {
          this.post = res.data.data
        })
        .catch((err) => {
          return err;
        });
    }
  },
  created(){
    this.getPostInfo()
  },
}
</script>
