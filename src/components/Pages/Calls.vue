<template>
    <CallsList></CallsList>
    <CallHistory></CallHistory>
</template>

<script lang="ts">
    import { ref, defineComponent,onUnmounted } from 'vue'
    import CallsList from "../sidebar/CallsList.vue";
    import CallHistory from "../Partials/CallHistory.vue";
import { useStore, MutationTypes,ActionTypes } from "../../store";
    export default defineComponent({
        name: 'Calls',
        props: {

        },
        components : {
            CallsList,
            CallHistory
        },
        setup: () => {
            const store = useStore();
            onUnmounted(()=>{
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.LOAD_CALLHISTORY, {});
            })

        }
    })
</script>
