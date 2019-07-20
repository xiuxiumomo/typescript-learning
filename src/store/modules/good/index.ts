import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { GoodState } from "./types";
import { RootState } from "../types";

export const state: GoodState = {
    list: [],
    detail: {}

};
const namespaced: boolean = true;
export const good: Module<GoodState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
