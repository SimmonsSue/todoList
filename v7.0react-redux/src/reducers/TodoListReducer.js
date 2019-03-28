import { combineReducers } from 'redux'
import * as type from '../constants/ActionTypes.js'

const initState = {
    todoData:[],
    doneData:[]
}

export  const TodoListReducer = (state=initState, action) => {
    switch(action.type) {
        case type.INIT_TODO:
        return {
            ...state,
            todoData:[...state.todoData, ...action.data]
        }
        case type.INIT_DONE:
        return {
            ...state,
            doneData:[...state.doneData, ...action.data]
        }
        case type.ADD_TODO:
        return {
            ...state,
            todoData: [...state.todoData, action.newData],
            
        }
        // return Object.assign({}, state, {
        //     todoData: state.todoData.concat(action.newData)
        //   });
        case type.ADD_DONE:
        return {
            ...state,
            doneData: [...state.doneData, action.newData],
            
        }
        // return Object.assign({}, state, {
        //     doneData: state.todoData.concat(action.newData)
        //   });
        case type.DELETE_TODO_DATA:
        
        return {...state,
            todoData: [
                ...state.todoData.slice(0, action.index),
                 ...state.todoData.slice(action.index+1)
                ]
                
          }
        case type.DELETE_DONE_DATA:
        return {...state,
            doneData: [
                ...state.doneData.slice(0, action.index), 
                ...state.doneData.slice(action.index+1)
                ]
          }
          case type.UPDATE_ALL_TODO:
        return {
            ...state,
            todoData:action.data
        }
        case type.UPDATE_ALL_DONE:
        return {
            ...state,
            doneData:action.data
        }
        case type.UPDATE_TODO:
        // state.todoData[action.index] = action.data
        return {
            ...state,
            todoData:[
                ...state.todoData.slice(0, action.index), 
                ...state.todoData.splice(action.index, 1, action.data),
                ...state.todoData.slice(action.index+1)
            ]
        }
        case type.UPDATE_DONE:
        return {
            ...state,
            doneData:[
                ...state.doneData.slice(0, action.index), 
                ...state.doneData.splice(action.index, 1, action.data),
                ...state.doneData.slice(action.index+1)
            ]
        }
    
        default:
        return state
    }
}


const VISIABLE_FILTER = 'VISIABLE_FILTER'
const visableFilterReducer = (state=initState, action) => {
    switch(action.type) {
        case VISIABLE_FILTER:
        return {
            ...state,
            ...action.data
        }
        default:
        return state 
    }
}
export const reducers = combineReducers({TodoListReducer, visableFilterReducer})