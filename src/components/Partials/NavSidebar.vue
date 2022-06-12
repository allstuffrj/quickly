<template>
  <div class="navigation navbar navbar-light bg-primary">
    <router-link to="/" class="d-none d-xl-block bg-light rounded p-1">
      <AppIconSvg />
    </router-link>
    <ul
      class="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center"
      id="mainNavTab"
      role="tablist"
    >
      <li class="nav-item">
        <router-link to="/Chats" id="chats-tab" title="Chats" class="nav-link p-0 py-xl-3">
          <ChatsSvg />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Calls" id="calls-tab" title="Calls" class="nav-link p-0 py-xl-3">
          <CallsSvg />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Friends" id="friends-tab" title="Friends" class="nav-link p-0 py-xl-3">
          <FriendsSvg />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Account" id="profile-tab" title="Account" class="nav-link p-0 py-xl-3">
          <AccountsSvg />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import AccountsSvg from '../../assets/media/icons/accounts.svg';
import AppIconSvg from '../../assets/media/icons/appicon.svg';
import ChatsSvg from '../../assets/media/icons/chats.svg';
import CallsSvg from '../../assets/media/icons/calls.svg';
import FriendsSvg from '../../assets/media/icons/friends.svg';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'NavSidebar',
  props: {},
  components: {
    AccountsSvg,
    AppIconSvg,
    ChatsSvg,
    CallsSvg,
    FriendsSvg
  },
  setup: () => {
    return {};
  }
});
</script>
