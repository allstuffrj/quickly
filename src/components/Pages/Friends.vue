<template>
    <FriendsList></FriendsList>
    <CallHistory></CallHistory>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import FriendsList from "../sidebar/FriendsList.vue";
    import CallHistory from "../Partials/CallHistory.vue";

    export default defineComponent({
        name: 'Friends',
        props: {

        },
        components : {
            FriendsList,
            CallHistory
        },
        setup: () => {


        }
    })
</script>
