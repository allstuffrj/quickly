<template>
    <div id="intro">

        <router-view @update-theme-mode="updateThemeMode"/>
    </div>
</template>
<script lang="ts">
    export default {
        methods : {
            updateThemeMode(mode)
            {
                this.$emit('update-theme-mode-parent',mode);
            }
        }
    }
</script>
