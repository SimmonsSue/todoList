import { connect } from 'react-redux'
import { initTodo, addTodo, addDone, initDone, updateDone,updateTodo, updateAllTodo, updateAllDone, deleteTodoData, deleteDoneData} from '../actions/todos.js'
import { TodoList } from '../components/TodoList.js'

const mapStateToProps = (state) => {
    return {
        todoData:state.TodoListReducer.todoData,
        doneData:state.TodoListReducer.doneData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTodo:(todoData) => {
            dispatch(initTodo(todoData))
        },
        initDone:(doneData) => {
            dispatch(initDone(doneData))
        },
        deleteTodoData:(index)=>{
            dispatch(deleteTodoData(index))
        },
        deleteDoneData:(index)=>{
            dispatch(deleteDoneData(index))
        },
        addTodo:(todoData) => {
            dispatch(addTodo(todoData))
        },
        addDone:(doneData) => {
            dispatch(addDone(doneData))
        },
        updateAllTodo:(data) => {
            dispatch(updateAllTodo(data))
        },
        updateAllDone:(data) => {
            dispatch(updateAllDone(data))
        },
        updateTodo:(index, data) => {
            dispatch(updateTodo(index, data))
        },
        updateDone:(index, data) => {
            dispatch(updateDone(index, data))
        },
        


    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList)