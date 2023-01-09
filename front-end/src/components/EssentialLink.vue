<template>
  <div class="lin">
    <q-item
    clickable
    tag="a"
    :href="Feed"
  >
    <q-item-section>
      <q-item-label>Feed</q-item-label>
    </q-item-section>
  </q-item>
  
    <q-item
    clickable
    tag="a"
    :href="Postar"
  >
    <q-item-section>
      <q-item-label>Postar</q-item-label>
    </q-item-section>
  </q-item>
    
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    Feed: {
      type: String,
      default: `/feed${localStorage.getItem('userId')}`
    },
    Postar: {
      type: String,
      default: '/create'
    },
  }
})
</script>
