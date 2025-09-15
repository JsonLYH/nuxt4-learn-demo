<script setup lang="ts">
//如果规则不匹配，效果相当于是不存在这个路由路径，也就是404
function validateIdParam(route:any) {
  return route.params.id && route.params.id == '22'
}

const title = ref('')

definePageMeta({
  validate: validateIdParam
})
</script>

<template>
  <div>123232</div>
</template>

<style scoped>

</style>