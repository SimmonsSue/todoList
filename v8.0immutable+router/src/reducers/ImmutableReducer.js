import { combineReducers } from 'redux-immutable'
import { fromJS} from 'immutable'
// import Immutable from 'immutable';
// import { combineReducers } from 'redux'
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

const initState = fromJS({
    todoData:[],
    doneData:[]
})

export  const TodoListReducer = (state=initState, action) => {
    const data = fromJS(action.data)
    const newData = fromJS(action.newData)
    const todoData = fromJS(action.data)
    const doneData = fromJS(action.data)
    
    switch(action.type) {
        case INIT_TODO:
        state = state.set('todoData', data)
        return state

        case INIT_DONE:
        state = state.set('doneData', data)
        return state

        case ADD_TODO:
        state = state.set('todoData', state.get('todoData').push(newData))
        return state

        case ADD_DONE:
        state = state.set('doneData', state.get('doneData').push(action.newData))
        return state

        case DELETE_TODO_DATA:
        state = state.set('todoData', state.get('todoData').splice(action.index, 1))
        return state

        case DELETE_DONE_DATA:
        state = state.set('doneData', state.get('doneData').splice(action.index, 1))
        return state

        case UPDATE_ALL_TODO:
        state = state.set('todoData', todoData)
        return state
        
        case UPDATE_ALL_DONE:
        state = state.set('doneData', doneData)
        return state

        case UPDATE_TODO:
        // state.updateIn(['todoData', action.index], data => data)
        state = state.set('todoData', state.get('todoData').splice(action.index, 1, data))
        return state

        case UPDATE_DONE:
        state = state.set('doneData', state.get('doneData').splice(action.index, 1, data))
        return state

        default:
        return state
    }
}


// const VISIABLE_FILTER = 'VISIABLE_FILTER'
// const visableFilterReducer = (state=initState, action) => {
//     switch(action.type) {
//         case VISIABLE_FILTER:
//         return {
//             ...state,
//             ...action.data
//         }
//         default:
//         return state 
//     }
// }

export const rootReducer = combineReducers({
    TodoListReducer
})
