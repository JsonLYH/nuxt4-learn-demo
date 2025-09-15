//中间件文件名称要以小驼峰或者-分割的形式，否则在使用时就会报错
export default defineNuxtRouteMiddleware((to, from) => {
    setPageLayout('layout-demo')
})