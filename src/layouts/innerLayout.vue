<template>
    <div id="dashboard">
        <sidebar></sidebar>
        <h1>Hello, I'm dashboard layout</h1>

        <router-view />
    </div>
</template>

<script>
    import Sidebar from "../components/Partials/Sidebar.vue";
    export default {
        components : {
            Sidebar
        },
        mounted() {
            // this is dashboard layout
        }
    }
</script>
