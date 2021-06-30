import {
    createStore,
    MutationTree,
    ActionContext,
    ActionTree,
    GetterTree,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    createLogger
} from "vuex";
import Friends from "../Services/Friends";
import Calls from "../Services/Calls";
import {ResponseType, userdata} from '../Config/Config';
//declare state
export type State = { currentConversation: Object, showChatSearch : Boolean,showChatInfo : Boolean,searchText : String, currentCall :Object,currentFriend : Object,currentUser : Object,mainVisible : Boolean };

//set state
const state: State = { currentConversation: {}, showChatSearch : false , searchText: '',showChatInfo:false,currentCall:{},currentFriend:{},currentUser:{},mainVisible:true };


// mutations and action enums

export enum MutationTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION",
    SHOW_CHATSEARCH = "SET_SHOWCHATSEARCH",
    SHOW_CHATINFO = "SET_SHOWCHATINFO",
    SHOW_MAINWINDOW = "SET_MAINWINDOW",
    LOAD_SEARCHTEXT = "SET_SEARCHTEXT",
    LOAD_CALLHISTORY = "SET_CALLHISTORY",
    LOAD_FRIEND = "SET_FRIEND",
    LOAD_USER = "SET_USER",
}

export enum ActionTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION",
    LOAD_CALLHISTORY = "SET_CALLHISTORY",
    LOAD_FRIEND = "SET_FRIEND",
    LOAD_SEARCHTEXT = "SET_SEARCHTEXT",
    LOAD_USERDETAIL = "SET_USERDETAIL",
}

//Mutation Types
export type Mutations<S = State> = {
    [MutationTypes.LOAD_CONVERSATION](state: S, payload: Object): void;
    [MutationTypes.LOAD_CALLHISTORY](state: S, payload: Object): void;
    [MutationTypes.LOAD_FRIEND](state: S, payload: Object): void;
    [MutationTypes.LOAD_USER](state: S, payload: Object): void;
    [MutationTypes.SHOW_MAINWINDOW](state: S, payload: Boolean): void;
    [MutationTypes.SHOW_CHATSEARCH](state: S, payload: Boolean): void;
    [MutationTypes.SHOW_CHATINFO](state: S, payload: Boolean): void;
    [MutationTypes.LOAD_SEARCHTEXT](state: S, payload: String): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOAD_CONVERSATION](state: State, payload: Object) {
        /*Friends.getConversationDetail(payload).then((response: object) => {

            state.currentConversation = response.data;
        }).catch((e: Error) => {
            console.log(e);
            state.currentConversation = {};
        });*/
        state.currentConversation = payload;
    },
    [MutationTypes.LOAD_CALLHISTORY](state: State, payload: Object) {
        state.currentCall = payload;
    },
    [MutationTypes.LOAD_FRIEND](state: State, payload: Object) {
        state.currentFriend = payload;
    },
    [MutationTypes.LOAD_USER](state: State, payload: Object) {
         state.currentUser = payload;
    },
    [MutationTypes.SHOW_CHATSEARCH](state: State, payload: Boolean) {
        state.showChatSearch = payload;
    },
    [MutationTypes.SHOW_MAINWINDOW](state: State, payload: Boolean) {
        state.mainVisible = payload;
    },
    [MutationTypes.SHOW_CHATINFO](state: State, payload: Boolean) {
        state.showChatInfo = payload;
    },
    [MutationTypes.LOAD_SEARCHTEXT](state: State, payload: String) {
        state.searchText = payload;
    }
};

//actions

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// actions interface

export interface Actions {
    [ActionTypes.LOAD_CONVERSATION](
        { commit }: AugmentedActionContext,
        payload: Object
    ): void;
    [ActionTypes.LOAD_CALLHISTORY](
        { commit }: AugmentedActionContext,
        payload: Object
    ): void;
    [ActionTypes.LOAD_FRIEND](
        { commit }: AugmentedActionContext,
        payload: Object
    ): void;
    [ActionTypes.LOAD_USERDETAIL](
        { commit }: AugmentedActionContext,
        payload:string
    ): void;
    [ActionTypes.LOAD_SEARCHTEXT](
        { commit }: AugmentedActionContext,
        payload: Object
    ): void;
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.LOAD_CONVERSATION]({ commit }, payload: Object) {
        // Ajax call will be here.
        Friends.getConversationDetail(payload).then((response: ResponseType) => {

            commit(MutationTypes.LOAD_CONVERSATION, response.data);
        }).catch((e: Error) => {
            console.log(e);
            commit(MutationTypes.LOAD_CONVERSATION, {});
        });

    },
    [ActionTypes.LOAD_CALLHISTORY]({ commit }, payload: Object) {
        // Ajax call will be here.
        Calls.getCallHistory(payload).then((response: ResponseType) => {

            commit(MutationTypes.LOAD_CALLHISTORY, response.data);
        }).catch((e: Error) => {
            console.log(e);
            commit(MutationTypes.LOAD_CALLHISTORY, {});
        });

    },
    [ActionTypes.LOAD_FRIEND]({ commit }, payload: Object) {
        // Ajax call will be here.

        Friends.getFriendDetail(payload).then((response: ResponseType) => {
            commit(MutationTypes.LOAD_FRIEND, response.data);
        }).catch((e: Error) => {
            console.log(e);
            commit(MutationTypes.LOAD_FRIEND, {});
        });

    },

    [ActionTypes.LOAD_USERDETAIL]({ commit },payload:string) {
        // Ajax call will be here.

        Friends.getUserDetail().then((response: ResponseType) => {
            commit(MutationTypes.LOAD_USER, response.data);
        }).catch((e: Error) => {
            console.log(e);
            commit(MutationTypes.LOAD_USER, {});
        });

    },
    [ActionTypes.LOAD_SEARCHTEXT]({ commit }, payload: string) {
        // Ajax call will be here.
        commit(MutationTypes.LOAD_SEARCHTEXT, payload);

    }
};

// Getters types
export type Getters = {
    currentConversation(state: State): Object;
    currentCall(state: State): Object;
    currentFriend(state: State): Object;
    currentUser(state: State): Object;
    currentShowChatSearch(state: State) : Boolean;
    currentMainVisible(state: State) : Boolean;
    currentShowChatInfo(state: State) : Boolean;
    currentSearchText(state: State) : String;
};

//getters

export const getters: GetterTree<State, State> & Getters = {
    currentConversation: state => {
        return state.currentConversation;
    },
    currentCall: state => {
        return state.currentCall;
    },
    currentFriend: state => {
        return state.currentFriend;
    },
    currentUser: state => {
        return state.currentUser;
    },
    currentShowChatSearch: state => {
        return state.showChatSearch;
    },
    currentMainVisible: state => {
        return state.mainVisible;
    },
    currentShowChatInfo: state => {
        return state.showChatInfo;
    },
    currentSearchText: state => {
        return state.searchText;
    }
};

//setup store type
export type Store = Omit<
    VuexStore<State>,
    "commit" | "getters" | "dispatch"
    > & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
};

export const store = createStore({
    state,
    mutations,
    actions,
    getters,
    plugins: [createLogger()]
});

export function useStore() {
    return store as Store;
}
