<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="flex">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <strong>BLOG</strong>
        </q-toolbar-title>

        <div class="flex">
          <q-toolbar-title class="flex-end">
            <img src="../assets/logo2.png" style="width: 60px; height: 60px;" class="flex flex center q-ma-auto">
        </q-toolbar-title>
        </div>
        
      </q-toolbar>

      <q-tabs>
      </q-tabs>
    </q-header>


    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa- flex">
        <q-toolbar-title class="q-ma-md">
          Olá <strong>{{ username }}</strong>
          <p>Seja bem vindo ao <strong>Blog</strong></p>
        </q-toolbar-title>
        <essential-link-vue/>
        <q-btn @click="logout" class="fit flex" style="box-shadow: none;">Sair</q-btn>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLinkVue from 'src/components/EssentialLink.vue'
import {useRouter} from 'vue-router'

export default {
  name: 'FeedLayout',
  components: {EssentialLinkVue},
  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    return {
      leftDrawerOpen,
      router,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
  data(){
    return {
      username: localStorage.getItem('userName')
    }
  },
  methods: {
    logout(){
    localStorage.clear()
    this.router.push('/')
  }
  }
 
}
</script>
<style scoped>
.q-btn:before {
  box-shadow: none;
  color: gray;
}
</style>