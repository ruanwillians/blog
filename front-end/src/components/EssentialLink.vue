<template>
  <q-item
    clickable
    tag="a"
    :href="Postar"
  >
    <q-item-section>
      <q-item-label>Postar</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    sair: {
      type: String,
      default: '/'
    },
    Postar: {
      type: String,
      default: '/'
    },
  }
})
</script>
