<template>
    <FriendsList></FriendsList>
    <FriendDetail></FriendDetail>
</template>

<script lang="ts">
    import {ref, defineComponent, onUnmounted, onMounted} from 'vue'
    import FriendsList from "../sidebar/FriendsList.vue";
    import FriendDetail from "../Partials/FriendDetail.vue";
 import { useStore, MutationTypes,ActionTypes } from "../../store";
    export default defineComponent({
        name: 'Friends',
        props: {

        },
        components : {
            FriendsList,
            FriendDetail
        },
        setup: () => {
            const store = useStore();
            onMounted(()=>{

                document.body.classList.add('friends-tab-open')
            })
            onUnmounted(()=>{
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.LOAD_FRIEND, {});
                document.body.classList.remove('friends-tab-open')
            })

        }
    })
</script>
