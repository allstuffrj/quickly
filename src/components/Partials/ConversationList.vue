<template>
    <ul class="contacts-list" id="chatContactTab">

        <li class="contacts-item friends" :class="[{'active' : convId == conversation.uuid}]"
            v-for="conversation in
        conversationList">
            <a class="contacts-link" href="javascript:void(0)" @click="openConversation(conversation)">
                <div class="avatar  bg-info text-light" :class="['avatar-'+conversation.status]">
                    <img :src=conversation.avatar :alt=conversation.name>
                </div>
                <div class="contacts-content">
                    <div class="contacts-info">
                        <h6 class="chat-name">{{conversation.name}}</h6>
                        <div class="chat-time">{{timeAgo(conversation.last_conversation_time)}}</div>
                    </div>
                    <div class="contacts-texts">

                        <MissedCall v-if="conversation.last_message_type =='missed-call'"></MissedCall>
                        <Document v-if="conversation.last_message_type =='document'"></Document>
                        <photoGraph v-if="conversation.last_message_type =='photo'"></photoGraph>
                        <p class="text-truncate">{{conversation.last_message}}</p>
                        <div class="badge badge-rounded badge-primary ml-1"
                             v-if="conversation.unread_count >0">{{conversation.unread_count}}
                        </div>
                        <div class="d-inline-flex align-items-center ml-1" v-if="conversation.is_mute == 1">
                            <Muted></Muted>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import  timeAgo from '../../Config/timeAgo'
    import photoGraph from '../../assets/media/heroicons/solid/photograph.svg'
    import Document from '../../assets/media/heroicons/solid/document-report.svg'
    import MissedCall from '../../assets/media/heroicons/solid/phone-incoming.svg'
    import Muted from '../../assets/media/heroicons/solid/volume-off.svg'

    import { useStore, MutationTypes, ActionTypes } from "../../store";
    export default defineComponent({
        name: 'ConversationList',
        props: {
            conversationList :{
                type:Object,
                default:[]
            }
        },
        components : {
            photoGraph,
            MissedCall,
            Muted,
            Document
        },
        emits:['openConversation'],
        setup: () => {

            const store = useStore();
            const convId = ref(null);
            const currentConversation = ref(store.state.currentConversation);

            function openConversation(conversation : object) :void
                {
                    convId.value = conversation.uuid;
                    console.log("openConversation");
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.SHOW_CHATSEARCH, false);
                    store.commit(MutationTypes.SHOW_MAINWINDOW, true);
                    store.dispatch(ActionTypes.LOAD_CONVERSATION, conversation);

                }
            return {timeAgo,openConversation,convId}
        }
    })
</script>
