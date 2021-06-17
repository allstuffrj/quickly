<template>
    {{currentFriend}}
    <EmptyChat v-if="isEmpty"></EmptyChat>
    <Friend v-if="!isEmpty"></Friend>
</template>

<script lang="ts">

    import { ref, defineComponent,computed } from 'vue'
    import EmptyChat from "./EmptyChat.vue";
    import Friend from "./Friend.vue";
    import { useStore, MutationTypes, ActionTypes } from "../../store";

    export default defineComponent({
        name: 'FriendDetail',
        props: {

        },
        components : {
            EmptyChat,
            Friend
        },
        setup: () => {
            const store = useStore();
            const count = ref(store.state);

            const currentFriend = computed(() => store.getters.currentFriend);
            const isEmpty = computed(() => {
                return Object.keys( currentFriend.value ).length == 0
            })
            return {
                isEmpty
                }
        },
        methods : {

        }
    })
</script>
