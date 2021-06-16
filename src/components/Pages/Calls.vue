<template>
    <CallsList></CallsList>
    <CallHistory></CallHistory>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import CallsList from "../sidebar/CallsList.vue";
    import CallHistory from "../Partials/CallHistory.vue";

    export default defineComponent({
        name: 'Calls',
        props: {

        },
        components : {
            CallsList,
            CallHistory
        },
        setup: () => {


        }
    })
</script>
