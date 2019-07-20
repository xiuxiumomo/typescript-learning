import { ActionTree } from "vuex";
import { HomeState } from "./types";
import { RootState } from "../types";
import { home as api } from "@/api/index";

export const actions: ActionTree<HomeState, RootState> = {
    async getUserList({ commit }, params) {
        let response: any = await api.getUserList(params);
        if (response.code === 200) {
            commit("Home_User", response.data);
        }
        return response;
    },

};
