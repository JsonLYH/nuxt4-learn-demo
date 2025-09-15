<script setup lang="ts">
import { useTestStore } from '@/store'
defineOptions({
  name: 'Home',
});
const testStore = useTestStore()
</script>

<template>
  <button @click="testStore.increment">增加</button>
  <button @click="testStore.count++">增加</button>
  <div>{{ testStore.countGetter }}</div>
  <div>{{ testStore.count }}</div>
</template>

<style scoped>

</style>