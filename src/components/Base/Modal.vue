<template>
    <transition name="modal-fade">
        <div class="fade modal-backdrop " :class="showModalToggle ? 'show' : 'hide'"></div>
    </transition>

    <transition name="modal-fade">
    <div class="modal modal-lg-fullscreen rj-modal-con fade" :class="[{'d-block show' : showModalToggle}]" tabindex="-1"
         role="dialog"
          aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="modalHeader"></slot>
                </div>
                <div class="modal-body p-0 hide-scrollbar">
                    <slot name="modalBody"></slot>
                </div>
                <div class="modal-footer justify-content-center">
                    <slot name="modalFooter"></slot>

                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script lang="ts">
    import { ref, defineComponent,computed,watch} from 'vue'

    export default defineComponent({
        name: 'Modal',
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
            modalTitle :{
                type : String,
                default: 'Modal Title'
            }
        },
        emits : ['modalClose'],
        components : {

        },
        setup: (props,context) => {
                const showModalToggle = ref(Boolean)
                        showModalToggle.value = props.showModal;
            watch(() => props.showModal, (first) => {
                showModalToggle.value = props.showModal;

            });

            function closeModal()
                {
                    showModalToggle.value = false;
                    context.emit('modalClose',true);
                }
                return {closeModal,showModalToggle}
        },
        methods: {

        }
    })
</script>
