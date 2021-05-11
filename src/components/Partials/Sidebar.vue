<template>
  <AccountSvg />
    <!--<div class="navigation navbar navbar-light bg-primary">
      <Link class="d-none d-xl-block bg-light rounded p-1" to="/">
        <AppIconSvg />
      </Link>

      <ul
        class="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center"
        id="mainNavTab"
        role="tablist"
      >
        <li class="nav-item">
          <Link
            class={
              "nav-link p-0 py-xl-3 " +
              (props.activeMenu === "chat" ? "active" : "")
            }
            id="chats-tab"
            to="/Chats"
            title="Chats"
          >
            <ChatsSvg />
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class={
              "nav-link p-0 py-xl-3 " +
              (props.activeMenu === "calls" ? "active" : "")
            }
            id="calls-tab"
            to="/Calls"
            title="Calls"
          >
            <CallsSvg />
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class={
              "nav-link p-0 py-xl-3 " +
              (props.activeMenu === "friends" ? "active" : "")
            }
            id="friends-tab"
            to="/Friends"
            title="Friends"
          >
            <FriendsSvg />
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class={
              "nav-link p-0 py-xl-3 " +
              (props.activeMenu === "account" ? "active" : "")
            }
            id="profile-tab"
            to="/Account"
            title="Account"
          >
            <AccountSvg />
          </Link>
        </li>
      </ul>
    </div> -->
</template>

<script lang="ts">
import  AccountSvg from '../../assets/media/icons/accounts.svg';
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'SideBar',
  props: {
    
  },
  setup: () => {
      
    return {AccountSvg}
  }
})
</script>
