<template>
    <main class="main main-visible">
        <div class="profile">
        <div class="page-main-heading sticky-top py-2 px-3 mb-3">

            <!-- Chat Back Button (Visible only in Small Devices) -->
            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close="">
                <ArrowLeft class="injectable hw-20"></ArrowLeft>

            </button>

            <div class="pl-2 pl-xl-0">
                <h5 class="font-weight-semibold">Settings</h5>
                <p class="text-muted mb-0">Update Personal Information &amp; Settings</p>
            </div>
        </div>

        <div class="container-xl px-2 px-sm-3">
            <div class="row">
                <div class="col">
                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-1">Account</h6>
                            <p class="mb-0 text-muted small">Update personal &amp; contact information</p>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-12">


                                        <my-input
                                                name="first_name"
                                                label="First Name"
                                                :rules="{ required: true, min: 2 }"
                                                :value="accountpersonal.first_name"
                                                @update="update"
                                                type="text"
                                                inpclass="form-control form-control-md"
                                                placeholder="Type your first name"
                                        />

                                </div>
                                <div class="col-md-6 col-12">
                                    <my-input
                                            name="last_name"
                                            label="Last Name"
                                            :rules="{ required: true, min: 2 }"
                                            :value="accountpersonal.last_name"
                                            @update="update"
                                            type="text"
                                            inpclass="form-control form-control-md"
                                            placeholder="Type your last name"
                                    />
                                </div>
                                <div class="col-md-6 col-12">

                                    <my-input
                                            name="phone"
                                            label="Mobile number"
                                            :rules="{ required: true, min: 2 }"
                                            :value="accountpersonal.phone"
                                            @update="update"
                                            type="text"
                                            inpclass="form-control form-control-md"
                                            placeholder="Type your mobile number"
                                    />
                                </div>
                                <div class="col-md-6 col-12">

                                    <my-input
                                            name="birth_date"
                                            label="Birth date"
                                            :rules="{ required: true }"
                                            :value="accountpersonal.birth_date"
                                            @update="update"
                                            type="date"
                                            inpclass="form-control form-control-md"
                                            placeholder="dd/mm/yyyy"
                                    />
                                </div>
                                <div class="col-md-6 col-12">

                                    <my-input
                                            name="email"
                                            label="Email"
                                            :rules="{ required: true }"
                                            :value="accountpersonal.email"
                                            @update="update"
                                            type="email"
                                            inpclass="form-control form-control-md"
                                            placeholder="Type your email address"
                                    />
                                </div>
                                <div class="col-md-6 col-12">

                                    <my-input
                                            name="website"
                                            label="Website"
                                            :rules="{ required: true }"
                                            :value="accountpersonal.website"
                                            @update="update"
                                            type="text"
                                            inpclass="form-control form-control-md"
                                            placeholder="Type your website"
                                    />
                                </div>
                                <div class="col-12">

                                    <my-input
                                            name="address"
                                            label="Address"
                                            :rules="{ required: true }"
                                            :value="accountpersonal.address"
                                            @update="update"
                                            type="text"
                                            inpclass="form-control form-control-md"
                                            placeholder="Type your address"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                            <button type="button" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-1">Social network profiles</h6>
                            <p class="mb-0 text-muted small">Update personal &amp; contact information</p>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="facebookId">Facebook</label>
                                        <input type="text" class="form-control form-control-md" id="facebookId" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="twitterId">Twitter</label>
                                        <input type="text" class="form-control form-control-md" id="twitterId" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="instagramId">Instagram</label>
                                        <input type="text" class="form-control form-control-md" id="instagramId" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="linkedinId">Linkedin</label>
                                        <input type="text" class="form-control form-control-md" id="linkedinId" placeholder="Username">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                            <button type="button" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-1">Password</h6>
                            <p class="mb-0 text-muted small">Update personal &amp; contact information</p>
                        </div>

                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="current-password">Current Password</label>
                                            <input type="password" class="form-control form-control-md" id="current-password" placeholder="Current password" autocomplete="on">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="new-password">New Password</label>
                                            <input type="password" class="form-control form-control-md" id="new-password" placeholder="New password" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="repeat-password">Repeat Password</label>
                                            <input type="password" class="form-control form-control-md" id="repeat-password" placeholder="Repeat password" autocomplete="off">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="card-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                            <button type="button" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-1">Privacy</h6>
                            <p class="mb-0 text-muted small">Update personal &amp; contact information</p>
                        </div>

                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush list-group-sm-column">

                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Profile Picture</p>
                                            <p class="small text-muted mb-0">Select who can see my profile picture</p>
                                        </div>
                                        <div class="dropdown mr-2">
                                            <button class="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Public
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Public</a>
                                                <a class="dropdown-item" href="#">Friends</a>
                                                <a class="dropdown-item" href="#">Selected Friends</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Last Seen</p>
                                            <p class="small text-muted mb-0">Select who can see my last seen</p>
                                        </div>
                                        <div class="dropdown mr-2">
                                            <button class="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Public
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Public</a>
                                                <a class="dropdown-item" href="#">Friends</a>
                                                <a class="dropdown-item" href="#">Selected Friends</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Groups</p>
                                            <p class="small text-muted mb-0">Select who can add you in groups</p>
                                        </div>
                                        <div class="dropdown mr-2">
                                            <button class="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Public
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Public</a>
                                                <a class="dropdown-item" href="#">Friends</a>
                                                <a class="dropdown-item" href="#">Selected Friends</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Status</p>
                                            <p class="small text-muted mb-0">Select who can see my status updates</p>
                                        </div>
                                        <div class="dropdown mr-2">
                                            <button class="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Public
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Public</a>
                                                <a class="dropdown-item" href="#">Friends</a>
                                                <a class="dropdown-item" href="#">Selected Friends</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Read receipts</p>
                                            <p class="small text-muted mb-0">If turn off this option you won't be able to see read recipts</p>
                                        </div>
                                        <div class="custom-control custom-switch mr-2">
                                            <input type="checkbox" class="custom-control-input" id="readReceiptsSwitch" checked="">
                                            <label class="custom-control-label" for="readReceiptsSwitch">&nbsp;</label>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div class="card-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                            <button type="button" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-header">
                            <h6 class="mb-1">Security</h6>
                            <p class="mb-0 text-muted small">Update personal &amp; contact information</p>
                        </div>

                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush list-group-sm-column">
                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Use two-factor authentication</p>
                                            <p class="small text-muted mb-0">Ask for a code if attempted login from an unrecognised device or browser.</p>
                                        </div>
                                        <div class="custom-control custom-switch mr-2">
                                            <input type="checkbox" class="custom-control-input" id="twoFactorSwitch" checked="">
                                            <label class="custom-control-label" for="twoFactorSwitch">&nbsp;</label>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item py-2">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <p class="mb-0">Get alerts about unrecognised logins</p>
                                            <p class="small text-muted mb-0">You will be notified if anyone logs in from a device or browser you don't usually use</p>
                                        </div>
                                        <div class="custom-control custom-switch mr-2">
                                            <input type="checkbox" class="custom-control-input" id="unrecognisedSwitch" checked="">
                                            <label class="custom-control-label" for="unrecognisedSwitch">&nbsp;</label>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div class="card-footer d-flex justify-content-end">
                            <button class="btn btn-link text-muted mx-1">Reset</button>
                            <button class="btn btn-primary" type="button">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>

<script lang="ts">

    import { ref, defineComponent,computed,reactive } from 'vue'
    import ArrowLeft from '../../assets/media/heroicons/outline/arrow-left.svg';
    import { useStore, MutationTypes, ActionTypes } from "../../store";
    import MyInput from "../Base/MyInput.vue";
    export default defineComponent({
        name: 'ProfileUpdate',
        props: {

        },
        components : {
            MyInput
        },
        setup: () => {
            const store = useStore();
            const count = ref(store.state);
            const accountpersonal = reactive({
                first_name : '',
                last_name : '',
                phone : '',
                birth_date : '',
                email : '',
                website : '',
                address : '',
            });

            const currentUser = computed(() => store.getters.currentUser);
            function update(payload: Object) :void {
                accountpersonal[payload.name] = payload.value
            }

            return {
                currentUser,
                accountpersonal,
                update
                }
        },
        methods : {

        }
    })
</script>
