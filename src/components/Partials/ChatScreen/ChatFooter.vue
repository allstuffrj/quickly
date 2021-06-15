<template>
    <!-- Chat Footer Start-->
    <div class="chat-footer">
        <div class="attachment">
            <DropdownWithSlot title="Details" displayType="circle" size=null xplacement="top-start"
                              emptyLabel="Details"  defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(0px, -236px, 0px); top: 0px; left: 0px; will-change: transform;">
                   <template  v-slot:menus>
                       <a class="dropdown-item" href="javascript:void(0)">
                           <PhotoGraph class="injectable hw-20 mr-2"></PhotoGraph>
                             <span>Gallery</span>
                       </a>
                       <a class="dropdown-item" href="javascript:void(0)">

                        <VolumeUp class="injectable hw-20 mr-2"></VolumeUp>
                           <span>Audio</span>
                       </a>
                       <a class="dropdown-item" href="javascript:void(0)">

                            <DocumentIcon class="injectable hw-20 mr-2"></DocumentIcon>

                           <span>Document</span>
                       </a>
                       <a class="dropdown-item" href="javascript:void(0)">

                            <UserIcon class="injectable hw-20 mr-2" ></UserIcon>

                           <span>Contact</span>
                       </a>
                       <a class="dropdown-item" href="javascript:void(0)">
                            <LocationMarkerIcon class="injectable hw-20 mr-2"></LocationMarkerIcon>
                           <span>Location</span>
                       </a>
                       <a class="dropdown-item" href="javascript:void(0)">

                            <ChartSquareBarIcon class="injectable hw-20 mr-2"></ChartSquareBarIcon>

                           <span>Poll</span>
                       </a>
                   </template>
            </DropdownWithSlot>

        </div>
        <textarea  class="form-control emojionearea-form-control" id="messageInput" rows="1"
                   placeholder="Type your message here..."></textarea>
        <button type="button" @click="sendMessage"  class="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                role="button">

            <ArrowRightIcon class="injectable"></ArrowRightIcon>

        </button>
    </div>
    <!-- Chat Footer End-->
</template>

<script lang="ts">

    import { ref, defineComponent,computed,onMounted,reactive } from 'vue'
    import { useStore } from "../../../store";
    import PhotoGraph from '../../../assets/media/heroicons/outline/photograph.svg';
    import VolumeUp from '../../../assets/media/heroicons/outline/volume-up.svg';
    import DocumentIcon from '../../../assets/media/heroicons/outline/document.svg';
    import UserIcon from '../../../assets/media/heroicons/outline/user.svg';
    import LocationMarkerIcon from '../../../assets/media/heroicons/outline/location-marker.svg';
    import ChartSquareBarIcon from '../../../assets/media/heroicons/outline/chart-square-bar.svg';
    import ArrowRightIcon from '../../../assets/media/heroicons/outline/arrow-right.svg';
    import DropdownWithSlot from "../../Base/DropdownWithSlot.vue";

    export default defineComponent({
        name: 'ChatFooter',
        props: {

        },
        components : {
            PhotoGraph,
            VolumeUp,
            DocumentIcon,
            UserIcon,
            LocationMarkerIcon,
            ChartSquareBarIcon,
            ArrowRightIcon,
            DropdownWithSlot
        },
        setup: () => {
            const messageInput = ref('');
            let emojObject = '';
            onMounted(() => {
                emojObject = $('#messageInput').emojioneArea({
                    autocomplete: false,
                    events: {
                        keyup: function (editor, event) {
                            messageInput.value = editor.html();
                        }
                    }
                })
            })
            const store = useStore();
            const count = ref(store.state);

            const currentConversation = computed(() => store.getters.currentConversation);

            function sendMessage()
            {
                if(messageInput.value != '')
                {
                    // ajax call or socket call will write here for send message
                }
            }
            return {
                currentConversation,
                messageInput,
                sendMessage
            }
        },
        methods : {

        }
    })
</script>
