<script setup lang="ts">
//在指定.client客户端页面的情况下，useAsyncData是在客户端发起请求，浏览器可以看到，反之只在服务端请求接口，浏览器端看不到
//.client客户端页面的情况下，服务端不会执行，但是客户端会执行两次，所以在客户端不要使用useAsyncData
const { data, status, error } = await useAsyncData(
    'mountains',
    () => $fetch('http://10.10.10.99:6355/api/v1/paymentCenter/test')
)
//这里的代码在客户端，服务端都会进行执行
console.log("后端响应的数据",data.value)
</script>

<template>
  <ul>
    <li v-for="item in data.data" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<style scoped>

</style>