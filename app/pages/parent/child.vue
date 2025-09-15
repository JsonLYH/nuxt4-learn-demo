<script setup lang="ts">
const props = defineProps(['foobar'])
//如果不在NuxtPage进行设置路由key，也可以在definePageMeta中设置
definePageMeta({
  key: route => route.fullPath
})
</script>

<template>
  <h1>子路由</h1>
  <p>父路由传递过来的参数：{{props.foobar}}</p>
</template>

<style scoped>

</style>