export default defineNuxtPlugin({
    name: 'parent-plugin',
    parallel: true,//取消默认的顺序加载插件策略，采用并行加载
    async setup (nuxtApp) {
       console.log("parent-plugin先运行")
    }
})