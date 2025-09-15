<script setup lang="ts">
import {useNuxtApp} from "nuxt/app";
const { $hello } = useNuxtApp();
function programmaticNavigation(){
  //编程式导航
  navigateTo({
    path:'/layoutDemo/demo1'
  })
}
console.log("是否是服务端环境",import.meta.env.SSR)
console.log("是否是开发环境",import.meta.env.MODE)
//最好用此种方式获取即可
console.log("import",import.meta.env.VITE_API_BASE)
//仅服务端环境且是开发环境可获取
console.log("process",process.env.VITE_API_BASE)
</script>

<template>
  <div v-copy="'112313213'">bad-1(点我复制)</div>
  <el-button @click="programmaticNavigation">程序化导航</el-button>
  <div class="custom-parent">
    <div class="custom-child"></div>
  </div>
  <div class="global-var">
    全局变量
  </div>
  <h1 class="custom-class">{{ $hello('world') }}</h1>
</template>

<style lang="scss" scoped>
.custom-class{
  @apply flex justify-between text-amber text-[100px];
}
.custom-parent{
  @apply flex items-center justify-center h-xl w-lg bg-black;
  .custom-child{
    @apply h-[100px] w-[100px] bg-red;
  }
}
.global-var{
  color: $custom-color;
}
</style>