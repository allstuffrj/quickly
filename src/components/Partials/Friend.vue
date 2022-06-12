<template>
  <main class="main " :class="[{ 'main-visible': currentMainVisible }]">
    <div class="friends px-0 py-2 p-xl-3">
      <div class="container-xl">
        <div class="row">
          <div class="col">
            <div class="card card-body card-bg-1 mb-3">
              <div class="d-flex flex-column align-items-center">
                <div class="avatar avatar-lg mb-3">
                  <img
                    class="avatar-img"
                    :src="friendDetail.avatar"
                    :alt="friendDetail.user_name"
                  />
                </div>

                <div class="d-flex flex-column align-items-center">
                  <h5 class="mb-1">{{ friendDetail.user_name }}</h5>
                  <div class="d-flex mt-2">
                    <div class="btn btn-primary btn-icon rounded-circle text-light mx-2">
                      <ChatIcon class="injectable hw-24"></ChatIcon>
                    </div>
                    <div class="btn btn-success btn-icon rounded-circle text-light mx-2">
                      <Phone class="injectable hw-24"></Phone>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-options">
                <DropdownWithSlot
                  title="Details"
                  displayType="kebab"
                  size="null"
                  xplacement="bottom-end"
                  emptyLabel="Details"
                  defaultvalue="null"
                  :setActive="false"
                  dpclass="dropdown-menu-right"
                  dpstyle="position: absolute; transform: translate3d(-134px, 48px, 0px); top: 0px; left: 0px; will-change: transform;"
                >
                  <template v-slot:menus>
                    <a class="dropdown-item" href="javascript:void(0)" @click="removeUser()"
                      >Remove</a
                    >
                    <a class="dropdown-item" href="javascript:void(0)" @click="blockUser()"
                      >Block</a
                    >
                  </template>
                </DropdownWithSlot>
              </div>

              <div class="chat-closer d-xl-none">
                <MobileNavigationArrow></MobileNavigationArrow>
              </div>
            </div>
          </div>
        </div>

        <div class="row friends-info">
          <div class="col">
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Local Time</p>
                      <p class="mb-0">{{ friendDetail.local_time }}</p>
                    </div>
                    <Clock class="injectable text-muted hw-20"></Clock>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Birthdate</p>
                      <p class="mb-0">{{ friendDetail.birth_date }}</p>
                    </div>
                    <Calender class="injectable text-muted hw-20"></Calender>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Phone</p>
                      <p class="mb-0">{{ friendDetail.phone }}</p>
                    </div>
                    <Phone class="injectable text-muted hw-20"></Phone>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Email</p>
                      <p class="mb-0">{{ friendDetail.email }}</p>
                    </div>
                    <Email class="injectable text-muted hw-20"></Email>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Website</p>
                      <p class="mb-0">{{ friendDetail.website }}</p>
                    </div>
                    <Globe class="injectable text-muted hw-20"></Globe>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Address</p>
                      <p class="mb-0">{{ friendDetail.address }}</p>
                    </div>
                    <Home class="injectable text-muted hw-20"></Home>
                  </div>
                </li>
              </ul>
            </div>

            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Facebook</p>
                      <a
                        class="font-size-sm font-weight-medium"
                        target="_blank"
                        :href="friendDetail.facebook_url"
                        >{{ friendDetail.facebook_url }}</a
                      >
                    </div>
                    <Facebook class="injectable text-muted hw-20"></Facebook>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Twitter</p>
                      <a
                        class="font-size-sm font-weight-medium"
                        target="_blank"
                        :href="friendDetail.twitter_url"
                        >{{ friendDetail.twitter_url }}</a
                      >
                    </div>
                    <Twitter class="injectable text-muted hw-20"></Twitter>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Instagram</p>
                      <a
                        class="font-size-sm font-weight-medium"
                        target="_blank"
                        :href="friendDetail.instagram_url"
                        >{{ friendDetail.instagram_url }}</a
                      >
                    </div>
                    <Instagram class="injectable text-muted hw-20"></Instagram>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <p class="small text-muted mb-0">Linkedin</p>
                      <a
                        class="font-size-sm font-weight-medium"
                        target="_blank"
                        :href="friendDetail.linkedin_url"
                        >{{ friendDetail.linkedin_url }}</a
                      >
                    </div>
                    <LinkedIn class="injectable text-muted hw-20"></LinkedIn>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch, reactive, computed } from 'vue';
import { useStore } from '../../store';
import timeAgo from '../../Config/timeAgo';
import timeDiff from '../../Config/timeDiff';
import ArrowLeft from '../../assets/media/heroicons/outline/arrow-left.svg';
import ChatIcon from '../../assets/media/heroicons/outline/chat.svg';
import Phone from '../../assets/media/heroicons/outline/phone.svg';
import Clock from '../../assets/media/heroicons/outline/clock.svg';
import Calender from '../../assets/media/heroicons/outline/calendar.svg';
import DropdownWithSlot from '../Base/DropdownWithSlot.vue';
import Email from '../../assets/media/heroicons/outline/mail.svg';
import Globe from '../../assets/media/heroicons/outline/globe.svg';
import Home from '../../assets/media/heroicons/outline/home.svg';
import Facebook from '../../assets/media/icons/facebook.svg';
import Twitter from '../../assets/media/icons/twitter.svg';
import Instagram from '../../assets/media/icons/instagram.svg';
import LinkedIn from '../../assets/media/icons/linkedin.svg';
import MobileNavigationArrow from './MobileNavigationArrow.vue';
import { userdata } from '../../Config/Config';
export default defineComponent({
  name: 'Friend',
  props: {},
  components: {
    DropdownWithSlot,
    ArrowLeft,
    ChatIcon,
    Phone,
    Clock,
    Calender,
    Email,
    Globe,
    Home,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    MobileNavigationArrow
  },
  setup: () => {
    const store = useStore();
    const currentMainVisible = computed(() => store.getters.currentMainVisible);

    const friendDetail = computed(() => <userdata>store.getters.currentFriend);

    function removeUser () {
      console.log('Clear call logs functionality will goes here');
    }

    function blockUser () {
      console.log('Block user functionality will goes here');
    }
    return { friendDetail, removeUser, blockUser, timeAgo, timeDiff, currentMainVisible };
  },
  methods: {}
});
</script>
