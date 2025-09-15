<script setup lang="ts">
//注意，不能在组件内部进行调用动态渲染（服务端下无法正常工作，client模式可以但是有告警，正确的做法是在中间件进行处理）
// setPageLayout('layout-demo')

definePageMeta({
  middleware:"demo4-page-layout",//注意中间件名称要写-分割的形式，否则报错
})
</script>

<template>
  <div>
    动态设置布局demo455
  </div>
</template>

<style scoped>

</style>