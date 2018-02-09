
import * as types from './mutation-types'

export const getCategories = function (state, data) {
    state.categories = data;
}
export const getUsers = function (state, data) {
    state.users = data;
}