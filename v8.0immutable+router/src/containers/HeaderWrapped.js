import { connect } from 'react-redux'
import { addTodo, updateAllTodo } from '../actions/todos.js'
import { Header } from '../components/Header.js'

const mapStateToProps = (state) => {
    return {
        todoData:state.getIn(['TodoListReducer', 'todoData']),
        doneData:state.getIn(['TodoListReducer', 'doneData'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAllTodo:(data)=>{
            dispatch(updateAllTodo(data))
        },
        addTodo:(data) => {
            dispatch(addTodo(data))
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header)