import axios from "axios";
import qs from "qs";
import { Toast } from 'vant';
// 创建axios实例

const service = axios.create({
    baseURL: 'https://cnodejs.org',
    timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        if (config.method === "post" || config.method === "put") {
            if (config.data) {
                let data = Object.assign({}, config.data);
                for (let k in data) {
                    if (data[k] === "") {
                        delete config.data[k];
                    }
                }
                config.data = qs.stringify(config.data);
            }
        } else {
            if (config.params) {
                let params = Object.assign({}, config.params);
                for (let k in params) {
                    if (params[k] === "") {
                        delete config.params[k];
                    }
                }
            }
        }
        return config;
    },
    error => {
        // eslint-disable-next-line
        Promise.reject(error);
    },


);

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        return res;
    },
    error => {
        console.log('网络错误');
        return Promise.reject(error);
    }
);
export default service;
