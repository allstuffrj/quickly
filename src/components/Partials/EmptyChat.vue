<template>
    <main class="main">
        <div class="chats">
            <div class="d-flex flex-column justify-content-center text-center h-100 w-100">
                <div class="container">
                    <div class="avatar avatar-lg mb-2">
                        <img class="avatar-img" :src=avatar  alt="">
                    </div>
                    <h5>Welcome, Christina!</h5>
                    <p class="text-muted">
                        Please select a chat to start messaging.
                    </p>
                    <button
                            class="btn btn-primary no-box-shadow"
                            type="button"
                            data-toggle="modal"
                            data-target="#startConversation" >
                        Start a conversation
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">

    import { ref, defineComponent,onMounted,watch,reactive } from 'vue'

    export default defineComponent({
        name: 'EmptyChat',
        props: {

        },
        components : {

        },
        setup: () => {
            var avatar = 'uploads/avatar/4.png';
            return {
                avatar
                }
        },
        methods : {

        }
    })
</script>
