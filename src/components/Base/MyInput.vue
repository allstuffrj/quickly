<template>
    <div class="form-group">
        <div class="label">
            <label :for="name" :class=labelcalss>{{ label }}</label>

        </div>
        <input
                :id="name"
                :type="type"
                :value="value"
                @input="input"
                :class="inpclass"
                :placeholder="placeholder"
        />
        <label class="form-error">{{ error }}</label>
    </div>
</template>

<script lang="ts">
    import {ref, defineComponent, onUnmounted, onMounted, computed} from 'vue'


    export default defineComponent({
        name: 'MyInput',
        props: {
            name: {
                type: String,
                required: true
            },
            rules: {
                type: Object // min, required
            },
            value: {
                type: String
            },
            type: {
                type: String
            },
            inpclass: {
                type: String
            },
            label: {
                type: String
            },
            placeholder: {
                type: String
            },
            labelcalss : {
                type:String
            }
        },
        components : {

        },
        setup: (props,context) => {
            const error = computed(() => validate(props.value));

            function validate(value: string) :string {
                if(typeof props.rules != "undefined" && Object.keys(props.rules).length > 0)
                {
                    if (typeof props.rules.required != "undefined" && props.rules.required && !value) {
                        return 'Required'
                    }
                    if (typeof props.rules.min != "undefined" &&  props.rules.min && value.length <
                        props.rules.min) {
                        return `Minimum length is ${props.rules.min}`
                    }
                }
                return '';
            }

            function input($evt) : void {
                this.$emit('update', {
                    value: $evt.target.value,
                    name: props.name,
                    valid: validate($evt.target.value) ? false : true
                })
            }

            return {error,input}
        }
    })
</script>
