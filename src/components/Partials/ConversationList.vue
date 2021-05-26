<template>
    <ul class="contacts-list" id="chatContactTab">

        <li class="contacts-item friends" v-for="conversation in conversationList">
            <a class="contacts-link" href="javascript:void(0)">
                <div class="avatar avatar-offline bg-info text-light">
                    <img :src=conversation.avatar :alt=conversation.name>
                </div>
                <div class="contacts-content">
                    <div class="contacts-info">
                        <h6 class="chat-name">{{conversation.name}}</h6>
                        <div class="chat-time">{{timeAgo(conversation.last_conversation_time)}}</div>
                    </div>
                    <div class="contacts-texts">
                        <p class="text-truncate">{{conversation.last_message}}</p>
                        <div class="badge badge-rounded badge-primary ml-1">2</div>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import  timeAgo from '../../Config/timeAgo'

    export default defineComponent({
        name: 'ConversationList',
        props: {
            conversationList :{
                type:Object,
                default:[]
            }
        },
        components : {

        },
        setup: () => {

            return {timeAgo}
        }
    })
</script>
