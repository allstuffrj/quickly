<template>

    <li class="list-group-item">

        <div class="media">
            <div class="avatar  mr-2" :class="['avatar-'+friend.status]">
                <img :src=friend.avatar alt="avatar1">
            </div>

            <div class="media-body">
                <h6 class="text-truncate">
                    <a class="text-reset">
                        {{friend.user_name}}
                    </a>
                </h6>
                <p class="text-muted mb-0 text-capitalize">{{friend.status}}</p>
            </div>
        </div>
    </li>

</template>

<script lang="ts">
    import { ref, defineComponent} from 'vue'

    export default defineComponent({
        name: 'FriendRow',
        props: {
            friend : {
                type: Object,
                default: null
            }
        },

        components : {

        },

        setup: (props,context) => {

            return {}
        },
        methods: {

        }
    })
</script>
