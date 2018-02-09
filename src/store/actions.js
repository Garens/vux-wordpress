
import * as types from './mutation-types'
import { getCategories,getUsers } from './getData'

//获取所有分类列表
export const getCategorieList = async function ({ commit }) {
    try {
        const res = await getCategories();
        if (res) {
            commit('getCategories', res);
        } else {
            throw new Error('获取数据失败');
        }
    } catch (err) {
        console.log(err);
    }
}
//获取所有用户列表
export const getUserList = async function ({ commit }) {
    try {
        const res = await getUsers();
        console.log(res)
        if (res) {
            commit('getUsers', res);
        } else {
            throw new Error('获取数据失败');
        }
    } catch (err) {
        console.log(err);
    }
}