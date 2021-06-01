<template>
    <ChatList></ChatList>
    <ChatHistory></ChatHistory>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import ChatList from "../sidebar/ChatList.vue";
    import ChatHistory from "../Partials/ChatHistory.vue";

    export default defineComponent({
        name: 'Chat',
        props: {

        },
        components : {
            ChatList,
            ChatHistory
        },
        setup: () => {
            function openConversation(conversation) {
                console.log("Gere")
            }
            {openConversation}
        }
    })
</script>
