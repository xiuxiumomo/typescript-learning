import { GetterTree } from "vuex";
import { GoodState } from "./types";
import { RootState } from "../types";
export const getters: GetterTree<GoodState, RootState> = {
    goodList: state => state.list,
    goodDetail: state => state.detail
};
