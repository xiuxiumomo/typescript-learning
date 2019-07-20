import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from '@/store/store.ts';
import 'normalize.css';
import '@/assets/less/index.less';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false;
console.log(process.env)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
