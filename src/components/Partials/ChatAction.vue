<template>
    <ul class="nav flex-nowrap">
        <li class="nav-item list-inline-item mr-1">
            <a class="nav-link text-muted px-1" title="Notifications" role="button" data-toggle="modal"
                    data-target="#notificationModal"
                    @click="toggleModal('notification')"
                    href="javascript:void(0)">
                <NotificationsSvg />
            </a>
        </li>
        <li class="nav-item list-inline-item mr-0">
        <Dropdown title="Details" displayType="kebab" size=null xplacement="bottom-end"
                                      emptyLabel="Details"
                                      :options=chatOptions
                                      @change="charOpHandler" defaultvalue=null dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-128px, 40px, 0px); top: 0px; left: 0px; will-change: transform;"></Dropdown>

        </li>
    </ul>
    <Modal :showModal=showNotification >

            <template v-slot:modalHeader>
            <h5 class="modal-title" id="notificationModalLabel">Notifications</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    @click="toggleModal('notification')">
                <span aria-hidden="true">&times;</span>
            </button>
            </template>
        <template v-slot:modalBody>
            <div class="row">

                <div class="col-12">
                    <!-- List Group Start -->
                    <ul class="list-group list-group-flush  py-2">


                        <NotificationRow v-if="notificationList.length > 0" v-for="notification in notificationList"
                                          :notification=notification></NotificationRow>
                         <div class="text-center" v-else>
                             <span>No Notifications</span>
                         </div>
                    </ul>

                </div>
            </div>
        </template>
        <template v-slot:modalFooter>
            <button type="button" class="btn btn-link text-muted">Clear all</button>
        </template>
    </Modal>
    <Modal :showModal=showNewChat >

        <template v-slot:modalHeader>
            <h5 class="modal-title" id="newChatModalLabel">New Chat</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggleModal('new-chat')">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <template v-slot:modalBody>
            <div class="row">
                <div class="col-12">
                    <form class="form-inline w-100 p-2 border-bottom">
                        <div class="input-group w-100 bg-light">
                            <input
                                    type="text"
                                    class="form-control form-control-md search border-right-0 transparent-bg pr-0"
                                    placeholder="Search..."
                            >
                            <div class="input-group-append">
                                <div
                                        class="input-group-text transparent-bg border-left-0"
                                        role="button"
                                >
                                    <SearchSvg />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-12">
                    <ul class="list-group list-group-flush">



                        <FriendRow v-if="friendsList.length > 0" v-for="friend in friendsList"
                                         :friend=friend></FriendRow>
                        <div class="text-center" v-else>
                            <span>No Friends</span>
                        </div>

                    </ul>
                </div>
            </div>


        </template>
        <template v-slot:modalFooter>

        </template>
    </Modal>
</template>

<script lang="ts">

    import { ref, defineComponent,onMounted } from 'vue'
    import NotificationsSvg from '../../assets/media/icons/notifications.svg';
    import Dropdown from '../Base/Dropdown.vue'
    import Modal from "../Base/Modal.vue";
    import Notifications from '../../Services/Notifications'
    import NotificationRow from "../Base/NotificationRow.vue";
    import SearchSvg from  '../../assets/media/icons/search.svg';
    import Friends from "../../Services/Friends";
    import FriendRow from "../Base/FriendRow.vue";
    export default defineComponent({
        name: 'ChatAction',
        props: {

        },
        components : {
                NotificationsSvg,
                Dropdown,
                Modal,
                NotificationRow,
                SearchSvg,
                FriendRow
        },
        setup: () => {
                const showNotification = ref(false);
                const showNewChat = ref(false);
                const notificationList = ref({})
                const friendsList = ref({})
                function toggleModal(modal: String) : void {
                    if(modal == 'notification')
                    {
                        showNotification.value = !showNotification.value;
                    }else if(modal == 'new-chat')
                    {
                        showNewChat.value = !showNewChat.value;
                    }


                }

                const chatOptions= [
                    {
                        value : 'new-chat',
                        label : 'New Chat'
                    },
                    {
                        value : 'create-group',
                        label : 'Create Group'
                    },
                    {
                        value : 'invite-other',
                        label : 'Invite Others'
                    }
                ];

                function charOpHandler(option : Object) :void
                {
                    toggleModal(option.value);
                }

           function getNotificationsList(){

                Notifications.getAll().then((response: object) => {

                    notificationList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }

           function getFriendList(){

                Friends.getAll().then((response: object) => {

                    friendsList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }

            onMounted(() => {

                getNotificationsList();
                getFriendList();

            })

            return {
                    showNotification,

                    charOpHandler,
                    chatOptions,
                    toggleModal,
                    notificationList,
                    showNewChat,
                    friendsList

                }
        },
        methods : {

        }
    })
</script>
