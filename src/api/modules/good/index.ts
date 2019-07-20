/* tslint-disable */
import request from '@/utils/request';
export function getGoodNewsList(params = {}) {
    return request({
        url: '/api/v1/topics?tab=good',
        method: 'get',
        params

    })
}
export function getGoodNewsDetail(params: any) {
    let { id } = params;
    let _params = { ...params };
    delete _params.id;
    return request({
        url: `/api/v1/topic/${id}`,
        method: 'get',
        params: _params

    })
}

