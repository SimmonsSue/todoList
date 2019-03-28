import { combineReducers } from 'redux'

const INIT_TODO = 'INIT_TODO'
const INIT_DONE = 'INIT_DONE'
const ADD_TODO = 'ADD_TODO'
const ADD_DONE = 'ADD_DONE'
const DELETE_TODO_DATA = 'DELETE_TODO_DATA'
const DELETE_DONE_DATA = 'UPDATE_DONE_DATA'
const UPDATE_ALL_TODO = 'UPDATE_ALL_TODO'
const UPDATE_ALL_DONE = 'UPDATE_ALL_DONE'
const UPDATE_TODO = 'UPDATE_TODO'
const UPDATE_DONE = 'UPDATE_DONE'

// export const reducers =  combineReducers({todoReducer, doneReducer})

export const initTodo = (data) => {
    return {type:INIT_TODO, data}
}
export const initDone = (data) => {
    return {type:INIT_DONE, data}
}
export const addTodo = (newData) => {
    return {type:ADD_TODO, newData}
}
export const addDone = (newData) => {
    return {type:ADD_DONE, newData}
}
export const deleteTodoData = (index) => {
    return {type:DELETE_TODO_DATA, index}
}
export const deleteDoneData = (index) => {
    return {type:DELETE_DONE_DATA, index}
}
export const updateAllTodo = (data) => {
    return {type:UPDATE_ALL_TODO, data}
}
export const updateAllDone = (data) => {
    return {type:UPDATE_ALL_DONE, data}
}
export const updateTodo = (index, data) => {
    return {type:UPDATE_TODO, index, data}
}
export const updateDone = (index, data) => {
    return {type:UPDATE_DONE, index, data}
}
