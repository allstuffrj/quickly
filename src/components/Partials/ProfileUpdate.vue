<template>
  <main class="main " :class="[{ 'main-visible': currentMainVisible }]">
    <div class="profile">
      <div class="page-main-heading sticky-top py-2 px-3 mb-3">
        <MobileNavigationArrow></MobileNavigationArrow>

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
                <button type="button" @click="updateProfileInfo" class="btn btn-primary">
                  Save Changes
                </button>
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
                      <my-input
                        name="facebook"
                        label="Facebook"
                        :value="socialDetail.facebook"
                        @update="updateSocial"
                        type="text"
                        inpclass="form-control form-control-md"
                        placeholder="Facebook username"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <my-input
                        name="twitter"
                        label="Twitter"
                        :value="socialDetail.twitter"
                        @update="updateSocial"
                        type="text"
                        inpclass="form-control form-control-md"
                        placeholder="Twitter username"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <my-input
                        name="instagram"
                        label="Instagram"
                        :value="socialDetail.instagram"
                        @update="updateSocial"
                        type="text"
                        inpclass="form-control form-control-md"
                        placeholder="Instagram username"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <my-input
                        name="linkedin"
                        label="LinkedIn"
                        :value="socialDetail.linkedin"
                        @update="updateSocial"
                        type="text"
                        inpclass="form-control form-control-md"
                        placeholder="LinkedIn username"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer d-flex justify-content-end">
                <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                <button type="button" @click="updateSocialInfo" class="btn btn-primary">
                  Save Changes
                </button>
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
                        <my-input
                          name="current_password"
                          label="Current Password"
                          :value="changePassword.current_password"
                          @update="updatePassword"
                          type="password"
                          inpclass="form-control form-control-md"
                          placeholder="Current Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <my-input
                          name="new_password"
                          label="New Password"
                          :value="changePassword.new_password"
                          @update="updatePassword"
                          type="password"
                          inpclass="form-control form-control-md"
                          placeholder="New Password"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <my-input
                          name="confirm_password"
                          label="Repeat Password"
                          :value="changePassword.confirm_password"
                          @update="updatePassword"
                          type="password"
                          inpclass="form-control form-control-md"
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="card-footer d-flex justify-content-end">
                <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                <button type="button" @click="updatePasswordInfo" class="btn btn-primary">
                  Save Changes
                </button>
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
                      <Dropdown
                        title="Details"
                        displayType="button"
                        size="mr-2"
                        xplacement="bottom-start"
                        emptyLabel="Public"
                        :options="chatOptions"
                        @change="whoCanSeeProfileUpdate"
                        defaultvalue="public"
                        :setActive="true"
                        dpclass="dropdown-menu-right"
                        dpstyle="position: absolute; will-change: transform; top: 0px; left: -40px; transform: translate3d(-12px, 37px, 0px);"
                      ></Dropdown>
                    </div>
                  </li>

                  <li class="list-group-item py-2">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <p class="mb-0">Last Seen</p>
                        <p class="small text-muted mb-0">Select who can see my last seen</p>
                      </div>
                      <Dropdown
                        title="Details"
                        displayType="button"
                        size="mr-2"
                        xplacement="bottom-start"
                        emptyLabel="Public"
                        :options="chatOptions"
                        @change="lastSeenUpdate"
                        defaultvalue="public"
                        :setActive="true"
                        dpclass="dropdown-menu-right"
                        dpstyle="position: absolute; will-change: transform; top: 0px; left: -40px; transform: translate3d(-12px, 37px, 0px);"
                      ></Dropdown>
                    </div>
                  </li>

                  <li class="list-group-item py-2">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <p class="mb-0">Groups</p>
                        <p class="small text-muted mb-0">Select who can add you in groups</p>
                      </div>

                      <Dropdown
                        title="Details"
                        displayType="button"
                        size="mr-2"
                        xplacement="bottom-start"
                        emptyLabel="Public"
                        :options="chatOptions"
                        @change="whoCanAddInGroupUpdate"
                        defaultvalue="public"
                        :setActive="true"
                        dpclass="dropdown-menu-right"
                        dpstyle="position: absolute; will-change: transform; top: 0px; left: -40px; transform: translate3d(-12px, 37px, 0px);"
                      ></Dropdown>
                    </div>
                  </li>

                  <li class="list-group-item py-2">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <p class="mb-0">Status</p>
                        <p class="small text-muted mb-0">Select who can see my status updates</p>
                      </div>
                      <Dropdown
                        title="Details"
                        displayType="button"
                        size="mr-2"
                        xplacement="bottom-start"
                        emptyLabel="Public"
                        :options="chatOptions"
                        @change="whoCanSeeStatusUpdate"
                        defaultvalue="public"
                        :setActive="true"
                        dpclass="dropdown-menu-right"
                        dpstyle="position: absolute; will-change: transform; top: 0px; left: -40px; transform: translate3d(-12px, 37px, 0px);"
                      ></Dropdown>
                    </div>
                  </li>

                  <li class="list-group-item py-2">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <p class="mb-0">Read receipts</p>
                        <p class="small text-muted mb-0">
                          If turn off this option you won't be able to see read recipts
                        </p>
                      </div>
                      <div class="custom-control custom-switch mr-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="readReceipts"
                          :checked="readReceipt"
                          v-model="readReceipt"
                        />
                        <label class="custom-control-label" for="readReceipts">&nbsp;</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="card-footer d-flex justify-content-end">
                <button type="button" class="btn btn-link text-muted mx-1">Reset</button>
                <button type="button" @click="updatePrivacySettings" class="btn btn-primary">
                  Save Changes
                </button>
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
                        <p class="small text-muted mb-0">
                          Ask for a code if attempted login from an unrecognised device or browser.
                        </p>
                      </div>
                      <div class="custom-control custom-switch mr-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="twoFactorSwitch"
                          :checked="twofactor"
                          v-model="twofactor"
                        />
                        <label class="custom-control-label" for="twoFactorSwitch">&nbsp;</label>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-2">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <p class="mb-0">Get alerts about unrecognised logins</p>
                        <p class="small text-muted mb-0">
                          You will be notified if anyone logs in from a device or browser you don't
                          usually use
                        </p>
                      </div>
                      <div class="custom-control custom-switch mr-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="unrecognisedSwitch"
                          :checked="unrecognised"
                          v-model="unrecognised"
                        />
                        <label class="custom-control-label" for="unrecognisedSwitch">&nbsp;</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="card-footer d-flex justify-content-end">
                <button class="btn btn-link text-muted mx-1">Reset</button>
                <button class="btn btn-primary" @click="updateSecurityInfo" type="button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive } from 'vue';
import ArrowLeft from '../../assets/media/heroicons/outline/arrow-left.svg';
import { useStore, MutationTypes, ActionTypes } from '../../store';
import MyInput from '../Base/MyInput.vue';
import Dropdown from '../Base/Dropdown.vue';
import MobileNavigationArrow from './MobileNavigationArrow.vue';
declare interface keyValueObject {
  name: string;
  value: string;
}
const enum accountKeyTypes {
  first_name = 'first_name',
  last_name = 'last_name',
  phone = 'phone',
  birth_date = 'birth_date',
  email = 'email',
  website = 'website',
  address = 'address'
}
const enum socialKeyTypes {
  facebook = 'facebook',
  twitter = 'twitter',
  linkedin = 'linkedin',
  instagram = 'instagram'
}
const enum changePwdKeyTypes {
  current_password = 'current_password',
  new_password = 'new_password',
  confirm_password = 'confirm_password'
}
declare interface accountPayload {
  name: accountKeyTypes;
  value: string;
}
declare interface socialPayload {
  name: socialKeyTypes;
  value: string;
}
declare interface changePwdPayload {
  name: changePwdKeyTypes;
  value: string;
}
export default defineComponent({
  name: 'ProfileUpdate',
  props: {},
  components: {
    MyInput,
    ArrowLeft,
    Dropdown,
    MobileNavigationArrow
  },
  setup: () => {
    const store = useStore();
    const count = ref(store.state);
    const readReceipt = ref(true);
    const unrecognised = ref(true);
    const twofactor = ref(true);
    const accountpersonal = reactive({
      first_name: 'John',
      last_name: 'Doe',
      phone: '+1 (241) 7474 444',
      birth_date: '02-04-1991',
      email: 'johndoe@gmail.com',
      website: 'www.google.com',
      address: 'New York'
    });

    const socialDetail = reactive({
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    });

    const changePassword = reactive({
      current_password: '',
      new_password: '',
      confirm_password: ''
    });

    const privacyInfo = reactive({
      whocanseeprofilepic: '',
      whocanseelastseen: '',
      whocanaddingroup: '',
      whocanseestatus: ''
    });
    const currentUser = computed(() => store.getters.currentUser);
    const currentMainVisible = computed(() => store.getters.currentMainVisible);
    function update (payload: accountPayload): void {
      accountpersonal[payload.name] = payload.value;
    }
    function updateSocial (payload: socialPayload): void {
      socialDetail[payload.name] = payload.value;
    }
    function updatePassword (payload: changePwdPayload): void {
      changePassword[payload.name] = payload.value;
    }
    const chatOptions = [
      {
        value: 'public',
        label: 'Public'
      },
      {
        value: 'friend',
        label: 'Friend'
      },
      {
        value: 'selected-friends',
        label: 'Selected Friends'
      }
    ];

    function whoCanSeeProfileUpdate (option: keyValueObject): void {
      privacyInfo.whocanseeprofilepic = option.value;
    }

    function whoCanSeeStatusUpdate (option: keyValueObject): void {
      privacyInfo.whocanseelastseen = option.value;
    }

    function whoCanAddInGroupUpdate (option: keyValueObject): void {
      privacyInfo.whocanaddingroup = option.value;
    }

    function lastSeenUpdate (option: keyValueObject): void {
      privacyInfo.whocanseestatus = option.value;
    }

    function updateProfileInfo () {
      console.log('In updateProfileInfo call');
    }
    function updatePrivacySettings () {
      console.log(privacyInfo);
      console.log(readReceipt.value);
    }

    function updateSecurityInfo () {
      console.log('Update security Info');
      console.log(twofactor.value);
      console.log(unrecognised.value);
    }

    function updateSocialInfo () {
      console.log('updateSocialInfo');
    }

    function updatePasswordInfo () {
      console.log('updatePasswordInfo');
      console.log(changePassword);
    }
    return {
      currentUser,
      accountpersonal,
      update,
      socialDetail,
      changePassword,
      updateSocial,
      updatePassword,
      chatOptions,
      whoCanSeeProfileUpdate,
      whoCanSeeStatusUpdate,
      whoCanAddInGroupUpdate,
      lastSeenUpdate,
      readReceipt,
      twofactor,
      unrecognised,
      updatePrivacySettings,
      updateSecurityInfo,
      updateProfileInfo,
      updateSocialInfo,
      updatePasswordInfo,
      currentMainVisible
    };
  },
  methods: {}
});
</script>
