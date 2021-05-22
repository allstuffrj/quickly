<template>
    <!-- List Group Item Start -->

    <li class="list-group-item">
        <div class="media">
            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                    <AddContactSvg v-if="notification.type== 'request_arrived'"></AddContactSvg>
                    <CheckCircleSvg v-if="notification.type== 'request_accepted'"></CheckCircleSvg>
                    <PhotoGraphSvg v-if="notification.type== 'update_profile_image'"></PhotoGraphSvg>
                    <RejectCircleSvg v-if="notification.type== 'request_rejected'"></RejectCircleSvg>
            </div>

            <div class="media-body">
                <h6>
                    <a href="#">{{notification.user_name}}</a>
                    <span v-if="notification.type== 'request_arrived'"> send you a friend request</span>
                    <span v-if="notification.type== 'request_accepted'"> accepted your friend
                        request</span>
                    <span v-if="notification.type== 'update_profile_image'"> updated profile picture</span>
                    <span v-if="notification.type== 'request_rejected'"> rejected your friend request</span>
                </h6>

                <p class="text-muted mb-0">{{notification.datetime}}</p>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-2" v-if="notification.type== 'request_arrived'">
            <button type="button" class="btn btn-outline-danger mx-1" @click="rejectRequest(notification)">Reject
            </button>
            <button type="button" class="btn btn-primary mx-1" @click="acceptRequest(notification)">Accept</button>
        </div>

    </li>
    <!-- List Group Item End -->


</template>

<script lang="ts">
    import { ref, defineComponent} from 'vue'
    import AddContactSvg from '../../assets/media/icons/addcontact.svg';
    import CheckCircleSvg from '../../assets/media/heroicons/outline/check-circle.svg';
    import PhotoGraphSvg from '../../assets/media/heroicons/outline/photograph.svg';
    import RejectCircleSvg from '../../assets/media/heroicons/outline/x-circle.svg';
    export default defineComponent({
        name: 'NotificationRow',
        props: {
            notification : {
                type: Object,
                default: null
            }
        },

        components : {
            AddContactSvg,
            CheckCircleSvg,
            PhotoGraphSvg,
            RejectCircleSvg
        },

        setup: (props,context) => {
            function acceptRequest(notification : Object): void
            {
                console.log("acceptRequest ")
            }

            function rejectRequest(notification : Object): void
            {
                console.log("rejectRequest ")
            }
            return {rejectRequest,acceptRequest}
        },
        methods: {

        }
    })
</script>
