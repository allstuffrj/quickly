<template>
    <div id="auth">
         <router-view />
    </div>
</template>
<script>

    import {ref} from "vue";
    import {ThemeColor,isRTL} from "../Config/Config";
    export default {

        mounted() {
            const themeColor = ref(localStorage.getItem("theme") ?  localStorage.getItem("theme") : ThemeColor.Light)
            const isRTLCn = ref(localStorage.getItem("rtl") ?  localStorage.getItem("rtl") : isRTL)

            if(isRTLCn.value)
                document.body.setAttribute('dir','rtl');
            else
                document.body.removeAttribute('dir');

            if(parseInt(themeColor.value) == 2)
                document.body.classList.add('dark-skin')
            else
                document.body.classList.remove('dark-skin')

        }
    }
</script>
