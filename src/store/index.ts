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
import Friends from "../Services//Friends";
//declare state
export type State = { currentConversation: Object, showChatSearch : Boolean,searchText : String };

//set state
const state: State = { currentConversation: {}, showChatSearch : false , searchText: '' };

// mutations and action enums

export enum MutationTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION",
    SHOW_CHATSEARCH = "SET_SHOWCHATSEARCH",
    LOAD_SEARCHTEXT = "SET_SEARCHTEXT",
}

export enum ActionTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION",
    LOAD_SEARCHTEXT = "SET_SEARCHTEXT",
}

//Mutation Types
export type Mutations<S = State> = {
    [MutationTypes.LOAD_CONVERSATION](state: S, payload: Object): void;
    [MutationTypes.SHOW_CHATSEARCH](state: S, payload: Boolean): void;
    [MutationTypes.LOAD_SEARCHTEXT](state: S, payload: String): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOAD_CONVERSATION](state: State, payload: Object) {
        Friends.getConversationDetail(payload).then((response: object) => {

            state.currentConversation = response.data;
        }).catch((e: Error) => {
            console.log(e);
            state.currentConversation = {};
        });
    },
    [MutationTypes.SHOW_CHATSEARCH](state: State, payload: Boolean) {
        state.showChatSearch = payload;
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
    [ActionTypes.LOAD_SEARCHTEXT](
        { commit }: AugmentedActionContext,
        payload: Object
    ): void;
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.LOAD_CONVERSATION]({ commit }, payload: Object) {
        // Ajax call will be here.
        Friends.getConversationDetail(payload).then((response: object) => {

            commit(MutationTypes.LOAD_CONVERSATION, response.data);
        }).catch((e: Error) => {
            console.log(e);
            commit(MutationTypes.LOAD_CONVERSATION, {});
        });

    },
    [ActionTypes.LOAD_SEARCHTEXT]({ commit }, payload: String) {
        // Ajax call will be here.
        commit(MutationTypes.LOAD_SEARCHTEXT, payload);

    }
};

// Getters types
export type Getters = {
    currentConversation(state: State): Object;
    currentShowChatSearch(state: State) : Boolean;
    currentSearchText(state: State) : String;
};

//getters

export const getters: GetterTree<State, State> & Getters = {
    currentConversation: state => {
        return state.currentConversation;
    },
    currentShowChatSearch: state => {
        return state.showChatSearch;
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
// export const store = createStore({
//   state,
//   mutations: {
//     increment(state, payload) {
//       state.counter++;
//     }
//   },
//   actions: {
//     increment({ commit }) {
//       commit("increment");
//     }
//   },

//   getters: {
//     counter(state) {
//       return state.counter;
//     }
//   },
//   modules: {}
// });
