<template>
    <ul class="contacts-list" id="chatContactTab">

        <li class="contacts-item friends" :class="[{'active' : callId == call.uuid}]"
            v-for="call in
        callsList">
            <a class="contacts-link" href="javascript:void(0)" @click="openCall(call)">
                <div class="avatar  bg-info text-light">
                    <img :src=call.avatar :alt=call.name>
                </div>
                <div class="contacts-content">
                    <div class="contacts-info">
                        <h6 class="chat-name">{{call.user_name}}</h6>

                    </div>
                    <div class="contacts-texts">
                        <PhoneIncoming class="injectable hw-16 text-muted mr-1" v-if="call.type
                        =='incoming'"></PhoneIncoming>
                        <PhoneOutgoing class="injectable hw-16 text-muted mr-1"  v-if="call.type
                        =='outgoing'"></PhoneOutgoing>
                        <PhoneIncoming class="injectable hw-16 text-danger mr-1" v-if="call.type
                        =='missed-calls'"></PhoneIncoming>
                        <p class=" mb-0" :class="call.type=='missed-calls' ? 'text-danger' : 'text-muted'">20 mins
                            ago</p>
                    </div>
                </div>
                <div class="contacts-action">
                    <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                        <Phone class="injectable hw-20"></Phone>
                    </button>
                </div>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import  timeAgo from '../../Config/timeAgo'
    import PhoneIncoming from '../../assets/media/heroicons/solid/phone-incoming.svg'
    import PhoneOutgoing from '../../assets/media/heroicons/solid/phone-outgoing.svg'
    import Phone from '../../assets/media/heroicons/outline/phone.svg'

    import { useStore, MutationTypes, ActionTypes } from "../../store";
    export default defineComponent({
        name: 'CallListRender',
        props: {
            callsList :{
                type:Object,
                default:[]
            }
        },
        components : {
            PhoneIncoming,
            PhoneOutgoing,
            Phone
        },
        emits:[],
        setup: () => {

            const store = useStore();
            const callId = ref(null);
            const currentCall = ref(store.state.currentCall);

            function openCall(conversation : object) :void
                {
                   callId.value = conversation.uuid;
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.SHOW_CHATSEARCH, false);
                    store.commit(MutationTypes.SHOW_MAINWINDOW, true);
                    store.dispatch(ActionTypes.LOAD_CALLHISTORY, conversation);

                }
            return {timeAgo,openCall,callId}
        }
    })
</script>
