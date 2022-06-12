<template>
  <button
    class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
    @click="updateMobileNav"
    type="button"
    data-close=""
  >
    <ArrowLeft class="injectable hw-20"></ArrowLeft>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { MutationTypes, useStore } from '../../store';
import ArrowLeft from '../../assets/media/heroicons/outline/arrow-left.svg';

export default defineComponent({
  name: 'MobileNavigationArrow',
  props: {},
  components: {
    ArrowLeft
  },
  setup: () => {
    const store = useStore();
    const currentMainVisible = computed(() => store.getters.currentMainVisible);
    function updateMobileNav () {
      store.commit(MutationTypes.SHOW_MAINWINDOW, !currentMainVisible);
    }
    return { updateMobileNav, currentMainVisible };
  },
  methods: {}
});
</script>
