<template>
    <!-- Chat Content Start-->
    <div class="chat-content p-2" id="messageBody">
        <div class="container" id="msg-container">

            <!-- Message Day Start -->
            <div class="message-day" v-for="(converse,y) in   currentConversation.conversations" >

                <div class="message-divider sticky-top pb-2" :data-label=timeAgo(converse.date,false)>&nbsp;</div>


                <div class="message" :class="[{'self' : conversemsg.is_sent}]" v-for="(conversemsg,i) in
                converse.list">
                    <div class="message-wrapper">
                        <div class="message-content">
                            <span v-if="conversemsg.message_type.includes('text')">{{conversemsg.message}}</span>

                            <div class="document" v-if="conversemsg.message_type == 'document' ">
                                <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                    <DocumentIcon class="injectable hw-24" ></DocumentIcon>

                                </div>

                                <div class="document-body">
                                    <h6>
                                        <a :href=conversemsg.message_link class="text-reset"
                                           :title=conversemsg.message>{{conversemsg.message}}</a>
                                    </h6>

                                    <ul class="list-inline small mb-0">
                                        <li class="list-inline-item">
                                            <span class="text-muted">{{conversemsg.file_size}}</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="text-muted text-uppercase">{{conversemsg.file_type}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h6  v-if="conversemsg.message_type == 'image' && conversemsg.message != '' ">{{conversemsg.message}}</h6>
                            <div class="form-row" v-if="conversemsg.message_link">
                                <div class="col"  @click=showImg(index) v-for="(img,index) in conversemsg.message_link">
                                    <a class="popup-media" href="javascript:void(0)">
                                        <img class="img-fluid rounded" :src=img alt="">
                                    </a>
                                </div>
                                <vue-easy-lightbox :visible="imgPopupVisible" :imgs=conversemsg.message_link :index="imgIndex" @hide="handleImgHide" ></vue-easy-lightbox>

                            </div>

                        </div>
                    </div>
                    <div class="message-options">
                        <div class="avatar avatar-sm"><img alt="" :src=conversemsg.avatar></div>
                        <span class="message-date" >{{ timeAgo(conversemsg.datetime) }}</span>
                        <DropdownWithSlot  title="Details" displayType="kebabhorz" size=null xplacement="bottom-end"
                                          emptyLabel="Details"  defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(0px, -121px, 0px); top: 0px; left: 0px; will-change: transform;">



                            <template v-slot:menus>

                                 <a class="dropdown-item d-flex align-items-center" href="#">
                                    <DuplicateIcon class="injectable hw-18 mr-2"
                                                   alt="message duplicate"></DuplicateIcon>
                                    <span>Copy</span>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <ReplyIcon class="injectable hw-18 mr-2" alt="message replay"></ReplyIcon>
                                    <span>Replay</span>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">

                                    <ReplyIcon class="injectable rotate-y hw-18 mr-2" alt="message forward"></ReplyIcon>
                                    <span>Forward</span>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <StarIcon class="injectable hw-18 mr-2" alt="message favourite"></StarIcon>
                                   <span>Favourite</span>
                                </a>
                                <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                                     <TrashIcon class="injectable hw-18 mr-2" alt="message delete"></TrashIcon>
                                    <span>Delete</span>
                                </a>
                            </template>
                        </DropdownWithSlot>
                        </div>
                        <span :ref="setMsgRef"></span>
                </div>
                <!-- Received Message End -->


            </div>
            <!-- Message Day End -->
         </div>

        <!-- Scroll to finish -->
        <div class="chat-finished" id="chat-finished"></div>
    </div>
    <!-- Chat Content End-->
</template>

<script lang="ts">

    import { ref, defineComponent,computed,onMounted } from 'vue'
    import { useStore } from "../../../store";
    import  timeAgo from '../../../Config/timeAgo'
    import DotsHorizontalIcon from '../../../assets/media/heroicons/outline/dots-horizontal.svg';
    import DuplicateIcon from '../../../assets/media/heroicons/outline/duplicate.svg';
    import ReplyIcon from '../../../assets/media/heroicons/outline/reply.svg';
    import StarIcon from '../../../assets/media/heroicons/outline/star.svg';
    import TrashIcon from '../../../assets/media/heroicons/outline/trash.svg';
    import DocumentIcon from '../../../assets/media/heroicons/outline/document.svg';
    import DropdownWithSlot from "../../Base/DropdownWithSlot.vue";
    import VueEasyLightbox from 'vue-easy-lightbox'
    export default defineComponent({
        name: 'ChatContent',
        props: {

        },
        components : {
            DotsHorizontalIcon,
            DuplicateIcon,ReplyIcon,StarIcon,TrashIcon,DropdownWithSlot,DocumentIcon,VueEasyLightbox

        },
        setup: () => {
            const store = useStore();
            const count = ref(store.state);
            const filteredConversationList = ref({})
            const imgIndex = ref(0);
            const imgPopupVisible = ref(false);
                function showImg(index) {
                    imgIndex.value = index
                    imgPopupVisible.value = true
                }
                function handleImgHide() {
                    imgPopupVisible.value = false
                }
                let msgRefs = []
                const setMsgRef = el => {
                    if (el) {
                        msgRefs.push(el)
                    }
                }
                function scrollIntoView() {
                    var lastPosition = msgRefs.length-1;

                    const container = msgRefs[lastPosition];
                   if (container) {
                        container.scrollIntoView({ behavior: "smooth" });
                    }
                }
                onMounted(() => {
                    scrollIntoView();
                });
            const currentConversation = computed(() => store.getters.currentConversation);



            const filterText = computed(() => {
                var srchTxt = store.getters.currentSearchText;
                if(srchTxt=='')
                {
                    filteredConversationList.value = currentConversation.conversations;
                    return;
                }

                var tempList = [];
                tempList = currentConversation.conversations;
                if(srchTxt != '' && srchTxt != null)
                {
                    tempList =  tempList.filter(entry => {
                        return   entry.list.filter(msgli => {
                            return entry.message.toLowerCase().includes(srchTxt.toLowerCase())
                        })
                    })
                }

                filteredConversationList.value = tempList;
            });
            return {
                currentConversation,timeAgo,showImg,handleImgHide,imgIndex,imgPopupVisible,setMsgRef,filterText
            }
        },
        methods : {

        }
    })
</script>
