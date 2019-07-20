import { ActionTree } from "vuex";
import { GoodState } from "./types";
import { RootState } from "../types";
import { good as api } from "@/api/index";

export const actions: ActionTree<GoodState, RootState> = {
    async getGoodNewsList({ commit }, params) {
        let response: any = await api.getGoodNewsList(params);
        if (response.success === true) {
            commit("Good_New_List", response.data);
        }
        return response;
    },
    async getGoodNewsDetail({ commit }, params) {
        let response: any = await api.getGoodNewsDetail(params);
        if (response.success === true) {
            commit("Good_New_Detail", response.data);
        }
        return response;
    }

};
