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
                            <ChatFilter
                                    selectedOption={this.state.filterOption}
                                    filterOptionChanged={this.handleFilterOptionChanged}
                                    search={this.state.search}
                                    handleSearch={this.handleSearchChat}
                            />
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
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        name: 'ChatList',
        props: {

        },
        components : {

        },
        setup: () => {

            return {}
        }
    })
</script>
