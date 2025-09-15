<script setup lang="ts">

</script>

<template>
  <div>
    <h1>捕获所有不存在的路由（如果路由存在，则优先路由到实际路径）</h1>
    <p>{{ $route.params['404'] }}</p>
  </div>
</template>

<style scoped>

</style>