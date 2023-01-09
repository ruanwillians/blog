<template>
  <q-page padding>
    <PostVue/>
  </q-page>
</template>

<script>
import PostVue from 'src/components/Post.vue';
import {useUserStore} from '../stores/UserStore'

export default {
  name: 'Feed',
  setup(){
    const user = useUserStore()

    return {
      user,

    }
  },
  data(){
    return {
      username: localStorage.getItem('userName'),
    }
  },

  components: {PostVue}
}
</script>
