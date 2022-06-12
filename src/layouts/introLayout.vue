<template>
  <div id="intro">
    <router-view @update-theme-mode="updateThemeMode" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'introLayout',
  emits: ['update-theme-mode-parent'],
  components: {},
  setup: (props, context) => {
    localStorage.removeItem('rtl');
    function updateThemeMode (mode: object): void {
      context.emit('update-theme-mode-parent', mode);
    }
    return { updateThemeMode };
  }
});
</script>
