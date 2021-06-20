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
    import {ref} from "vue";
    import {ThemeColor,isRTL} from "../Config/Config";
    export default {
        components : {
            NavSidebar,
            Backdrop
        },
        mounted() {
            const themeColor = ref(localStorage.getItem("theme") ?  localStorage.getItem("theme") : ThemeColor.Light)

            const isRTLCn = ref(localStorage.getItem("rtl") ?  localStorage.getItem("rtl") : isRTL)

            if(isRTLCn.value)
                document.body.setAttribute('dir','rtl');
            else
                document.body.removeAttribute('dir');

            if(themeColor.value == 2)
                document.body.classList.add('dark-skin')
            else
                document.body.classList.remove('dark-skin')
            // this is dashboard layout
        }
    }
</script>
