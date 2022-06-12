<template>
  <EmptyChat v-if="isEmpty"></EmptyChat>
  <CallDetails v-if="!isEmpty"></CallDetails>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import EmptyChat from './EmptyChat.vue';
import CallDetails from './CallDetails.vue';
import { useStore, MutationTypes, ActionTypes } from '../../store';

export default defineComponent({
  name: 'CallHistory',
  props: {},
  components: {
    EmptyChat,
    CallDetails
  },
  setup: () => {
    const store = useStore();
    const count = ref(store.state);

    const currentCall = computed(() => store.getters.currentCall);
    const isEmpty = computed(() => {
      return Object.keys(currentCall.value).length == 0;
    });
    return {
      isEmpty
    };
  },
  methods: {}
});
</script>
