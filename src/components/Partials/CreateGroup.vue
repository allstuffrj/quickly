<template>
    <div class="row pt-2">
            <div class="col-12">
              <div class="form-group">
                <label>Group name</label>
                <input
                  type="text"
                  class="form-control form-control-md"
                  id="groupName"
                  placeholder="Type group name here" />
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
                    accept="image/*"
                  >
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
                        name="exampleRadios"
                        value="option1"
                        checked={this.state.isPublicGroup}
                        onChange={() => {
                          this.setPublicGroup(true);
                        }}
                      >
                      <label
                        class="form-check-label"
                        onClick={() => {
                          this.setPublicGroup(true);
                        }}
                      >
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
                        name="exampleRadios"
                        value="option2"
                        checked={this.state.isPublicGroup === false}
                        onChange={() => {
                          this.setPublicGroup(false);
                        }}
                      >
                      <label
                        class="form-check-label"
                        onClick={() => {
                          this.setPublicGroup(false);
                        }}
                      >
                        Private group
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        
</template>

<script lang="ts">
    import { ref, defineComponent,onMounted} from 'vue'
    import SearchSvg from  '../../assets/media/icons/search.svg';
    import Friends from "../../Services/Friends";
    import FriendRow from "../Base/FriendRow.vue";
    export default defineComponent({
        name: 'CreateGroup',
        props: {
            
        },

        components : {
                SearchSvg,
                FriendRow,
        },

        setup: (props,context) => {
                const friendSearch = ref(null)
                var friendsList = ref({});
                
            function CfilteredFriendList() {
                
                var friendAr = friendsList.value;
                if(friendSearch.value === '' || friendSearch.value == null) return friendAr;
                
                
                return friendAr.filter(entry => {
                    return entry.user_name.toLowerCase().includes(friendSearch.value.toLowerCase())
                })   
             
             }
             function getFriendList(){

                Friends.getAll().then((response: object) => {

                    friendsList.value = response.data;
                            
                }).catch((e: Error) => {
                    console.log(e);
                });
            }
            getFriendList();
            
            return {CfilteredFriendList,friendSearch}
        },
        methods: {

        }
    })
</script>
