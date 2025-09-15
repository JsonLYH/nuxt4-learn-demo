import { useNuxtApp } from '#app';

export const copy = {
  mounted(el: any, binding: any) {
    // 复制处理函数
    const copyToClipboard = async () => {
      try {
        const textToCopy = binding.value || el.textContent?.trim();
        if (!textToCopy) return;
        // 像这类，在运行时，用户点击才点击的，window不管是在服务端编译、客户端编译都是不影响的
        window && window.navigator && (await window.navigator.clipboard.writeText(textToCopy));

        ElMessage.success(textToCopy);
      } catch (err) {
        // 错误处理
        ElMessage.error('复制失败');
        console.error('复制失败:', err);
      }
    };
    el.addEventListener('click', copyToClipboard);
    el.handler = copyToClipboard;
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.handler);
  },
};
