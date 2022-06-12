<template>
  <aside class="sidebar">
    <div class="tab-content">
      <div class="tab-pane active" id="chats-content">
        <div class="d-flex flex-column h-100">
          <div class="hide-scrollbar h-100" id="chatContactsList">
            <div class="sidebar-header sticky-top p-2">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="font-weight-semibold mb-0">Chats</h5>
                <ChatAction />
              </div>
              <div class="sidebar-sub-header">
                <Dropdown
                  title="Details"
                  :displayType="dpDisplayType"
                  :size="dpsize"
                  :xplacement="xplacement"
                  :emptyLabel="emptyLabel"
                  :options="options"
                  @change="dpChangeHandler"
                  :defaultvalue="defaultvalue"
                  :dpstyle="dropdownCss"
                ></Dropdown>

                <SerachForm v-model="searchInput"></SerachForm>
              </div>
            </div>

            <ConversationList :conversationList="filteredConversationList"></ConversationList>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import ChatAction from '../Partials/ChatAction.vue';
import Dropdown from '../Base/Dropdown.vue';
import SerachForm from '../Base/SerachForm.vue';
import { ref, defineComponent, watch, onMounted } from 'vue';
import ConversationList from '../Partials/ConversationList.vue';
import Friends from '../../Services/Friends';
import { isRTL, ResponseType, sgconvdetail } from '../../Config/Config';
type selectedOptionType = {
  value: string;
  label: string;
};
export default defineComponent({
  name: 'ChatList',
  props: {},
  components: {
    Dropdown,
    ChatAction,
    SerachForm,
    ConversationList
  },
  setup: () => {
    const searchInput = ref('');
    watch(searchInput, (neval, oldVal) => {
      dpChangeHandler(currentSelected.value);
    });
    const options = [
      {
        value: 'all-chats',
        label: 'All Chats'
      },
      {
        value: 'friends',
        label: 'Friends'
      },
      {
        value: 'groups',
        label: 'Groups'
      },
      {
        value: 'unread',
        label: 'Unread'
      },
      {
        value: 'archived',
        label: 'Archived'
      }
    ];
    const emptyLabel = 'All Chats';
    const dpsize = 'border-0 f-16 p-0 min-w-150 cut-texts';
    const xplacement = 'bottom-start';
    const defaultvalue = 'all-chats';
    const dpDisplayType = 'button';
    const conversationList = ref<sgconvdetail[]>([]);
    const filteredConversationList = ref<sgconvdetail[]>([]);
    const currentSelected = ref<selectedOptionType>(options[0]);
    const dropdownCss = ref(
      'position: absolute; transform: translate3d(0px, 37px, 0px); top: 0px; left: 0px; will-change: transform'
    );
    const isRTLCn = ref(localStorage.getItem('rtl') ? localStorage.getItem('rtl') : isRTL);

    if (isRTLCn.value) {
      dropdownCss.value =
        'position: absolute; transform: translate3d(-49px, 37px, 0px); top: 0px; left: 0px; will-change: transform;';
    }
    function getConversationList () {
      Friends.getConversations()
        .then((response: ResponseType) => {
          conversationList.value = <sgconvdetail[]>response.data;
          filteredConversationList.value = <sgconvdetail[]>response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }

    function dpChangeHandler (selected: selectedOptionType): void {
      currentSelected.value = selected;
      if (selected.value == 'all-chats') {
        let ListAr = conversationList.value;
        if (searchInput.value != '' && searchInput.value != null) {
          ListAr = ListAr.filter(entry => {
            return entry.name.toLowerCase().includes(searchInput.value.toLowerCase());
          });
        }
        filteredConversationList.value = ListAr;
        return;
      }

      var tempList = [];

      tempList = conversationList.value.filter(entry => {
        if (selected.value == 'friends') {
          return entry.conversation_type == 'friend';
        } else if (selected.value == 'groups') {
          return entry.conversation_type == 'group';
        } else if (selected.value == 'unread') {
          return entry.unread_count > 0;
        } else if (selected.value == 'archived') {
          return entry.is_archived > 0;
        }
      });

      if (searchInput.value != '' && searchInput.value != null) {
        tempList = tempList.filter(entry => {
          return entry.name.toLowerCase().includes(searchInput.value.toLowerCase());
        });
      }
      filteredConversationList.value = tempList;
    }

    onMounted(() => {
      getConversationList();
    });
    return {
      options,
      emptyLabel,
      dpsize,
      defaultvalue,
      dpDisplayType,
      searchInput,
      xplacement,
      filteredConversationList,
      dpChangeHandler,
      dropdownCss
    };
  }
});
</script>
