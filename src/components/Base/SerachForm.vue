<template>
  <form class="form-inline" :class="[extraClass]" onsubmit="return false">
    <div class="input-group" :class="[extraClass]">
      <input
        type="text"
        class="form-control search border-right-0 transparent-bg pr-0"
        placeholder="Search users..."
        :value="modelValue"
        @input="updateValue"
      />
      <div class="input-group-append">
        <div class="input-group-text transparent-bg border-left-0" role="button">
          <SearchSvg class="text-muted hw-20" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SearchSvg from '../../assets/media/icons/search.svg';
export default defineComponent({
  name: 'SearchForm',
  props: {
    modelValue: {
      type: String,
      default: null
    },
    extraClass: {
      type: String,
      default: null
    }
  },

  components: {
    SearchSvg
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const updateValue = (e: Event) => {
      emit('update:modelValue', (e.target as HTMLInputElement).value);
    };

    return {
      updateValue
    };
  },
  methods: {}
});
</script>
