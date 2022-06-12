<template>
  <component :is="layout" @update-theme-mode-parent="updateThemeMode">
    <router-view @update-theme-mode-parent="updateThemeMode" />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import authLayout from './layouts/authLayout.vue';
import innerLayout from './layouts/innerLayout.vue';
import introLayout from './layouts/introLayout.vue';
import { useRoute } from 'vue-router';

import { ThemeColor, themeMode } from './Config/Config';

export default defineComponent({
  name: 'App',
  components: { authLayout, innerLayout, introLayout },
  setup () {
    const layout = computed(() => {
      const route = useRoute();
      return route.meta.layout || 'auth-layout';
    });
    const themeColor = ref(
      localStorage.getItem('theme') ? localStorage.getItem('theme') : ThemeColor.Light
    );
    return { themeColor, layout };
  },
  methods: {
    updateThemeMode (newColor: themeMode): void {
      this.themeColor = newColor.mode === 1 ? ThemeColor.Light : ThemeColor.Dark;
      if (newColor.isRTL) localStorage.setItem('rtl', new Boolean(newColor.isRTL).toString());
      else localStorage.removeItem('rtl');
      const localStorageThemeValue = newColor.mode.toString();
      localStorage.setItem('theme', localStorageThemeValue);
    }
  }
});
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
