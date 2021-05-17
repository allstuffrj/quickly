<template>

    <aside class="sidebar">
        <div class="tab-content">
            <div class="tab-pane active" id="chats-content">
                <div class="d-flex flex-column h-100">
                    <div class="hide-scrollbar h-100" id="chatContactsList">
                        <div class="sidebar-header sticky-top p-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="font-weight-semibold mb-0">Chats</h5>
                                <ChatAction />
                            </div>
                           <div class="sidebar-sub-header">
                            <Dropdown title="Details" :displayType=dpDisplayType :size=dpsize :xplacement=xplacement
                                      :emptyLabel=emptyLabel
                                      :options=options
                                      @change="dpChangeHandler" :defaultvalue=defaultvalue></Dropdown>
                                       
                            <SerachForm v-model="searchInput"></SerachForm>
                           </div>
                        </div>

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
    import { ref, defineComponent,computed,watch } from 'vue'
    import FriendsSvg from "../../assets/media/icons/friends.svg";
    export default defineComponent({
        name: 'ChatList',
        props: {

        },
        components : {
            Dropdown,
            ChatAction,
            SerachForm
        },
        setup: () => {
            const searchInput = ref(null)
            watch(searchInput,(neval,oldVal) => {
                console.log(neval,oldVal)
            })
            const options = [
                {
                    value: 'all-chats',
                    label : 'All Chats'
                },
                {
                    value: 'friends',
                    label : 'Friends'
                }, {
                    value: 'groups',
                    label : 'Groups'
                },{
                    value: 'unread',
                    label : 'Unread'
                },{
                    value: 'archived',
                    label : 'Archived'
                },
            ];
            const emptyLabel = "All Chats";
            const dpsize = "mr-2";
            const xplacement= "bottom-start";
            const defaultvalue='all-chats';
            const dpDisplayType = 'button';
            return {options,emptyLabel,dpsize,defaultvalue,dpDisplayType,searchInput,xplacement}
        },
        methods : {
            dpChangeHandler: function (selected : object) :void
            {
                console.log(selected)
            }
        }
    })
</script>
