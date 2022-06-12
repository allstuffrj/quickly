<template>
  <ChatList></ChatList>
  <ChatHistory></ChatHistory>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onMounted } from 'vue';
import ChatList from '../sidebar/ChatList.vue';
import ChatHistory from '../Partials/ChatHistory.vue';
import { useStore, MutationTypes, ActionTypes } from '../../store';
export default defineComponent({
  name: 'Chat',
  props: {},
  components: {
    ChatList,
    ChatHistory
  },
  setup: () => {
    const store = useStore();
    onMounted(() => {
      document.body.classList.add('chats-tab-open');
    });
    onUnmounted(() => {
      store.dispatch(ActionTypes.LOAD_SEARCHTEXT, '');
      store.commit(MutationTypes.LOAD_CONVERSATION, {});
      document.body.classList.remove('chats-tab-open');
    });
  }
});
</script>
