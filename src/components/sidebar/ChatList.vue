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
                            <!--<ChatFilter
                                    selectedOption={this.state.filterOption}
                                    filterOptionChanged={this.handleFilterOptionChanged}
                                    search={this.state.search}
                                    handleSearch={this.handleSearchChat}
                            />-->
                            <Dropdown title="Details" :displayType=dpDisplayType :size=dpsize :xplacement=xplacement
                                      :emptyLabel=emptyLabel
                                      :options=options
                                      @change="dpChangeHandler" :defaultvalue=defaultvalue></Dropdown>
                        </div>
                        <!--<ul
                                class="contacts-list"
                                id="chatContactTab"
                                data-chat-list=""
                        >
                            {this.state.FilterChatList.map((chat, index) => {
                            return (
                            <ChatMessage
                                    key={"chat" + index}
                                    {...chat}
                                    handleChatClick={() => {
                            this.handleChatClick(chat.ChatUserId);
                            }}
                            />
                            );
                            })}
                        </ul>-->
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">

    import ChatAction from "../Partials/ChatAction.vue";
    import Dropdown from "../Base/Dropdown.vue";
    import { ref, defineComponent } from 'vue'
    import FriendsSvg from "../../assets/media/icons/friends.svg";
    export default defineComponent({
        name: 'ChatList',
        props: {

        },
        components : {
            Dropdown,
            ChatAction
        },
        setup: () => {
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
            const dpsize = "mt-2";
            const xplacement= "bottom-start";
            const defaultvalue='all-chats';
            const dpDisplayType = 'button';
            return {options,emptyLabel,dpsize,defaultvalue,dpDisplayType}
        },
        methods : {
            dpChangeHandler: function (selected : object) :void
            {
                console.log(selected)
            }
        }
    })
</script>
