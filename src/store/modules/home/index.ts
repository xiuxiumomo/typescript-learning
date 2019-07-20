import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { HomeState } from "./types";
import { RootState } from "../types";

export const state: HomeState = {
    homeList: {
        total: 0,
        data: []
    }

};
const namespaced: boolean = true;
export const home: Module<HomeState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
