<template>
    <AccountDetail></AccountDetail>
    <ProfileUpdate></ProfileUpdate>
</template>

<script lang="ts">
    import { ref, defineComponent,onUnmounted,onMounted } from 'vue'
    import AccountDetail from "../sidebar/AccountDetail.vue";
    import ProfileUpdate from "../Partials/ProfileUpdate.vue";
 import { useStore, MutationTypes,ActionTypes } from "../../store";
    export default defineComponent({
        name: 'Account',
        props: {

        },
        components : {
            AccountDetail,
            ProfileUpdate
        },
        setup: () => {
            const store = useStore();
            onMounted(()=>{
                    store.dispatch(ActionTypes.LOAD_USERDETAIL);
            })

            onUnmounted(()=>{

            })

        }
    })
</script>
