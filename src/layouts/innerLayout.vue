<template>
    <div class="chats-tab-open h-100">
        <div class="main-layout h-100">
        <sidebar></sidebar>
            <router-view />
            <Backdrop></Backdrop>
    </div>
    </div>
</template>

<script>
    import Sidebar from "../components/Partials/Sidebar.vue";
    import Backdrop from "../components/Partials/BackDrop.vue";
    export default {
        components : {
            Sidebar,
            Backdrop
        },
        mounted() {
            // this is dashboard layout
        }
    }
</script>
