<template>
  <!-- Chat Header Start-->
  <div class="chat-header">
    <MobileNavigationArrow></MobileNavigationArrow>
    <!-- Chat participant's Name -->
    <div class="media chat-name align-items-center text-truncate">
      <div
        class="avatar  d-none d-sm-inline-block mr-3"
        :class="'avatar-' + currentConversation.status"
      >
        <img :src="currentConversation.avatar" alt="" />
      </div>

      <div class="media-body align-self-center ">
        <h6 class="text-truncate mb-0">{{ currentConversation.name }}</h6>
        <small class="text-muted text-capitalize">{{ currentConversation.status }}</small>
      </div>
    </div>

    <!-- Chat Options -->
    <ul class="nav flex-nowrap">
      <li class="nav-item list-inline-item d-none d-sm-block mr-1">
        <a
          class="nav-link text-muted px-1"
          data-toggle="collapse"
          @click="toggleSearch"
          data-target="#searchCollapse"
          href="#"
          aria-expanded="false"
        >
          <SearchIcon class="injectable hw-20"></SearchIcon>
        </a>
      </li>

      <li class="nav-item list-inline-item d-none d-sm-block mr-1">
        <a
          class="nav-link text-muted px-1"
          href="javascript:void(0)"
          @click="callFriend"
          title="Call People"
        >
          <Phone class="injectable hw-20"></Phone>
        </a>
      </li>
      <li class="nav-item list-inline-item d-none d-sm-block mr-0">
        <DropdownWithSlot
          title="Details"
          displayType="kebab"
          size="null"
          xplacement="bottom-end"
          emptyLabel="Details"
          defaultvalue="null"
          :setActive="false"
          dpclass="dropdown-menu-right"
          :dpstyle="dropdownCss"
        >
          <template v-slot:menus>
            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              data-chat-info-toggle=""
              @click="toggleChatInfo"
            >
              <InformationCircle class="injectable hw-20 mr-2"></InformationCircle>
              <span>View Info</span>
            </a>

            <a
              class="dropdown-item align-items-center d-flex"
              @click="muteConversation"
              href="javascript:void(0)"
            >
              <VolumeOff class="injectable hw-20 mr-2"></VolumeOff>
              <span>Mute Notifications</span>
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              @click="wallpaperSet"
              href="javascript:void(0)"
            >
              <PhotoGraph class="injectable hw-20 mr-2"></PhotoGraph>
              <span>Wallpaper</span>
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              @click="archiveConversation"
              href="javascript:void(0)"
            >
              <Archive class="injectable hw-20 mr-2"></Archive>
              <span>Archive</span>
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              @click="deleteConversation"
              href="javascript:void(0)"
            >
              <Trash class="injectable hw-20 mr-2"></Trash>
              <span>Delete</span>
            </a>
            <a
              class="dropdown-item align-items-center d-flex text-danger"
              href="javascript:void(0)"
              @click="blockConversation"
            >
              <Ban class="injectable hw-20 mr-2"></Ban>
              <span>Block</span>
            </a>
          </template>
        </DropdownWithSlot>
      </li>
      <li class="nav-item list-inline-item d-sm-none mr-0">
        <DropdownWithSlot
          title="Details"
          displayType="kebab"
          size="null"
          xplacement="bottom-end"
          emptyLabel="Details"
          defaultvalue="null"
          :setActive="false"
          dpclass="dropdown-menu-right"
          :dpstyle="dropdownCss"
        >
          <template v-slot:menus>
            <a class="dropdown-item align-items-center d-flex" href="javascript:void(0)">
              <Phone class="injectable hw-20 mr-2"></Phone>
              Call
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              data-toggle="collapse"
              @click="toggleSearch"
              data-target="#searchCollapse"
              aria-expanded="false"
            >
              <SearchIcon class="injectable hw-20 mr-2"></SearchIcon>
              Search
            </a>

            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              data-chat-info-toggle=""
              @click="toggleChatInfo"
            >
              <InformationCircle class="injectable hw-20 mr-2"></InformationCircle>
              View Info
            </a>

            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              @click="muteConversation"
            >
              <VolumeOff class="injectable hw-20 mr-2"></VolumeOff>
              Mute Notifications
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              @click="wallpaperSet"
            >
              <PhotoGraph class="injectable hw-20 mr-2"></PhotoGraph>
              Wallpaper
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              @click="archiveConversation"
            >
              <Archive class="injectable hw-20 mr-2"></Archive>
              Archive
            </a>
            <a
              class="dropdown-item align-items-center d-flex"
              href="javascript:void(0)"
              @click="deleteConversation"
            >
              <Trash class="injectable hw-20 mr-2"></Trash>
              Delete
            </a>
            <a
              class="dropdown-item align-items-center d-flex text-danger"
              href="javascript:void(0)"
              @click="blockConversation"
            >
              <Ban class="injectable hw-20 mr-2"></Ban>
              Block
            </a>
          </template>
        </DropdownWithSlot>
      </li>
    </ul>
  </div>
  <!-- Chat Header End-->
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
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
import DropdownWithSlot from '../../Base/DropdownWithSlot.vue';
import { useStore, MutationTypes } from '../../../store';
import MobileNavigationArrow from '../MobileNavigationArrow.vue';
import { converDetail, isRTL } from '../../../Config/Config';
export default defineComponent({
  name: 'ChatHeader',
  props: {},
  components: {
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
    DropdownWithSlot,
    MobileNavigationArrow
  },
  setup: () => {
    const store = useStore();
    const count = ref(store.state);

    const dropdownCss = ref(
      'position: absolute; transform: translate3d(-172px, 40px, 0px); top: 0px; left: 0px; will-change: transform;'
    );
    const isRTLCn = ref(localStorage.getItem('rtl') ? localStorage.getItem('rtl') : isRTL);

    if (isRTLCn.value) {
      dropdownCss.value =
        'position: absolute; transform: translate3d(7px, 40px, 0px); top: 0px; left: 0px; will-change: transform;';
    }
    
    function toggleSearch () {
      store.commit(MutationTypes.SHOW_CHATSEARCH, !store.getters.currentShowChatSearch);
    }
    function toggleChatInfo () {
      store.commit(MutationTypes.SHOW_CHATINFO, !store.getters.currentShowChatInfo);
    }
    const currentConversation = computed(() => <converDetail>store.getters.currentConversation);

    function callFriend () {
      //Call friend functionality will goes here
      console.log('Call friend functionality will goes here');
    }

    function muteConversation () {
      //Mute conversation script will goes here
      console.log('Mute conversation script will goes here');
    }

    function wallpaperSet () {
      //Wallpaper script will goes here
      console.log('Wallpaper script will goes here');
    }

    function archiveConversation () {
      //Wallpaper script will goes here
      console.log('Archive conversation script will goes here');
    }

    function deleteConversation () {
      //Wallpaper script will goes here
      console.log('Delete conversation script will goes here');
    }

    function blockConversation () {
      //Wallpaper script will goes here
      console.log('Block conversation script will goes here');
    }
    return {
      currentConversation,
      toggleSearch,
      callFriend,
      toggleChatInfo,
      muteConversation,
      wallpaperSet,
      archiveConversation,
      deleteConversation,
      blockConversation,
      dropdownCss
    };
  },
  methods: {}
});
</script>
