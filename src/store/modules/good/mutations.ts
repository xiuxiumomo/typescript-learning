import { MutationTree } from "vuex";
import { GoodState } from "./types";
import { formartTime } from '@/utils/index';
let tabJson: any = {
    share: '分享',
    good: '精华',
    job: '职业',
    ask: '问答',
}
export const mutations: MutationTree<GoodState> = {
    Good_New_List: (state, data) => {
        let res = data;
        res.forEach((item: any) => {
            if (!item.tab) {
                item.tab = '首页';
            } else {
                item.tab = tabJson[item.tab];
            }
            item.last_reply_at = formartTime(item.last_reply_at);
            return item
        })
        state.list = res;
    },
    Good_New_Detail: (state, data) => {
        let res = data;
        res.last_reply_at = formartTime(res.last_reply_at);
        state.detail = res;
    }
};
