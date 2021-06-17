<template>

    <aside class="sidebar">
        <div class="tab-content">
            <div class="tab-pane active" id="chats-content">
                <div class="d-flex flex-column h-100">
                    <div class="hide-scrollbar h-100" id="chatContactsList">
                        <div class="sidebar-header sticky-top p-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="font-weight-semibold mb-0">Friends</h5>
                                <ChatAction/>
                            </div>
                            <div class="sidebar-sub-header">
                                <SerachForm v-model="searchInput" extraClass="w-100"></SerachForm>
                            </div>
                        </div>


                        <CallListRender :friendsList=filteredFriendsList></CallListRender>

                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">

    import ChatAction from "../Partials/ChatAction.vue";
    import Dropdown from "../Base/Dropdown.vue";
    import SerachForm from "../Base/SerachForm.vue";
    import {ref, defineComponent, computed, watch, onMounted} from 'vue'
    import CallListRender from "../Partials/CallListRender.vue";
    import Calls from "../../Services/Calls";

    export default defineComponent({
        name: 'FriendsList',
        props: {},
        components: {
            Dropdown,
            ChatAction,
            SerachForm,
            CallListRender
        },
        setup: () => {
            const searchInput = ref(null);
            watch(searchInput, (neval, oldVal) => {
                dpChangeHandler()
            });


            const friendsList = ref({});
            const filteredFriendsList = ref({});

            function getFriendsList() {

                Calls.getCalls().then((response: object) => {

                    friendsList.value = response.data;
                    filteredFriendsList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }


            function  dpChangeHandler  (): void {

                var tempList = friendsList.value;

                  if(searchInput.value != '' && searchInput.value != null)
                {
                    tempList =  tempList.filter(entry => {
                        return entry.user_name.toLowerCase().includes(searchInput.value.toLowerCase())
                    })
                }
                filteredFriendsList.value = tempList;
            }


            onMounted(() => {

                getFriendsList();

            });
            return { searchInput,filteredFriendsList}
        }

    })
</script>
