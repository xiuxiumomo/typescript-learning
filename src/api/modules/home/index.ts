import request from '@/utils/request';
export function getUserList(params = {}) {
    return request({
        url: '/userList',
        method: 'get',
        params

    })
}


