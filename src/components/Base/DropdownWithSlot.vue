<template>
    <div  class="dropdown" :class="[{'show': checkIsOpen}, size] ">


        <a v-if="displayType == 'kebab'" v-click-outside="onClickOutside" @click="handleToggle"  class="nav-link text-muted px-1" href="#"
           role="button" :title=title
           data-toggle="dropdown" aria-haspopup="true" aria-expanded=checkIsOpen>
            <!-- Default :: Inline SVG -->
            <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
            </svg>

        </a>
        <button v-if="displayType == 'circle'" v-click-outside="onClickOutside"
                class="btn btn-secondary btn-icon btn-minimal btn-sm" @click="handleToggle"
                type="button"
                data-chat-filter-list=""
                data-toggle="dropdown" aria-haspopup="true" aria-expanded=checkIsOpen>
            <PlusCircle class="injectable hw-20"></PlusCircle>
        </button>


        <a v-if="displayType == 'kebabhorz'" v-click-outside="onClickOutside" @click="handleToggle" class="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true"
           :title=title  aria-expanded=checkIsOpen>

            <DotsHorizontalIcon class="injectable hw-18" alt="message options"></DotsHorizontalIcon>

        </a>
        <!-- Dropdown Button End -->

        <!-- Dropdown Menu Start -->

        <div  class="dropdown-menu" :x-placement=xplacement :class="[{'show': checkIsOpen},dpclass]" :style="dpstyle">

           <slot name="menus"></slot>

        </div>
        <!-- Dropdown Menu End -->


    </div>
</template>

<script lang="ts">
    import { ref, defineComponent,computed} from 'vue'
    import vClickOutside from 'click-outside-vue3'
    import DotsHorizontalIcon from '../../assets/media/heroicons/outline/dots-horizontal.svg';
    import PlusCircle from '../../assets/media/heroicons/outline/plus-circle.svg';
    const enum DisplayTypes  {
       button =  'button',
        kebab = 'kebab'
    };
    export default defineComponent({
        name: 'DropdownWithSlot',
        props: {
            open: {
                type: Boolean,
                default: false
            },
            emptyLabel: {
                type: String,
                default: 'Select'
            },
            size : {
                type: String,
                default : null
            },
            xplacement : {
                type: String,
                default : 'bottom-start'
            },
            defaultvalue : {
                type: String,
                default : null
            },
            displayType : {
                type : String,
                default : DisplayTypes.button
            },
            title : {
                type : String,
                default : null
            },
            dpclass : {
                type: String,
                default : null
            },
            dpstyle : {
                type: String,
                default:null
            },
            setActive : {
                type:Boolean,
                default:true
            }

        },
        directives: {
      clickOutside: vClickOutside.directive
        },
        components : {
            DotsHorizontalIcon,
            PlusCircle
        },
        setup: (props,context) => {

                const selectedOption = ref(null);
                const emptyLabel = ref("Select");

                if(props.defaultvalue != '')
                {
                    selectedOption.value = props.defaultvalue;
                }
                if(props.emptyLabel != '')
                {
                    emptyLabel.value = props.emptyLabel;
                }
                const isOpen = ref(false);
                  function handleToggle() {

                        isOpen.value = !isOpen.value;
                        if(isOpen.value == true)
                        {
                           // window.addEventListener('click', onClickOutside);
                        }
                }

                const checkIsOpen = computed(() => {
                    return isOpen.value;
                });

                  function handleSelection(selectedVal : number) :void
                  {
                      let selectOp = this.options[selectedVal];
                        if(props.setActive)
                        {
                            selectedOption.value = selectOp.value;
                        }

                      emptyLabel.value = selectOp.label;
                      isOpen.value = false;
                      this.$emit('change',selectOp);
                  }

                  function onClickOutside (event) {

                        if(isOpen.value == true)
                                isOpen.value = false;
                   }

                return {handleToggle,checkIsOpen,handleSelection,selectedOption,emptyLabel,onClickOutside}
        },
        methods: {

        }
    })
</script>
