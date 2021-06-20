<template>

    <aside class="sidebar">
        <div class="tab-content">
            <div class="tab-pane active" id="chats-content">
                <div class="d-flex flex-column h-100">
                    <div class="hide-scrollbar h-100" id="chatContactsList">
                        <div class="sidebar-header sticky-top p-2">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="font-weight-semibold mb-0">Calls</h5>
                                <ChatAction/>
                            </div>
                            <div class="sidebar-sub-header">
                                <Dropdown title="Details" :displayType=dpDisplayType :size=dpsize :xplacement=xplacement
                                          :emptyLabel=emptyLabel
                                          :options=options
                                          @change="dpChangeHandler" :defaultvalue=defaultvalue dpstyle="position: absolute; transform: translate3d(0px, 37px, 0px); top: 0px; left: 0px; will-change: transform;"></Dropdown>

                                <SerachForm v-model="searchInput"></SerachForm>
                            </div>
                        </div>


                        <CallListRender :callsList=filteredCallsList></CallListRender>

                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">

    import ChatAction from "../Partials/ChatAction.vue";
    import Dropdown from "../Base/Dropdown.vue";
    import SerachForm from "../Base/SerachForm.vue";
    import {ref, defineComponent, computed, watch, onMounted} from 'vue'
    import CallListRender from "../Partials/CallListRender.vue";
    import Calls from "../../Services/Calls";

    export default defineComponent({
        name: 'CallsList',
        props: {},
        components: {
            Dropdown,
            ChatAction,
            SerachForm,
            CallListRender
        },
        setup: () => {
            const searchInput = ref(null);
            watch(searchInput, (neval, oldVal) => {
                dpChangeHandler(currentSelected.value)
            });
            const options = [
                {
                    value: 'all-calls',
                    label: 'All Calls'
                },
                {
                    value: 'incoming',
                    label: 'Incoming'
                }, {
                    value: 'outgoing',
                    label: 'Outgoing'
                }, {
                    value: 'missed-calls',
                    label: 'Missed Calls'
                }
            ];
            const emptyLabel = "All Calls";
            const dpsize = "border-0 f-16 p-0 min-w-150 cut-texts";
            const xplacement = "bottom-start";
            const defaultvalue = 'all-calls';
            const dpDisplayType = 'button';
            const callsList = ref({});
            const filteredCallsList = ref({});
            const currentSelected = ref(options[0]);
            function getCallsList() {

                Calls.getCalls().then((response: object) => {

                    callsList.value = response.data;
                    filteredCallsList.value = response.data;
                }).catch((e: Error) => {
                    console.log(e);
                });
            }


            function  dpChangeHandler  (selected: object): void {

                currentSelected.value = selected;
                if(selected.value=='all-calls')
                {
                    let ListAr = callsList.value;
                    if(searchInput.value != '' && searchInput.value != null)
                    {

                        ListAr = ListAr.filter(entry => {
                            return entry.user_name.toLowerCase().includes(searchInput.value.toLowerCase())
                        })
                    }
                    filteredCallsList.value = ListAr;
                    return;
                }

                var tempList = [];

                tempList = callsList.value.filter(entry => {
                        var tempD = {};
                        if(selected.value == 'incoming')
                        {
                            return entry.type == "incoming";

                        }else if(selected.value == 'outgoing')
                        {
                            return entry.type == "outgoing";

                        }else if(selected.value == 'missed-calls')
                        {
                            return entry.type == "missed-calls";

                        }

                });

                if(searchInput.value != '' && searchInput.value != null)
                {
                    tempList =  tempList.filter(entry => {
                        return entry.user_name.toLowerCase().includes(searchInput.value.toLowerCase())
                    })
                }
                filteredCallsList.value = tempList;
            }


            onMounted(() => {

                getCallsList();

            });
            return {options, emptyLabel, dpsize, defaultvalue, dpDisplayType, searchInput,
                xplacement,filteredCallsList,dpChangeHandler}
        }

    })
</script>
