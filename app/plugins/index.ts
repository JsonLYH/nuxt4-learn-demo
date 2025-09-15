import { copy } from '~/directives/copy';
export default defineNuxtPlugin(({ vueApp }) => {
    //可以进行指令的注册、vue插件的注册、Helpers的提供
    vueApp.directive('copy', copy);
});