<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useFoo } from '~/composables/useTest'
import {navigateTo, useAsyncData} from "nuxt/app";
import { getCookie, setCookie } from '~/utils/cookie'
const router = useRouter()
const foo1 = useFoo()
const skip = () => {
  router.push('/layoutDemo/demo2')
}
function skipMiddleCom(){
  navigateTo({
    path:'/testMiddleware/1'
  })
}
const { data } = useAsyncData('list', () => {
  console.log("list-cookie",getCookie('list'))
  console.log("admin_Authorizations",getCookie("admin_Authorizations"))
  return $fetch('https://api-v2.xdclass.net/api/card/v1/list');
})
const list = useCookie(
    'list',
    {
      default: () => [],
      watch: 'shallow'
    }
)

function add() {
  setCookie("list",Math.round(Math.random() * 1000))
  // list cookie won't be updated with this change
}

function save() {
  setCookie("list",666)
}
</script>

<template>
  <div>
    <pre>{{ list }}</pre>
    <button @click="add">Add</button>
    <button @click="save">Save</button>
    <ElButton :icon="ElIconMessage" type="success">button</ElButton>
    <el-icon><ElIconCloseBold /></el-icon>
    <DemoTest></DemoTest>
    <h1>hello world Index</h1>
    {{foo1}}
    <el-button @click="skipMiddleCom">跳转到中间件组件</el-button>
    <el-button @click="skip">跳转demo1()</el-button>
    <!--自动进行分辨率转换-->
    <NuxtImg
        src="https://ts3.tc.mm.bing.net/th?id=ORMS.bbe025735bab0c6595381e664dcaa8c5&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1.5&p=0"
        format="webp"
        loading="lazy"
        fetch-priority="low"
        width="500"
        height="600"
    />
  </div>
</template>

<style scoped>

</style>