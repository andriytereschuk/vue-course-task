<template>
  <div v-for="item of items" :key="item.id">{{ item.name }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref } from 'vue'

  export default defineComponent({
    setup() {
      const items: Ref<any[]> = ref([])

      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then(({ results }) => (items.value = results))

      return { items }
    }
  })
</script>

<style></style>
