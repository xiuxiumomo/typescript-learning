import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./modules/types";
import { home } from "./modules/home/index";
import { good } from "./modules/good/index";


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    home,
    good
  }
};

export default new Vuex.Store<RootState>(store);
