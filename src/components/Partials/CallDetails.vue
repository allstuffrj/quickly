<template>
    <main class="main " :class="[{'main-visible':currentMainVisible}]">

        <div class="calls px-0 py-2 p-xl-3">
            <div class="container-xl">
                <div class="row">
                    <div class="col">
                        <div class="card card-bg-1 mb-3">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center">
                                    <div class="avatar avatar-lg mb-3">
                                        <img class="avatar-img" :src=calllogs.avatar :alt=calllogs.user_name>
                                    </div>

                                    <div class="d-flex flex-column align-items-center">
                                        <h5 class="mb-1">{{calllogs.user_name}}</h5>
                                        <p class="text-white rounded px-2 bg-primary">{{calllogs.phone}}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card-options">
                                <DropdownWithSlot title="Details" displayType="kebab" size=null xplacement="bottom-end"
                                                  emptyLabel="Details"

                                                  defaultvalue=null :setActive=false dpclass="dropdown-menu-right" dpstyle="position: absolute; transform: translate3d(-134px, 48px, 0px); top: 0px; left: 0px; will-change: transform;">



                                    <template v-slot:menus>

                                        <a class="dropdown-item" href="javascript:void(0)"
                                           @click="clearCallLogs">Clear
                                            Call Log</a>
                                        <a class="dropdown-item" @click="blockUser"  href="javascript:void(0)" >Block
                                        </a>

                                    </template>
                                </DropdownWithSlot>


                            </div>

                            <div class="chat-closer d-xl-none">
                                <MobileNavigationArrow></MobileNavigationArrow>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row calls-log">
                    <div class="col">
                        <div class="card" v-for="history in calllogs.history">
                            <div class="card-body">
                                <div class="media">
                                    <div class="avatar avatar-primary mr-2">
                                            <span>
                                                <PhoneIncoming v-if="history.type != 'outgoing'"
                                                               class="injectable hw-24"></PhoneIncoming>
                                                <PhoneOutgoing v-if="history.type == 'outgoing'"
                                                   class="injectable hw-24"></PhoneOutgoing>
                                            </span>
                                    </div>

                                    <div class="media-body">
                                        <h6 v-if="history.type == 'incoming'">Incoming Call</h6>
                                        <h6 v-if="history.type == 'outgoing'">Outgoing Call</h6>
                                        <h6 class="text-danger" v-if="history.type == 'missed-calls'">Missed Call</h6>

                                        <div class="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                            <p class="text-muted mb-0">{{ timeAgo(history.time) }}</p><span
                                                class="d-none d-sm-block text-muted mx-2" v-if="history.type != 'missed-calls'">•</span>
                                            <p class="text-muted mb-0"
                                               v-if="history.type != 'missed-calls'">{{timeDiff(history.time,history.end_time)
                                                }}</p>
                                        </div>
                                    </div>

                                    <div class="media-options ml-1 d-none d-sm-block">
                                        <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" >
                                            <Phone class="injectable hw-20"></Phone>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </main>

</template>

<script lang="ts">

    import {ref, defineComponent, onMounted, watch, reactive, computed} from 'vue'
    import { useStore } from "../../store";
    import  timeAgo from '../../Config/timeAgo'
    import timeDiff from "../../Config/timeDiff";
    import ArrowLeft from "../../assets/media/heroicons/outline/arrow-left.svg";
    import PhoneIncoming from '../../assets/media/heroicons/solid/phone-incoming.svg'
    import PhoneOutgoing from '../../assets/media/heroicons/solid/phone-outgoing.svg'
    import Phone from '../../assets/media/heroicons/outline/phone.svg'
    import DropdownWithSlot from "../Base/DropdownWithSlot.vue";
    import MobileNavigationArrow from "./MobileNavigationArrow.vue";
    export default defineComponent({
        name: 'CallDetails',
        props: {

        },
        components : {
            DropdownWithSlot,
            ArrowLeft,
            PhoneIncoming,
            PhoneOutgoing,
            Phone,
            MobileNavigationArrow
        },
        setup: () => {
            const store = useStore();
            const currentMainVisible = computed(() => store.getters.currentMainVisible);
            const calllogs = computed(() => store.getters.currentCall);

            function clearCallLogs()
            {
                console.log("Clear call logs functionality will goes here")
            }

            function blockUser()
            {
                console.log("Block user functionality will goes here")
            }
            return {calllogs,clearCallLogs,blockUser,timeAgo,timeDiff,currentMainVisible}
        },
        methods : {

        }
    })
</script>
