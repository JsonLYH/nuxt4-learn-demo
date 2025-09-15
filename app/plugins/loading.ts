import { useLoadingStore } from '~/store/loading.js'
export default defineNuxtPlugin(({ hook }) => {
    const store = useLoadingStore();
  hook('app:mounted', () => {
      store.setLoading(false);
  })
});
