<template>
    <div class="chats-tab-open h-100">
        <div class="main-layout h-100">
        <NavSidebar></NavSidebar>
            <router-view />
            <Backdrop></Backdrop>
    </div>
    </div>
</template>

<script>
    import NavSidebar from "../components/Partials/NavSidebar.vue";
    import Backdrop from "../components/Partials/BackDrop.vue";
    export default {
        components : {
            NavSidebar,
            Backdrop
        },
        mounted() {
            // this is dashboard layout
        }
    }
</script>
