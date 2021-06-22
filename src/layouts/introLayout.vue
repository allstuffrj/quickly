<template>
    <div id="intro">

        <router-view @update-theme-mode="updateThemeMode"/>
    </div>
</template>
<script lang="ts">
    export default {
        methods : {
            emits : ['update-theme-mode-parent'],
            updateThemeMode(mode : Object) : void
            {
                this.$emit('update-theme-mode-parent',mode);
            }
        }
    }
</script>
