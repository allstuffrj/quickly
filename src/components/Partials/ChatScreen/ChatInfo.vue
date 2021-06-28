<template>
    <!-- Chat Info Start -->
    <div class="chat-info" :class="[{'chat-info-visible':showChatInfo}]">
        <div class="d-flex h-100 flex-column">

            <!-- Chat Info Header Start -->
            <div class="chat-info-header px-2">
                <div class="container-fluid">
                    <ul class="nav justify-content-between align-items-center">
                        <!-- Sidebar Title Start -->
                        <li class="text-center">
                            <h5 class="text-truncate mb-0">Profile Details</h5>
                        </li>
                        <!-- Sidebar Title End -->

                        <!-- Close Sidebar Start -->
                        <li class="nav-item list-inline-item">
                            <a class="nav-link text-muted px-0" href="javascript:void(0)" @click="closeChatInfo"
                               data-chat-info-close="">
                                <closeIcon class="injectable hw-22"></closeIcon>


                            </a>
                        </li>
                        <!-- Close Sidebar End -->
                    </ul>
                </div>
            </div>
            <!-- Chat Info Header End  -->

            <!-- Chat Info Body Start  -->
            <div class="hide-scrollbar flex-fill">

                <!-- User Profile Start -->
                <div class="text-center p-3">

                    <!-- User Profile Picture -->
                    <div class="avatar avatar-xl mx-5 mb-3">
                        <img class="avatar-img" :src=currentConversation.avatar alt="">
                    </div>

                    <!-- User Info -->
                    <h5 class="mb-1">{{currentConversation.name}}</h5>
                    <p class="text-muted d-flex align-items-center justify-content-center">

                        <LocationMarkerIcon class="injectable mr-1 hw-18"></LocationMarkerIcon>
                        <span>{{currentConversation.location}}</span>
                    </p>

                    <!-- User Quick Options -->
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="btn btn-outline-default btn-icon rounded-circle mx-1">
                                <UserAddIcon class="injectable hw-20"></UserAddIcon>

                        </div>
                        <div class="btn btn-primary btn-icon rounded-circle text-light mx-1">
                            <HeartIcon class="injectable hw-20"></HeartIcon>

                        </div>
                        <div class="btn btn-danger btn-icon rounded-circle text-light mx-1">
                            <BanIcon class="injectable hw-20"></BanIcon>

                        </div>
                    </div>
                </div>
                <!-- User Profile End -->

                <!-- User Information Start -->
                <div class="chat-info-group">
                    <a class="chat-info-group-header" :class="[{'collapsed':!showUserInfo}]"
                       @click="toggleUserInfoBox"
                       data-toggle="collapse"
                       href="javascript:void(0)"
                       role="button"
                       :aria-expanded="showUserInfo" aria-controls="profile-info">
                        <h6 class="mb-0">User Information</h6>

                        <InformationCircleIcon  class="injectable text-muted hw-20"></InformationCircleIcon>

                    </a>

                    <div class="chat-info-group-body collapse" :class="[{'show':showUserInfo}]" id="profile-info">
                        <div class="chat-info-group-content list-item-has-padding">
                            <!-- List Group Start -->
                            <ul class="list-group list-group-flush ">

                                <!-- List Group Item Start -->
                                <li class="list-group-item border-0">
                                    <p class="small text-muted mb-0">Phone</p>
                                    <p class="mb-0">{{currentConversation.phone}}</p>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item border-0">
                                    <p class="small text-muted mb-0">Email</p>
                                    <p class="mb-0">{{currentConversation.email}}</p>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item border-0">
                                    <p class="small text-muted mb-0">Address</p>
                                    <p class="mb-0">{{currentConversation.address}}</p>
                                </li>
                                <!-- List Group Item End -->
                            </ul>
                            <!-- List Group End -->
                        </div>
                    </div>
                </div>
                <!-- User Information End -->

                <!-- Shared Media Start -->
                <div class="chat-info-group">
                    <a class="chat-info-group-header" :class="[{'collapsed':!showMediaInfo}]"
                       @click="toggleMediaInfoBox" data-toggle="collapse" href="javascript:void(0)" role="button"
                       :aria-expanded="showMediaInfo" aria-controls="shared-media">
                        <h6 class="mb-0">Last Media</h6>
                        <PhotographIcon class="injectable text-muted hw-20"></PhotographIcon>

                    </a>

                    <div class="chat-info-group-body collapse " :class="[{'show':showMediaInfo}]" id="shared-media">
                        <div class="chat-info-group-content">
                            <!-- Shared Media -->
                            <div class="form-row">
                                <div class="col-4 col-md-2 col-xl-4" v-if="currentConversation.last_media"
                                     v-for="media in currentConversation.last_media">
                                    <a href="javascript:void(0)">
                                        <img :src=media class="img-fluid rounded border" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- Shared Media End -->

                <!-- Shared Files Start -->
                <div class="chat-info-group">
                    <a class="chat-info-group-header" :class="[{'collapsed':!showDocumentInfo}]"  data-toggle="collapse"
                       href="javascript:void(0)" @click="toggleDocumentInfoBox" role="button"
                       :aria-expanded="showDocumentInfo" aria-controls="shared-files">
                        <h6 class="mb-0">Documents</h6>
                        <DocumentIcon class="injectable text-muted hw-20"></DocumentIcon>

                    </a>

                    <div class="chat-info-group-body collapse" :class="[{'show':showDocumentInfo}]" id="shared-files">
                        <div class="chat-info-group-content list-item-has-padding">
                            <!-- List Group Start -->
                            <ul class="list-group list-group-flush">

                                <!-- List Group Item Start -->
                                <li class="list-group-item" v-if="currentConversation.last_documents"
                                    v-for="doc in currentConversation.last_documents">
                                    <div class="document">
                                        <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                            <DocumentIcon class="injectable hw-24"></DocumentIcon>

                                        </div>

                                        <div class="document-body">
                                            <h6 class="text-truncate">
                                                <a href="{{doc.url}}" target="_blank" class="text-reset"
                                                   title="{{doc.name}}">{{doc.name}}</a>
                                            </h6>

                                            <ul class="list-inline small mb-0">
                                                <li class="list-inline-item">
                                                    <span class="text-muted">{{doc.size}}</span>
                                                </li>
                                                <li class="list-inline-item">
                                                    <span class="text-muted text-uppercase">{{doc.type}}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="document-options ml-1">
                                            <DropdownWithSlot  title="Details" displayType="kebab" size=null
                                                               xplacement="bottom-start"
                                                               emptyLabel="Details"  defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-111px, 48px, 0px); top: 0px; left: 0px; will-change: transform;">



                                                <template v-slot:menus>

                                                    <a class="dropdown-item" href="javascript:void(0)"
                                                       @click="downloadDoc(doc)">Download</a>
                                                    <a class="dropdown-item" @click="shareDoc(doc)"
                                                       href="javascript:void(0)">Share</a>
                                                    <a class="dropdown-item" @click="deleteDoc(doc)"
                                                       href="javascript:void(0)">Delete</a>
                                                </template>
                                            </DropdownWithSlot>

                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                            </ul>
                            <!-- List Group End -->
                        </div>
                    </div>
                </div>
                <!-- Shared Files End -->

            </div>
            <!-- Chat Info Body Start  -->

        </div>
    </div>
    <!-- Chat Info End -->
</template>

<script lang="ts">

    import { ref, defineComponent,computed } from 'vue'
    import {MutationTypes, useStore} from "../../../store";

    import closeIcon from '../../../assets/media/heroicons/outline/x.svg';
    import LocationMarkerIcon from '../../../assets/media/heroicons/outline/location-marker.svg';
    import UserAddIcon from '../../../assets/media/heroicons/outline/user-add.svg';
    import HeartIcon from '../../../assets/media/heroicons/outline/heart.svg';
    import BanIcon from '../../../assets/media/heroicons/outline/ban.svg';
    import InformationCircleIcon from '../../../assets/media/heroicons/outline/information-circle.svg';
    import PhotographIcon from '../../../assets/media/heroicons/outline/photograph.svg';
    import DocumentIcon from '../../../assets/media/heroicons/outline/document.svg';
    import DropdownWithSlot from "../../Base/DropdownWithSlot.vue";
    import {converDetail} from "../../../Config/Config";
    export default defineComponent({
        name: 'ChatInfo',
        props: {

        },
        components : {
            closeIcon,
            LocationMarkerIcon,
            UserAddIcon,
            HeartIcon,
            BanIcon,
            InformationCircleIcon,
            PhotographIcon,
            DocumentIcon,
            DropdownWithSlot
        },
        setup: () => {

            const store = useStore();
            const count = ref(store.state);
            const showChatInfo = computed(() => store.getters.currentShowChatInfo);
            const currentConversation = computed(() => <converDetail>store.getters.currentConversation);
            const showUserInfo = ref(true);
            const showMediaInfo = ref(true);
            const showDocumentInfo = ref(true);

            function toggleUserInfoBox()
            {

                showUserInfo.value = !showUserInfo.value;

            }
            function toggleMediaInfoBox()
            {
                showMediaInfo.value = !showMediaInfo.value;
            }
            function toggleDocumentInfoBox()
            {
                showDocumentInfo.value = !showDocumentInfo.value;
            }
            function closeChatInfo()
            {
                store.commit(MutationTypes.SHOW_CHATINFO, !store.getters.currentShowChatInfo);
            }
            function downloadDoc(doc :object)
            {
                console.log("Download doc code goes here")
            }

            function shareDoc(doc :object)
            {
                console.log("Share doc code goes here")
            }
            function deleteDoc(doc :object)
            {
                console.log("Delete doc code goes here")
            }
            return {
                currentConversation,
                showChatInfo,
                closeChatInfo,
                downloadDoc,
                shareDoc,
                deleteDoc,
                toggleUserInfoBox,
                toggleMediaInfoBox,
                toggleDocumentInfoBox,
                showUserInfo,
                showMediaInfo,
                showDocumentInfo
            }
        },
        methods : {

        }
    })
</script>
