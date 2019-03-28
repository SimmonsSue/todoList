import * as type from '../constants/ActionTypes.js'

export const initTodo = (data) => {
    return {type:type.INIT_TODO, data}
}
export const initDone = (data) => {
    return {type:type.INIT_DONE, data}
}
export const addTodo = (newData) => {
    return {type:type.ADD_TODO, newData}
}
export const addDone = (newData) => {
    return {type:type.ADD_DONE, newData}
}
export const deleteTodoData = (index) => {
    return {type:type.DELETE_TODO_DATA, index}
}
export const deleteDoneData = (index) => {
    return {type:type.DELETE_DONE_DATA, index}
}
export const updateAllTodo = (data) => {
    return {type:type.UPDATE_ALL_TODO, data}
}
export const updateAllDone = (data) => {
    return {type:type.UPDATE_ALL_DONE, data}
}
export const updateTodo = (index, data) => {
    return {type:type.UPDATE_TODO, index, data}
}
export const updateDone = (index, data) => {
    return {type:type.UPDATE_DONE, index, data}
}
