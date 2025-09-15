<script setup lang="ts">
//动态设置路由对象的meta
definePageMeta({
  title: 'My home page'
})
const route = useRoute()

console.log(route.meta.title)
</script>

<template>
<!--注意如果一个组件没有页面元素，则浏览器控制台会报unocss相关错误-->
  <div>
    <h1>设置路由对象的meta</h1>
  </div>
</template>

<style scoped>

</style>