<template>
    <EmptyChat v-if="isEmpty"></EmptyChat>
    <Conversation v-if="!isEmpty"></Conversation>
</template>

<script lang="ts">

    import { ref, defineComponent,computed } from 'vue'
    import EmptyChat from "./EmptyChat.vue";
    import Conversation from "./Conversation.vue";
    import { useStore, MutationTypes, ActionTypes } from "../../store";

    export default defineComponent({
        name: 'ChatHistory',
        props: {

        },
        components : {
            EmptyChat,
            Conversation
        },
        setup: () => {
            const store = useStore();
            const count = ref(store.state);

            const currentConversation = computed(() => store.getters.currentConversation);
            const isEmpty = computed(() => {
                return Object.keys( currentConversation.value ).length == 0
            })
            return {
                currentConversation,
                isEmpty
                }
        },
        methods : {

        }
    })
</script>
