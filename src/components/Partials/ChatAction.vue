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
                                      @change="charOpHandler" defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-128px, 40px, 0px); top: 0px; left: 0px; will-change: transform;"></Dropdown>

        </li>
    </ul>

    <Modal :showModal=showNotification modalClass='p-0'>

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

    <Modal :showModal=showNewChat modalClass='p-0' >

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
                                    v-model=friendSearch
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



                        <FriendRow v-if="filteredFriendList().length > 0" v-for="friend in filteredFriendList()"
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

    <Modal :showModal=showCreateGroup modalClass="py-0">
    <template v-slot:modalHeader>
            <h5 class="modal-title" id="newCreateGroupModalLabel">{{ createGrpMdlTitle }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggleModal('create-group')">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <template v-slot:modalBody>

             <CreateGroup :cuStep=createGrupCuStep :creategroupobj="creategroupobj"
                          @onFilePicked=groupPictureUpload></CreateGroup>

        </template>
        <template v-slot:modalFooter>
            <button
                    variant="link"
                    class="btn btn-link text-muted js-btn-step mr-auto" @click="toggleModal('create-group')">
                Cancel
            </button>
            <button type="button" class="btn btn-secondary  js-btn-step" data-orientation="previous"
                    :data-step="createGrupCuStep -1"
                    @click="createGrupCuStep -= 1"
                    :disabled="createGrupCuStep == 1">Previous</button>
            <button type="button" class="btn btn-primary js-btn-step" data-orientation="next"
                    :data-step=" createGrupCuStep + 1 " :class="[{'hide' : createGrupCuStep==3}]"
                    :disabled="createGrupCuStep == 3"
                    @click="createGrupCuStep += 1">Next
            </button>
            <button type="button" class="btn btn-primary js-btn-step" :class="[{'hide':createGrupCuStep != 3}]"
                    data-orientation="next"
                    data-step="complete" @click="createGrup">
                Finish</button>
        </template>
    </Modal>

    <Modal :showModal=showInvite modalClass="py-0">
        <template v-slot:modalHeader>
            <h5>Invite Others</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    @click="toggleModal('invite-others')">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <template v-slot:modalBody>

            <form>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>Email address</label>
                            <input
                                    type="email"
                                    class="form-control form-control-md"
                                    id="inviteEmailAddress"
                                    placeholder="Type email address here"
                                    v-model="inviteother.email"
                            >
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Invitation message</label>
                            <textarea
                                    class="form-control form-control-md no-resize hide-scrollbar"
                                    id="inviteMessage"
                                    placeholder="Write your message here"
                                    rows=3
                                    v-model="inviteother.message"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>

        </template>
        <template v-slot:modalFooter>
            <button
                    variant="link"
                    class="btn btn-link text-muted js-btn-step mr-auto" @click="toggleModal('invite-others')">
                Cancel
            </button>

            <button type="button" class="btn btn-primary js-btn-step"  @click="sendInvitation">
                Send Invitation</button>
        </template>
    </Modal>

</template>

<script lang="ts">
    const enum groupTypes  {
        private =  'private',
        public = 'public'
    };

    interface groupObj {
        grpname :string,
        friends : string[],
        type:string,
        image:any
    }
    interface inviteotherType {
        email:string,
        message:string
    }
    import { ref, defineComponent,onMounted,watch,reactive } from 'vue'
    import NotificationsSvg from '../../assets/media/icons/notifications.svg';
    import Dropdown from '../Base/Dropdown.vue'
    import Modal from "../Base/Modal.vue";
    import Notifications from '../../Services/Notifications'
    import NotificationRow from "../Base/NotificationRow.vue";
    import SearchSvg from  '../../assets/media/icons/search.svg';
    import Friends from "../../Services/Friends";
    import FriendRow from "../Base/FriendRow.vue";
    import CreateGroup from './CreateGroup.vue'
    import{ ResponseType,dpOptionType,Sgfriend } from '../../Config/Config';
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
                FriendRow,
                CreateGroup
        },
        setup: () => {
                const showNotification = ref(false);
                const createGrupCuStep = ref(1);
                const showNewChat = ref(false);
                const showCreateGroup = ref(false);
                const showInvite = ref(false);
                const notificationList = ref({});
                const friendSearch = ref('');
                const friendsList = ref();
                const createGrpMdlTitle = ref('Create a New Group');
                const creategroupobj = reactive<groupObj>({
                    grpname :'',
                    friends : [],
                    type:'',
                    image:''
                });

                const inviteother = reactive<inviteotherType>({
                    email:'',
                    message:''
                })

            watch(createGrupCuStep, (first) => {

                if(first == 3)
                {
                    createGrpMdlTitle.value = 'Finished';
                }else if(first == 2)
                {
                    createGrpMdlTitle.value = 'Add Group Members';
                }else
                {
                    createGrpMdlTitle.value = 'Create a New Group';
                }

            });
                function toggleModal(modal: String) : void {
                    if(modal == 'notification')
                    {
                        showNotification.value = !showNotification.value;
                    }else if(modal == 'new-chat')
                    {
                        showNewChat.value = !showNewChat.value;
                        friendSearch.value ='';
                    }else if(modal == 'create-group')
                    {
                        showCreateGroup.value = !showCreateGroup.value;
                    }else if(modal == 'invite-others')
                    {
                        showInvite.value = !showInvite.value;
                    }
                    createGrupCuStep.value = 1;

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
                        value : 'invite-others',
                        label : 'Invite Others'
                    }
                ];

                function charOpHandler(option : dpOptionType) :void
                {
                    toggleModal(option.value);
                }

           function getNotificationsList(){

                Notifications.getAll().then((response: ResponseType) => {

                    notificationList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }

           function getFriendList(){

                Friends.getAll().then((response: ResponseType) => {

                    friendsList.value = response.data;

                }).catch((e: Error) => {
                    console.log(e);
                });
            }

            onMounted(() => {

                getNotificationsList();
                getFriendList();

            });

            function filteredFriendList() {

                let friendListAr : Sgfriend[] = friendsList.value;
                if(friendListAr == undefined)
                    return [];
                if(friendSearch.value === '' || friendSearch.value == null)
                                        return friendListAr;

                return friendListAr.filter(entry => {
                    return entry.user_name.toLowerCase().includes(friendSearch.value.toLowerCase())
                })
            }

            function createGrup() :void{
                console.log(creategroupobj)
                console.log(creategroupobj.grpname,creategroupobj.friends,creategroupobj.type,creategroupobj.image)

                console.log("Group create ajax call will be here")
                toggleModal('create-group')
            }

            function sendInvitation() : void{
                console.log("sendInvitation")
                console.log(inviteother.email,inviteother.message)
                toggleModal('invite-others')
            }

            function groupPictureUpload (event :any) {

                const files = event.target.files
                let filename = files[0].name
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    creategroupobj.image = fileReader.result
                })
                fileReader.readAsDataURL(files[0])

            }
            return {
                    showNotification,

                    charOpHandler,
                    chatOptions,
                    toggleModal,
                    notificationList,
                    showNewChat,
                    filteredFriendList,
                    friendSearch,
                    showCreateGroup,
                    showInvite,
                    friendsList,
                    createGrupCuStep,
                    createGrpMdlTitle,
                    createGrup,
                    creategroupobj,
                    groupPictureUpload,
                    sendInvitation,
                    inviteother
                }
        },
        methods : {

        }
    })
</script>
