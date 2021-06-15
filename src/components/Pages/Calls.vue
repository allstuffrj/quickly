<template>
    <CallsList></CallsList>
    <ChatHistory></ChatHistory>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import CallsList from "../sidebar/CallsList.vue";
    import ChatHistory from "../Partials/ChatHistory.vue";

    export default defineComponent({
        name: 'Calls',
        props: {

        },
        components : {
            CallsList,
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
