<template>
    <component :is="layout" @update-theme-mode-parent="updateThemeMode">
        <router-view @update-theme-mode-parent="updateThemeMode" />
    </component>

</template>

<script lang="ts">
import { defineComponent,ref,computed } from 'vue'
import authLayout from "./layouts/authLayout.vue";
import innerLayout from "./layouts/innerLayout.vue";
import introLayout from "./layouts/introLayout.vue";
import { useRoute } from 'vue-router'


import { ThemeColor } from './Config/Config'

export default defineComponent({
  name: 'App',
  components: { authLayout,innerLayout,introLayout },
    setup() {

        const layout = computed(() => {

            const route = useRoute()
            return route.meta.layout || "auth-layout";
        });
        const themeColor = ref(localStorage.getItem("theme") ?  localStorage.getItem("theme") : ThemeColor.Light)
        return {themeColor,layout}
    },
    methods : {
        updateThemeMode(newColor: Object) :void{
            this.themeColor = newColor.mode
            if (newColor.isRTL) localStorage.setItem("rtl", newColor.isRTL);
            else localStorage.removeItem("rtl");
            localStorage.setItem("theme",this.themeColor)
        },
    }
})
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";
</style>
