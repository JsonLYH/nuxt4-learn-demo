<script setup lang="ts">

</script>

<template>
  <div>
    <h1>父路由</h1>
    <!--展示子路由的同时，顺便给子路由传递参数-->
    <!--设置子路由key-->
    <NuxtPage :page-key="route => route.fullPath" :foobar="13"></NuxtPage>
  </div>
</template>

<style scoped>
  h1{
    color: red;
  }
</style>