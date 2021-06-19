<template>

    <ul class="contacts-list" id="friendsTab">

        <li class="" v-for="friend in friendsList">
            <small class="font-weight-medium text-uppercase text-muted">{{friend.alphabet}}</small>
            <ul class="contacts-list-inner">
                <li class="contacts-item " v-for="friobj in friend.record" :class="[{'active' : friendId == friobj.uuid}]">
                    <a class="contacts-link" href="javascript:void(0)" @click="openCall(friobj)">
                        <div class="avatar">
                            <img :src=friobj.avatar alt="">
                        </div>
                        <div class="contacts-content">
                            <div class="contacts-info">
                                <h6 class="chat-name text-truncate">{{friobj.user_name}}</h6>
                            </div>
                            <div class="contacts-texts">
                                <LocationMarker class="injectable hw-16 text-muted mr-1"></LocationMarker>
                                <p class="text-muted mb-0">{{friobj.location}}</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </li>

    </ul>
</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import  timeAgo from '../../Config/timeAgo'
    import LocationMarker from '../../assets/media/heroicons/solid/location-marker.svg'

    import { useStore, MutationTypes, ActionTypes } from "../../store";
    export default defineComponent({
        name: 'FriendListRender',
        props: {
            friendsList :{
                type:Object,
                default:[]
            }
        },
        components : {
            LocationMarker
        },
        emits:[],
        setup: () => {

            const store = useStore();
            const friendId = ref(null);
            const currentFriend = ref(store.getters.currentFriend);

            function openCall(conversation : object) :void
                {
                    friendId.value = conversation.uuid;
                    store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
                    store.commit(MutationTypes.SHOW_CHATSEARCH, false);
                    //store.commit(MutationTypes.SHOW_MAINWINDOW, true);
                    store.dispatch(ActionTypes.LOAD_FRIEND, conversation);

                }
            return {timeAgo,openCall,friendId,currentFriend}
        }
    })
</script>
