<script setup lang="ts">
definePageMeta({
  layout:'layout-one'
})
</script>

<template>
  <div>
    demo1
    <NuxtLink to="/layoutDemo/demo1" class="text-amber">跳转demo1</NuxtLink>
    <NuxtLink to="/layoutDemo/demo3" class="text-amber">跳转demo3</NuxtLink>
  </div>
</template>

<style scoped>

</style>