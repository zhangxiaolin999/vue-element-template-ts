import request from '@/utils/request'


export const login = (data: any):Object => {
    const params = 'params=' + JSON.stringify(data) + '\n'
   return request({
        method: 'post',
        data: (params)
    })
}
export const logout = () => {
    request({
        method: 'post',
    })
}
