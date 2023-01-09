<template>
  <div class="container q-pa-md q-gutter-md">
    <q-card v-for="p in post" :key="p.id" class="col col-md-6 col-sm-5 q-ma-lg">
      <q-parallax :src="p.image" :height="400" />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-sm">{{ p.title }}</div>
        <p class="text-grey"> By:{{ p.user.username }}</p>
        <div
          class="text-caption text-grey"
          style="
            max-width: 200ch;
            font-size: 1.2em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        >
          {{ p.content }}
        </div>
      </q-card-section>
      <q-btn-group class="q-ml-md q-mb-md q-ml-md">
        <q-btn color="positive" label="Leia mais" @click="info(p.id)" />
        <q-btn-dropdown>
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section @click="editPost(p.id, p.user_id)">
                <q-item-label>Editar</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section @click="deletePost(p.id)">
                <q-item-label>Excluir</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>
    </q-card>
  </div>
</template>


<script>
import { useRouter } from "vue-router";
import { url } from "../boot/axios";
import axios from "axios";
import { Notify } from "quasar";
import {useUserStore} from "../stores/UserStore"

export default {
  name: "Feed",
  setup() {
    const user = useUserStore()
    const router = useRouter();
    return {
      router,
      url,
      user
    };
  },
  data() {
    return {
      username: localStorage.getItem("userName"),
      post: [],
    };
  },
  methods: {
    info(id) {
      this.router.push(`feed/post/${id}`);
    },

    async deletePost(id) {
      axios
        .delete(`${url}/api/posts/` + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {
          if(res){
            Notify.create({
              type: "success",
              color: "success",
              timeout: 1000,
              message:res.data.message,
            });
          }
        })
        .catch((err) => {
          if (err) {
            Notify.create({
              type: "negative",
              color: "negative",
              timeout: 1000,
              message:
                "Esse post não foi feito pot você por isso você não pode exclui-lo",
            });
          }
        });
    },

    async editPost(id, userPostId) {
      const userid = localStorage.getItem('userId')

      if(userid == userPostId){
        this.router.push(`/edit/post/`+id)
      } else {
        Notify.create({
              type: "negative",
              color: "negative",
              timeout: 1000,
              message:
                "Esse post não foi feito pot você por isso você não pode edita-lo",
            });
      }

    },

    async getPosts() {
      axios
        .get(`${url}/api/posts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((res) => {
          this.post = res.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<style>
@media only screen and (min-width: 700px) {
  .container {
    width: 65vw;
    height: 50vh;
    margin: 0 auto;
  }
}
</style>
