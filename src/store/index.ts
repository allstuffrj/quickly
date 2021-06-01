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

//declare state
export type State = { currentConversation: Object };

//set state
const state: State = { currentConversation: {} };

// mutations and action enums

export enum MutationTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION"
}

export enum ActionTypes {
    LOAD_CONVERSATION = "SET_CONVERSATION"
}

//Mutation Types
export type Mutations<S = State> = {
    [MutationTypes.LOAD_CONVERSATION](state: S, payload: Object): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.LOAD_CONVERSATION](state: State, payload: Object) {
        state.currentConversation = payload;
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
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.LOAD_CONVERSATION]({ commit }, payload: Object) {
        commit(MutationTypes.LOAD_CONVERSATION, payload);
    }
};

// Getters types
export type Getters = {
    currentConversation(state: State): Object;
};

//getters

export const getters: GetterTree<State, State> & Getters = {
    currentConversation: state => {
        console.log("state", state.currentConversation);
        return state.currentConversation;
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
