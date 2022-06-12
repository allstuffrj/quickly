<template>
  <main class="main " :class="[{ 'main-visible': currentMainVisible }]">
    <!-- Chats Page Start -->
    <div class="chats">
      <div class="chat-body">
        <ChatHeader></ChatHeader>
        <ChatSearch></ChatSearch>
        <ChatContent></ChatContent>
        <ChatFooter></ChatFooter>
      </div>

      <ChatInfo></ChatInfo>
    </div>
    <!-- Chats Page End -->
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ChatHeader from './ChatScreen/ChatHeader.vue';
import ChatContent from './ChatScreen/ChatContent.vue';
import ChatSearch from './ChatScreen/ChatSearch.vue';
import ChatFooter from './ChatScreen/ChatFooter.vue';
import ChatInfo from './ChatScreen/ChatInfo.vue';
import { useStore } from '../../store';
export default defineComponent({
  name: 'Conversation',
  props: {
    conversation: {
      type: Object,
      default: {}
    }
  },
  components: {
    ChatHeader,
    ChatContent,
    ChatSearch,
    ChatFooter,
    ChatInfo
  },
  setup: () => {
    const store = useStore();
    const currentMainVisible = computed(() => store.getters.currentMainVisible);
    return { currentMainVisible };
  },
  methods: {}
});
</script>
