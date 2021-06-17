<template>
    <ChatList></ChatList>
    <ChatHistory></ChatHistory>
</template>

<script lang="ts">
    import { ref, defineComponent,onUnmounted } from 'vue'
    import ChatList from "../sidebar/ChatList.vue";
    import ChatHistory from "../Partials/ChatHistory.vue";
    import { useStore, MutationTypes,ActionTypes } from "../../store";
    export default defineComponent({
        name: 'Chat',
        props: {

        },
        components : {
            ChatList,
            ChatHistory
        },
        setup: () => {
            const store = useStore();
            onUnmounted(()=>{
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.LOAD_CONVERSATION, {});
            })
        }
    })
</script>
