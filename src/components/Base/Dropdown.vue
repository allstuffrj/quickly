<template>
  <div class="dropdown mr-2" :class="[{ show: checkIsOpen }, size]">
    <!-- Dropdown Button Start -->

    <button
      v-if="displayType == 'button'"
      v-click-outside="onClickOutside"
      class="btn btn-outline-default dropdown-toggle"
      @click="handleToggle"
      type="button"
      data-chat-filter-list=""
      data-toggle="dropdown"
      aria-haspopup="true"
      :aria-expanded="checkIsOpen"
    >
      {{ emptyLabel }}
    </button>

    <a
      v-if="displayType == 'kebab'"
      v-click-outside="onClickOutside"
      @click="handleToggle"
      class="nav-link text-muted px-1"
      href="javascript:void(0)"
      role="button"
      :title="title"
      data-toggle="dropdown"
      aria-haspopup="true"
      :aria-expanded="checkIsOpen"
    >
      <!-- Default :: Inline SVG -->
      <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </a>
    <!-- Dropdown Button End -->

    <!-- Dropdown Menu Start -->

    <div
      class="dropdown-menu"
      :x-placement="xplacement"
      :class="[{ show: checkIsOpen }, dpclass]"
      :style="[checkIsOpen ? 'display:block;overflow:hidden;' : '', dpstyle]"
    >
      <a
        class="dropdown-item"
        :class="[{ active: selectedOption == option.value }]"
        v-for="(option, i) in options"
        data-chat-filter=""
        v-on:click="handleSelection(i)"
        :data-select="option.value"
        href="javascript:void(0)"
      >
        {{ option.label }}</a
      >
    </div>
    <!-- Dropdown Menu End -->
  </div>
</template>

<script lang="ts">
type OptionSchema = {
  value: string;
  label: string;
};
import { ref, defineComponent, computed, PropType } from 'vue';
// @ts-ignore
import vClickOutside from 'click-outside-vue3';
const enum DisplayTypes {
  button = 'button',
  kebab = 'kebab'
}
export default defineComponent({
  name: 'Dropdown',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    emptyLabel: {
      type: String,
      default: 'Select'
    },
    options: {
      type: Array as PropType<OptionSchema[]>,
      required: true
    },
    size: {
      type: String,
      default: null
    },
    xplacement: {
      type: String,
      default: 'bottom-start'
    },
    defaultvalue: {
      type: String,
      default: null
    },
    displayType: {
      type: String,
      default: DisplayTypes.button
    },
    title: {
      type: String,
      default: null
    },
    dpclass: {
      type: String,
      default: null
    },
    dpstyle: {
      type: String,
      default: null
    },
    setActive: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {},
  setup: (props, context) => {
    const selectedOption = ref<string>('');
    const emptyLabel = ref<string>('Select');

    if (props.defaultvalue != '') {
      selectedOption.value = props.defaultvalue;
    }
    if (props.emptyLabel != '') {
      emptyLabel.value = props.emptyLabel;
    }
    const isOpen = ref(false);
    function handleToggle () {
      isOpen.value = !isOpen.value;
    }

    const checkIsOpen = computed(() => {
      return <boolean>isOpen.value;
    });

    function handleSelection (selectedVal: number): void {
      let selectOp = props.options[selectedVal];
      if (props.setActive) {
        selectedOption.value = selectOp.value;
      }

      emptyLabel.value = selectOp.label;
      context.emit('change', selectOp);
      isOpen.value = false;
    }

    function onClickOutside (event: any) {
      if (!event.target.classList.contains('dropdown-item')) {
        if (isOpen.value == true) isOpen.value = false;
      }
    }

    return {
      handleToggle,
      checkIsOpen,
      handleSelection,
      selectedOption,
      emptyLabel,
      onClickOutside
    };
  },
  methods: {}
});
</script>
