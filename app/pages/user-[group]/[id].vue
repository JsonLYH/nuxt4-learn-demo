<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route.params.group,route.params.id)
</script>

<template>
  <div>
    <h1>动态路由</h1>
    {{$route.params.group}}/{{$route.params.id}}
  </div>
</template>

<style scoped>

</style>