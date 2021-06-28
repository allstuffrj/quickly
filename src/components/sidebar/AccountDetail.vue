<template>

    <aside class="sidebar">
        <div class="tab-content">
            <div class="tab-pane active" id="chats-content">
                <div class="d-flex flex-column h-100">
                    <div class="hide-scrollbar h-100" id="chatContactsList">
                        <div class="sidebar-header sticky-top p-2 mb-3">
                            <h5 class="font-weight-semibold">Profile</h5>
                            <p class="text-muted mb-0">Personal Information & Settings</p>
                        </div>

                        <!-- Sidebar Content Start -->
                        <div class="container-xl">
                            <div class="row">
                                <div class="col">

                                    <!-- Card Start -->
                                    <div class="card card-body card-bg-5">

                                        <!-- Card Details Start -->
                                        <div class="d-flex flex-column align-items-center">
                                            <div class="avatar avatar-lg mb-3">
                                                <img class="avatar-img" :src=user.avatar :alt=user.user_name>
                                            </div>

                                            <div class="d-flex flex-column align-items-center">
                                                <h5>{{user.user_name}}</h5>
                                            </div>

                                            <div class="d-flex">
                                                <button class="btn btn-outline-default mx-1" type="button">

                                                    <Logout class="injectable hw-18 d-sm-inline-block"></Logout>
                                                    <span>Logout</span>
                                                </button>
                                                <button class="btn btn-outline-default mx-1 d-xl-none" data-profile-edit="" type="button">

                                                    <Cog class="injectable hw-18 d-sm-inline-block"></Cog>
                                                    <span>Settings</span>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- Card Details End -->

                                        <!-- Card Options Start -->
                                        <div class="card-options">
                                            <DropdownWithSlot title="Details" displayType="kebab" size=null xplacement="bottom-start"
                                                              emptyLabel="Details"

                                                              defaultvalue=null :setActive=false  dpstyle="position: absolute; transform: translate3d(-151px, 48px, 0px); top: 0px; left: 0px; will-change: transform;">



                                                <template v-slot:menus>

                                                    <a class="dropdown-item" href="javascript:void(0)">Change Profile
                                                        Picture</a>
                                                    <a class="dropdown-item" href="javascript:void(0)">Change Number</a>

                                                </template>
                                            </DropdownWithSlot>

                                        </div>
                                        <!-- Card Options End -->

                                    </div>
                                    <!-- Card End -->

                                    <!-- Card Start -->
                                    <div class="card mt-3">

                                        <!-- List Group Start -->
                                        <ul class="list-group list-group-flush">

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Local Time</p>
                                                        <p class="mb-0">{{user.local_time}}</p>
                                                    </div>
                                                    <Clock class="injectable text-muted hw-20 ml-1"></Clock>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Birthdate</p>
                                                        <p class="mb-0">{{user.birth_date}}</p>
                                                    </div>

                                                    <Calender class="injectable text-muted hw-20 ml-1"></Calender>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Phone</p>
                                                        <p class="mb-0">{{user.phone}}</p>
                                                    </div>

                                                    <Phone class="injectable text-muted hw-20 ml-1"></Phone>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Email</p>
                                                        <p class="mb-0">{{user.email}}</p>
                                                    </div>


                                                    <Email class="injectable text-muted hw-20 ml-1" ></Email>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Website</p>
                                                        <p class="mb-0">{{user.website}}</p>
                                                    </div>

                                                    <Globe class="injectable text-muted hw-20 ml-1" ></Globe>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item pt-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Address</p>
                                                        <p class="mb-0">{{user.address}}</p>
                                                    </div>

                                                    <Home class="injectable text-muted hw-20 ml-1" ></Home>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                        </ul>
                                        <!-- List Group End -->

                                    </div>
                                    <!-- Card End -->

                                    <!-- Card Start -->
                                    <div class="card my-3">

                                        <!-- List Group Start -->
                                        <ul class="list-group list-group-flush">

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Facebook</p>
                                                        <a class="font-size-sm font-weight-medium" target="_blank" :href=user.facebook_url>{{user.facebook_url}}</a>
                                                    </div>

                                                    <Facebook class="injectable text-muted hw-20 ml-1" ></Facebook>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Twitter</p>
                                                        <a class="font-size-sm font-weight-medium" target="_blank"  :href=user.twitter_url>{{user.twitter_url}}</a>
                                                    </div>

                                                        <Twitter class="injectable text-muted hw-20 ml-1" ></Twitter>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Instagram</p>
                                                        <a class="font-size-sm font-weight-medium" target="_blank"  :href=user.instagram_url>{{user.instagram_url}}</a>
                                                    </div>

                                                    <Instagram class="injectable text-muted hw-20 ml-1"></Instagram>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                            <!-- List Group Item Start -->
                                            <li class="list-group-item py-2">
                                                <div class="media align-items-center">
                                                    <div class="media-body">
                                                        <p class="small text-muted mb-0">Linkedin</p>

                                                        <a class="font-size-sm font-weight-medium" target="_blank" :href=user.linkedin_url>{{user.linkedin_url}}</a>
                                                    </div>

                                                        <LinkedIn class="injectable text-muted hw-20 ml-1"></LinkedIn>

                                                </div>
                                            </li>
                                            <!-- List Group Item End -->

                                        </ul>
                                        <!-- List Group End -->

                                    </div>
                                    <!-- Card End -->

                                </div>
                            </div>
                        </div>
                        <!-- Sidebar Content End -->

                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">


    import Dropdown from "../Base/Dropdown.vue";

    import {ref, defineComponent, computed, watch, onMounted} from 'vue'
    import { useStore } from "../../store";
    import Logout from '../../assets/media/heroicons/outline/logout.svg';
    import Cog from '../../assets/media/heroicons/outline/cog.svg';
    import DropdownWithSlot from "../Base/DropdownWithSlot.vue";
    import Phone from "../../assets/media/heroicons/outline/phone.svg";
    import Clock from "../../assets/media/heroicons/outline/clock.svg";
    import Calender from "../../assets/media/heroicons/outline/calendar.svg";
    import Email from "../../assets/media/heroicons/outline/mail.svg";
    import Globe from "../../assets/media/heroicons/outline/globe.svg";
    import Home from "../../assets/media/heroicons/outline/home.svg";
    import Facebook from "../../assets/media/icons/facebook.svg";
    import Twitter from "../../assets/media/icons/twitter.svg";
    import Instagram from "../../assets/media/icons/instagram.svg";
    import LinkedIn from "../../assets/media/icons/linkedin.svg";
    import {userdata} from "../../Config/Config"
    export default defineComponent({
        name: 'AccountDetail',
        props: {},
        components: {
            Dropdown,
            Logout,
            Cog,
            DropdownWithSlot,
            Clock,
            Calender,
            Email,
            Globe,
            Home,
            Facebook,
            Twitter,
            Instagram,
            LinkedIn,
            Phone
        },
        setup: () => {
            const store = useStore();
            const user = computed(() =>  <userdata>store.getters.currentUser);

            return {user }
        }

    })
</script>
