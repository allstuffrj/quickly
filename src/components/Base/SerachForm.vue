<template>
    <form class="form-inline">
        <div class="input-group">
            <input
                    type="text"
                    class="form-control search border-right-0 transparent-bg pr-0"
                    placeholder="Search users..."
                    :value='modelValue'
                    @input='$emit("update:modelValue", $event.target.value)'
            >
            <div class="input-group-append">
                <div
                        class="input-group-text transparent-bg border-left-0"
                        role="button"
                >
                    <SearchSvg class="text-muted hw-20" />
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
    import { ref, defineComponent,computed} from 'vue'
    import SearchSvg from '../../assets/media/icons/search.svg'
    export default defineComponent({
        name: 'SearchForm',
        props: {
            modelValue : {
                type: String,
                default: null
            }

        },

        components : {
            SearchSvg
        },
        emits: ['update:modelValue'],
        setup: (props,context) => {

            const serachInput = ref(null);

            const inputChange = (value)=>{

            }

            return {}
        },
        methods: {

        }
    })
</script>
