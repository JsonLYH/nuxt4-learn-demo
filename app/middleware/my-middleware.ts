//中间件文件名称要以小驼峰或者-分割的形式，否则在使用时就会报错
export default defineNuxtRouteMiddleware((to, from) => {
    //如果等于1，则为404
    if (to.params.id === '1') {
        console.log("已被拦截，默认不会跳404，只是相当于点击跳转无效而已")
        return abortNavigation()
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (to.path !== '/') {
        return navigateTo('/layoutDemo/demo1')
    }
})