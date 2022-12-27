<template>
  <q-page padding>
    <PostVue/>
    <ul>
      <li v-for="p in post" :key="p.id">
        <h6> {{ p.attributes.title }}</h6>
        <p>{{ p.attributes.content }}
        </p> </li>
    </ul>
  </q-page>
</template>

<script>
import PostVue from 'src/components/Post.vue';
import {useUserStore} from '../stores/UserStore'
import { usePostStore } from 'src/stores/PostStore';

export default {
  name: 'Feed',
  setup(){
    const user = useUserStore()
    const posts = usePostStore()

    return {
      user,
      posts
    }
  },
  data(){
    return {
      username: localStorage.getItem('userName'),
      post: this.posts.post.data
    }
  },
  
  created(){
    this.posts.getPosts()
  },

  components: {PostVue}
}
</script>
