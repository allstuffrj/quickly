<template>
  <div
    class="row pt-2"
    :class="[{ hide: cuStep != 1 }]"
    data-step="1"
    data-title="Create a New Group"
  >
    <div class="col-12">
      <div class="form-group">
        <label>Group name</label>
        <input
          type="text"
          class="form-control form-control-md"
          id="groupName"
          v-model="creategroupobj.grpname"
          placeholder="Type group name here"
        />
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label>Choose profile picture</label>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="profilePictureInput"
            @change="onFilePicked"
            accept="image/*"
          />
          <label class="custom-file-label">Choose file</label>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="form-group mb-0">
            <label>Group privacy</label>
          </div>
        </div>
        <div class="col">
          <div class="form-group rounded p-2 border">
            <div class="custom-control custom-radio">
              <input
                class="form-check-input"
                type="radio"
                name="grouptype"
                v-model="creategroupobj.type"
                id="grouptypepublic"
                value="public"
              />
              <label class="form-check-label" for="grouptypepublic">
                Public group
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group rounded p-2 border">
            <div class="custom-control custom-radio">
              <input
                class="form-check-input"
                type="radio"
                name="grouptype"
                v-model="creategroupobj.type"
                id="grouptypeprivate"
                value="private"
              />
              <label class="form-check-label" for="grouptypeprivate">
                Private group
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="row  pt-2"
    :class="[{ hide: cuStep != 2 }]"
    data-step="2"
    data-title="Add Group Members"
  >
    <div class="col-12 px-0">
      <!-- Search Start -->
      <form class="form-inline w-100 px-2 pb-2 border-bottom">
        <div class="input-group w-100 bg-light">
          <input
            type="text"
            v-model="friendSearch"
            class="form-control form-control-md search border-right-0 transparent-bg pr-0"
            placeholder="Search"
          />
          <div class="input-group-append">
            <div class="input-group-text transparent-bg border-left-0" role="button">
              <SearchSvg />
            </div>
          </div>
        </div>
      </form>
      <!-- Search End -->
    </div>

    <div class="col-12 px-0">
      <!-- List Group Start -->
      <ul class="list-group list-group-flush">
        <!-- List Group Item Start -->
        <li
          class="list-group-item"
          v-if="CfilteredFriendList().length > 0"
          v-for="(friend, ind) in CfilteredFriendList()"
        >
          <div class="media">
            <div class="avatar mr-2" :class="['avatar-' + friend.status]">
              <img :src="friend.avatar" :alt="friend.user_name" />
            </div>

            <div class="media-body">
              <h6 class="text-truncate">
                <a href="javascript:void(0)" class="text-reset">{{ friend.user_name }}</a>
              </h6>

              <p class="text-muted mb-0">{{ friend.status }}</p>
            </div>

            <div class="media-options">
              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  :value="friend.uuid"
                  v-model="creategroupobj.friends"
                  :id="'chx-user-' + friend.uuid"
                />
                <label class="custom-control-label" :for="'chx-user-' + friend.uuid"></label>
              </div>
            </div>
          </div>
          <label class="media-label" :for="'chx-user-' + friend.uuid"></label>
        </li>
        <!-- List Group Item End -->
      </ul>
      <!-- List Group End -->
    </div>
  </div>

  <div class="row pt-2 h-100 " :class="[{ hide: cuStep != 3 }]" data-step="3" data-title="Finished">
    <div class="col-12">
      <div class="d-flex justify-content-center align-items-center flex-column h-100">
        <div class="btn btn-success btn-icon rounded-circle text-light mb-3">
          <CheckIcon class="injectable hw-24"></CheckIcon>
        </div>
        <h6>Group Created Successfully</h6>
        <p class="text-muted text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque laborum fugiat
          vero pariatur provident!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import SearchSvg from '../../assets/media/icons/search.svg';
import CheckIcon from '../../assets/media/heroicons/outline/check.svg';
import Friends from '../../Services/Friends';
import FriendRow from '../Base/FriendRow.vue';
import { friendType } from '../../Config/Config';

export default defineComponent({
  name: 'CreateGroup',
  props: {
    cuStep: {
      type: Number,
      default: 1
    },
    creategroupobj: {
      type: Object,
      default: {}
    }
  },

  components: {
    SearchSvg,
    FriendRow,
    CheckIcon
  },
  emits: ['onFilePicked'],
  setup: (props, context) => {
    const friendSearch = ref<string>('');
    var friendsList = ref<friendType[]>([]);

    function CfilteredFriendList (): friendType[] {
      var friendAr = friendsList.value;
      if (friendSearch.value === '' || friendSearch.value == null) return friendAr;

      return friendAr.filter(entry => {
        return entry.user_name.toLowerCase().includes(friendSearch.value.toLowerCase());
      });
    }
    function getFriendList (): void {
      Friends.getAll()
        .then((response: any) => {
          friendsList.value = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    getFriendList();
    function onFilePicked (event: any): void {
      console.log('in child');
      context.emit('onFilePicked', event);
    }
    return { CfilteredFriendList, friendSearch, onFilePicked };
  },
  methods: {}
});
</script>
