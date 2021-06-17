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


                        <FriendListRender :friendsList=filteredFriendsList></FriendListRender>

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
    import FriendListRender from "../Partials/FriendListRender.vue";
    import Friends from "../../Services/Friends";

    export default defineComponent({
        name: 'FriendsList',
        props: {},
        components: {
            Dropdown,
            ChatAction,
            SerachForm,
            FriendListRender
        },
        setup: () => {
            const searchInput = ref(null);
            watch(searchInput, (neval, oldVal) => {
                dpChangeHandler()
            });


            const friendsList = ref({});
            const filteredFriendsList = ref({});

            function getFriendsList() {

                Friends.getList().then((response: object) => {

                    friendsList.value = response.data;
                    filteredFriendsList.value = response.data;
                    dpChangeHandler();
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
                tempList.sort((a, b) => a.user_name.localeCompare(b.user_name, 'es', { sensitivity: 'base' }))

                tempList =  tempList.reduce((r, e) => {

                    // get first letter of name of current element
                    let alphabet = e.user_name[0];

                    // if there is no property in accumulator with this letter create it
                    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }

                    // if there is push current element to children array for that letter
                    else r[alphabet].record.push(e);

                    // return accumulator
                    return r;
                }, {});

                filteredFriendsList.value = Object.values(tempList);
            }


            onMounted(() => {

                getFriendsList();

            });
            return { searchInput,filteredFriendsList}
        }

    })
</script>
