import { MutationTree } from "vuex";
import { HomeState } from "./types";

export const mutations: MutationTree<HomeState> = {
    Home_User: (state, data) => {
        state.homeList = {
            total: data.total,
            data: data.list
        }
    }
};
