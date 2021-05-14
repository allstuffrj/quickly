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
            <!-- <Dropdown>
                <Dropdown.Toggle
                        class="text-muted hw-20 mt-2"
                        as={VerticalOptionDots}
                ></Dropdown.Toggle>
                <Dropdown.Menu class="dropdown-menu dropdown-menu-right">
                    <a
                            class="dropdown-item"
                            onClick={this.toggleNewChat}
                            to="#" >
                        New Chat
                    </a>
                    <a
                            class="dropdown-item"
                            onClick={this.toggleCreateGroup}
                            to="#"
                    >
                        Create Group
                    </a>
                    <a
                            class="dropdown-item"
                            onClick={this.toggleInviteOthers}
                            to="#"
                    >
                        Invite Others
                    </a>
                </Dropdown.Menu>
            </Dropdown> -->
        </li>
    </ul>

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import NotificationsSvg from '../../assets/media/icons/notifications.svg';
    import Dropdown from '../Base/Dropdown.vue'

    export default defineComponent({
        name: 'ChatAction',
        props: {
            
        },
        components : {
                NotificationsSvg,
                Dropdown
        },
        setup: () => {
                const showNotification = ref(false);
                function toggleNotification() : void {
                    showNotification.value = !showNotification.value;
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
            return {showNotification,toggleNotification,charOpHandler,chatOptions}
        }
    })
</script>
