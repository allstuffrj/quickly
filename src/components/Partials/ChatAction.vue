<template>
    <ul class="nav flex-nowrap">
        <li class="nav-item list-inline-item mr-1">
            <a class="nav-link text-muted px-1" title="Notifications" role="button" data-toggle="modal"
                    data-target="#notificationModal"
                    @click="toggleNotification"
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
    <Modal :showModal=showNotification @modalClose="modalClosed">

            <template v-slot:modalHeader>
            <h5 class="modal-title" id="notificationModalLabel">Notifications</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggleNotification">
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

</template>

<script lang="ts">

    import { ref, defineComponent,onMounted } from 'vue'
    import NotificationsSvg from '../../assets/media/icons/notifications.svg';
    import Dropdown from '../Base/Dropdown.vue'
    import Modal from "../Base/Modal.vue";
    import Notifications from '../../Services/Notifications'
    import NotificationRow from "../Base/NotificationRow.vue";
    export default defineComponent({
        name: 'ChatAction',
        props: {

        },
        components : {
                NotificationsSvg,
                Dropdown,
                Modal,
                NotificationRow
        },
        setup: () => {
                const showNotification = ref(false);
                const notificationList = ref({})
                function toggleNotification() : void {
                    showNotification.value = !showNotification.value;
                    console.log(showNotification.value);
                    /*if(document.getElementsByClassName("rj-modal-con")){
// I have the 'hidden' class //.classList.contains("hidden")
                    }*/
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

                function charOpHandler(option)
                {

                }

                function modalClosed(value)
                {
                    showNotification.value = !showNotification.value;
                }
           function getNotificationsList(){

                Notifications.getAll().then((response: object) => {
                    notificationList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }

            onMounted(() => {

                getNotificationsList();
            })

            return {showNotification,toggleNotification,charOpHandler,chatOptions,modalClosed,notificationList}
        },
        methods : {

        }
    })
</script>
