<template>
    <!--<EmptyChat></EmptyChat>-->
    <Conversation></Conversation>
</template>

<script lang="ts">

    import { ref, defineComponent,onMounted,watch,reactive } from 'vue'
    import EmptyChat from "./EmptyChat.vue";
    import Conversation from "./Conversation.vue";
    export default defineComponent({
        name: 'ChatHistory',
        props: {

        },
        components : {
            EmptyChat,
            Conversation
        },
        setup: () => {

            return {

                }
        },
        methods : {

        }
    })
</script>
