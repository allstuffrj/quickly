<template>
    <!-- Chat Header Start-->
    <div class="chat-header">
        <!-- Chat Back Button (Visible only in Small Devices) -->
        <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close="">
            <ArrowLeft class="injectable hw-20"></ArrowLeft>
        </button>

        <!-- Chat participant's Name -->
        <div class="media chat-name align-items-center text-truncate">
            <div class="avatar  d-none d-sm-inline-block mr-3" :class="'avatar-'+currentConversation.status">
                <img :src=currentConversation.avatar alt="">
            </div>

            <div class="media-body align-self-center ">
                <h6 class="text-truncate mb-0">{{ currentConversation.name }}</h6>
                <small class="text-muted text-capitalize">{{ currentConversation.status }}</small>
            </div>
        </div>

        <!-- Chat Options -->
        <ul class="nav flex-nowrap">
            <li class="nav-item list-inline-item d-none d-sm-block mr-1">
                <a class="nav-link text-muted px-1" data-toggle="collapse" data-target="#searchCollapse" href="#" aria-expanded="false">
                    <SearchIcon class="injectable hw-20"></SearchIcon>
                </a>
            </li>

            <li class="nav-item list-inline-item d-none d-sm-block mr-1">
                <a class="nav-link text-muted px-1" href="#" title="Add People">
                      <Phone class="injectable hw-20"></Phone>
                </a>
            </li>
            <li class="nav-item list-inline-item d-none d-sm-block mr-0">
                <DropdownWithSlot title="Details" displayType="kebab" size=null xplacement="bottom-end"
                                  emptyLabel="Details"

                                  defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-172px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">



                    <template v-slot:menus>


                        <a class="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">

                            <InformationCircle class="injectable hw-20 mr-2"></InformationCircle>
                            <span>View Info</span>
                        </a>

                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <VolumeOff class="injectable hw-20 mr-2"></VolumeOff>
                            <span>Mute Notifications</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <PhotoGraph class="injectable hw-20 mr-2"></PhotoGraph>
                            <span>Wallpaper</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <Archive class="injectable hw-20 mr-2"></Archive>
                            <span>Archive</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <Trash class="injectable hw-20 mr-2"></Trash>
                            <span>Delete</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex text-danger" href="#">

                            <Ban class="injectable hw-20 mr-2"></Ban>
                            <span>Block</span>
                        </a>
                    </template>
                </DropdownWithSlot>

            </li>
            <li class="nav-item list-inline-item d-sm-none mr-0">
                <DropdownWithSlot title="Details" displayType="kebab" size=null xplacement="bottom-end"
                          emptyLabel="Details"

                           defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-172px, 40px, 0px); top: 0px; left: 0px; will-change: transform;">



                        <template  v-slot:menus>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <Phone class="injectable hw-20 mr-2"></Phone>
                            <span>Call</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#" data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false">

                            <SearchIcon class="injectable hw-20 mr-2"></SearchIcon>
                            <span>Search</span>
                        </a>

                        <a class="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">

                            <InformationCircle class="injectable hw-20 mr-2"></InformationCircle>
                            <span>View Info</span>
                        </a>

                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <VolumeOff class="injectable hw-20 mr-2"></VolumeOff>
                            <span>Mute Notifications</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <PhotoGraph class="injectable hw-20 mr-2"></PhotoGraph>
                            <span>Wallpaper</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <Archive class="injectable hw-20 mr-2"></Archive>
                            <span>Archive</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex" href="#">

                            <Trash class="injectable hw-20 mr-2"></Trash>
                            <span>Delete</span>
                        </a>
                        <a class="dropdown-item align-items-center d-flex text-danger" href="#">

                            <Ban class="injectable hw-20 mr-2"></Ban>
                            <span>Block</span>
                        </a>
                        </template>
                </DropdownWithSlot>

            </li>
        </ul>
    </div>
    <!-- Chat Header End-->
</template>

<script lang="ts">

    import { ref, defineComponent,computed } from 'vue'
    import ArrowLeft from '../../../assets/media/heroicons/outline/arrow-left.svg';
    import SearchIcon from '../../../assets/media/heroicons/outline/search.svg';
    import Phone from '../../../assets/media/heroicons/outline/phone.svg';
    import DotsVertical from '../../../assets/media/heroicons/outline/dots-vertical.svg';
    import InformationCircle from '../../../assets/media/heroicons/outline/information-circle.svg';
    import VolumeOff from '../../../assets/media/heroicons/outline/volume-off.svg';
    import PhotoGraph from '../../../assets/media/heroicons/outline/photograph.svg';
    import Archive from '../../../assets/media/heroicons/outline/archive.svg';
    import Trash from '../../../assets/media/heroicons/outline/trash.svg';
    import Ban from '../../../assets/media/heroicons/outline/ban.svg';
    import DropdownWithSlot from "../../Base/DropdownWithSlot.vue";
    import { useStore } from "../../../store";

    export default defineComponent({
        name: 'ChatHeader',
        props: {

        },
        components : {
            ArrowLeft,
            SearchIcon,
            Phone,
            DotsVertical,
            InformationCircle,
            VolumeOff,
            PhotoGraph,
            Archive,
            Trash,
            Ban,
            DropdownWithSlot
        },
        setup: () => {

            const store = useStore();
            const count = ref(store.state);

            const currentConversation = computed(() => store.getters.currentConversation);

            return {
                currentConversation
            }
        },
        methods : {

        }
    })
</script>
