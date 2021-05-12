<template>
    <div class="dropdown " :class=size>
        <!-- Dropdown Button Start -->
        <button class="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            All Chats
        </button>
        <!-- Dropdown Button End -->

        <!-- Dropdown Menu Start -->
        <div class="dropdown-menu">
            <a class="dropdown-item" data-chat-filter="" data-select="all-chats" href="#">All Chats</a>
            <a class="dropdown-item" data-chat-filter="" data-select="friends" href="#">Friends</a>
            <a class="dropdown-item" data-chat-filter="" data-select="groups" href="#">Groups</a>
            <a class="dropdown-item" data-chat-filter="" data-select="unread" href="#">Unread</a>
            <a class="dropdown-item" data-chat-filter="" data-select="archived" href="#">Archived</a>
        </div>
        <!-- Dropdown Menu End -->
    </div>
</template>

<script lang="ts">
    import { ref, defineComponent,computed} from 'vue'

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
                type: Array,
                required: true
            },
            size : {
                type: String,
                default : 'mr-2'
            }
        },
        components : {

        },
        setup: (context, props) => {
                const selectedOption = ref(null);
                console.log(props);
                return {props}
        }
    })
</script>
