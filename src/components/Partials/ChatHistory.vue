<template>
    <EmptyChat></EmptyChat>
</template>

<script lang="ts">

    import { ref, defineComponent,onMounted,watch,reactive } from 'vue'
    import EmptyChat from "./EmptyChat.vue";
    export default defineComponent({
        name: 'ChatHistory',
        props: {

        },
        components : {
            EmptyChat
        },
        setup: () => {

            return {

                }
        },
        methods : {

        }
    })
</script>
