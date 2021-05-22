<template>

    {{CfilteredFriendList()}}

</template>

<script lang="ts">
    import { ref, defineComponent,onMounted} from 'vue'
    import Friends from "../../Services/Friends";
    export default defineComponent({
        name: 'CreateGroup',
        props: {
            
        },

        components : {

        },

        setup: (props,context) => {
                const friendSearch = ref(null)
                var friendsList = ref({});
                
            function CfilteredFriendList() {
                
                if(friendSearch.value === '' || friendSearch.value == null) return friendsList;
                
                var friendAr = friendsList.value;
                return friendAr.filter(entry => {
                    return entry.user_name.toLowerCase().includes(friendSearch.value.toLowerCase())
                })   
             
             }
             function getFriendList(){

                Friends.getAll().then((response: object) => {

                    friendsList.value = response.data;
                    
                }).catch((e: Error) => {
                    console.log(e);
                });
            }
            onMounted(() => {

                
                getFriendList();

            });
            
            return {CfilteredFriendList}
        },
        methods: {

        }
    })
</script>
