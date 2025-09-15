export default defineNuxtPlugin({
    name: 'depends-on-parent-plugin',
    dependsOn: ['parent-plugin'],
    async setup (nuxtApp) {
        console.log("depends-on-parent-plugin执行了")
    }
})