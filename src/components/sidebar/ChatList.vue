<template>

    <aside class="sidebar">
        <div class="tab-content">
            <div class="tab-pane active" id="chats-content">
                <div class="d-flex flex-column h-100">
                    <div class="hide-scrollbar h-100" id="chatContactsList">
                        <div class="sidebar-header sticky-top p-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="font-weight-semibold mb-0">Chats</h5>
                                <ChatAction/>
                            </div>
                            <div class="sidebar-sub-header">
                                <Dropdown title="Details" :displayType=dpDisplayType :size=dpsize :xplacement=xplacement
                                          :emptyLabel=emptyLabel
                                          :options=options
                                          @change="dpChangeHandler" :defaultvalue=defaultvalue></Dropdown>

                                <SerachForm v-model="searchInput"></SerachForm>
                            </div>
                        </div>


                        <ConversationList :conversationList=filteredConversationList></ConversationList>

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
    import ConversationList from "../Partials/ConversationList.vue";
    import Friends from "../../Services/Friends";

    export default defineComponent({
        name: 'ChatList',
        props: {},
        components: {
            Dropdown,
            ChatAction,
            SerachForm,
            ConversationList
        },
        setup: () => {
            const searchInput = ref(null);
            watch(searchInput, (neval, oldVal) => {
                console.log(neval, oldVal)
            });
            const options = [
                {
                    value: 'all-chats',
                    label: 'All Chats'
                },
                {
                    value: 'friends',
                    label: 'Friends'
                }, {
                    value: 'groups',
                    label: 'Groups'
                }, {
                    value: 'unread',
                    label: 'Unread'
                }, {
                    value: 'archived',
                    label: 'Archived'
                },
            ];
            const emptyLabel = "All Chats";
            const dpsize = "mr-2";
            const xplacement = "bottom-start";
            const defaultvalue = 'all-chats';
            const dpDisplayType = 'button';
            const conversationList = ref({});
            const filteredConversationList = ref({});

            function getConversationList() {

                Friends.getConversations().then((response: object) => {

                    conversationList.value = response.data;
                    filteredConversationList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }


            function  dpChangeHandler  (selected: object): void {
                if(selected.value=='all-chats')
                {
                    filteredConversationList.value = conversationList.value;
                    return;
                }

                var tempList = [];

                tempList = conversationList.value.filter(entry => {
                        var tempD = {};
                        if(selected.value == 'friends')
                        {
                            return entry.conversation_type == "friend";

                        }else if(selected.value == 'groups')
                        {
                            return entry.conversation_type == "group";

                        }else if(selected.value == 'unread')
                        {
                            return entry.unread_count > 0;

                        }else if(selected.value == 'archived')
                        {
                            return entry.is_archived > 0;

                        }

                });
                filteredConversationList.value = tempList;
            }
            onMounted(() => {

                getConversationList();

            });
            return {options, emptyLabel, dpsize, defaultvalue, dpDisplayType, searchInput,
                xplacement,filteredConversationList,dpChangeHandler}
        }

    })
</script>
