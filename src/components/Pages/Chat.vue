<template>
    <ChatList @openConversation=openConversation></ChatList>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import ChatList from "../sidebar/ChatList.vue";
    export default defineComponent({
        name: 'Chat',
        props: {

        },
        components : {
            ChatList
        },
        setup: () => {
            function openConversation(conversation) {
                console.log("Gere")
            }
            {openConversation}
        }
    })
</script>
