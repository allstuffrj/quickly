<template>
  <!-- Search Start -->
  <div class="collapse border-bottom px-3" id="searchCollapse" :class="[{ show: showSearch }]">
    <div class="container-xl py-2 px-0 px-md-3">
      <div class="input-group bg-light ">
        <input
          type="text"
          v-on:input="searchText"
          class="form-control form-control-md border-right-0 transparent-bg pr-0"
          placeholder="Search"
        />
        <div class="input-group-append">
          <span class="input-group-text transparent-bg border-left-0">
            <SearchSvg class="injectable hw-20" />
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- Search End -->
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import SearchSvg from '../../../assets/media/icons/search.svg';
import { useStore, ActionTypes } from '../../../store';

export default defineComponent({
  name: 'ChatSearch',
  props: {},
  components: {
    SearchSvg
  },
  setup: () => {
    const store = useStore();
    const count = ref(store.state);

    const currentConversation = computed(() => store.getters.currentConversation);
    const showSearch = computed(() => store.getters.currentShowChatSearch);
    function searchText (event: any) {
      store.dispatch(ActionTypes.LOAD_SEARCHTEXT, event.target.value);
    }
    return {
      currentConversation,
      showSearch,
      searchText
    };
  },
  methods: {}
});
</script>
