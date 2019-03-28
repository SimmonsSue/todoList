import React, { Component } from 'react'
// import TodoAdd from './TodoAdd.js'
import PropTypes from 'prop-types'
import { TodoAdd } from './TodoAdd.js';
import { saveData } from '../utils/utils.js';
import { fromJS} from 'immutable'
import DevTools from '../containers/DevTools';
import { Link, Route } from 'react-router-dom'
export class TodoList extends Component {
    static propTypes = {
        todoData:PropTypes.object, 
        doneData:PropTypes.object
    }
    constructor(props){
        super(props)
        this.loadTodo = this.loadTodo.bind(this)
        this.loadDone = this.loadDone.bind(this)
        this.getCount = this.getCount.bind(this)
        this.changeAllStateHandler = this.changeAllStateHandler.bind(this)
        this.deleteAllHandler = this.deleteAllHandler.bind(this)
        // this.state={todoData:props.todoData, doneData:props.doneData}
    }

    componentDidMount() {
        this._loadData()
    }

    _loadData() {
        let data = localStorage.getItem('todoList')
        const {initTodo, initDone} = this.props
        data = data ? JSON.parse(data) : []
        let todoData = data.filter((item )=>item.update === false) || []
        let doneData = data.filter((item )=>item.update === true) || []
        todoData = fromJS(todoData)
        doneData = fromJS(doneData)
        initTodo(todoData)
        initDone(doneData)
       
    }
    

    getCount(data) {
        // return this.props.data.filter(item => item.update === value).length
        // return type ?  this.props.todoData.length : this.props.doneData.length
        return  data.size 
    }

    
    changeAllStateHandler(IsDoneList) {
        const {todoData, doneData, updateAllTodo, updateAllDone} = this.props
        const noData = fromJS([])
        let _data = IsDoneList ? todoData : doneData
        // _data =  _data.map( (item) => {return item.update = IsDoneList})
        _data = _data.map( (item) => {return item.set('update',IsDoneList)})
        if(IsDoneList) {
            updateAllTodo(noData)
            updateAllDone([...doneData, ..._data])
            saveData([...doneData, ..._data])
        }else{
            updateAllDone(noData)
            updateAllTodo([...todoData, ..._data])
            saveData([...todoData, ..._data])
        }
        // saveData([...todoData, ...doneData])
    }


    deleteAllHandler(type) {
        const noData = fromJS([])
        const {todoData, doneData, updateAllTodo, updateAllDone} = this.props
        type ? updateAllTodo(noData): updateAllDone(noData)
        let newData = type ? doneData : todoData
        saveData(newData)
    }
    
    loadTodo() {
        // const { ...data } = this.props
        return this.props.todoData.map((item, index)=>{
            const value = item.get('value')
            return (
                <TodoAdd 
                    // data ={this.props.todoData}
                    value={value} 
                    index={index} 
                    key={index} 
                    isTodo={true}
                    checkBox={false}
                    isDoneList={false}
                    // {...this.props}
                    todoData={this.props.todoData} 
                    doneData={this.props.doneData}
                    updateTodo={this.props.updateTodo}
                    deleteDoneData={this.props.deleteDoneData}
                    addTodo={this.props.addTodo}
                    deleteTodoData={this.props.deleteTodoData}
                    addDone={this.props.addDone}
                />
            )
        })
    }
    /**
     * 加载已完成列表
     */
    loadDone() {
        // const { ...data } = this.props
        return this.props.doneData.map((item,index)=>{
            const value = item.get('value')
            return (
                <TodoAdd   
                    value={value} 
                    index={index} 
                    key={index} 
                    isTodo={false}
                    checkBox={true}
                    isDoneList={true}
                    // {...this.props}
                    todoData={this.props.todoData} 
                    doneData={this.props.doneData}
                    updateDone={this.props.updateDone}
                    deleteDoneData={this.props.deleteDoneData}
                    addTodo={this.props.addTodo}
                    deleteTodoData={this.props.deleteTodoData}
                    addDone={this.props.addDone}
                />
            )
        })
    }
    /**
     * 计算未完成和已完成任务条数
     * @param {Boolean} value 
     */
   
    render() {

        return (
            <div>
                <Link to='/devtools'  className=' DevToolsButton' >
                        DevTools
                </Link>
                <div className="doList container">
                    <div className="doing">
                        <h2 className="left">正在进行</h2>
                        <span className="todoCount">
                            {this.getCount(this.props.todoData)}
                        </span> 
                    </div>
                    <div className="selectAllTodo">
                        <input id="selectAllTodo" type="checkbox" ref='selectAllTodo' onChange={() => this.changeAllStateHandler(true)}/>
                        <p>全部添加</p>
                        <input id="deleteAllTodo" type="checkbox" ref='deleteAllTodo' onChange={() =>this.deleteAllHandler(true)}/>
                        <p>全部删除</p>
                    </div>
                    <ul className="doingList" id=""  >
                    {this.loadTodo()}
                    </ul>

                    <div className="finish">
                        <h2 className="left">已经完成</h2>
                        <span className="finishCount right">
                            {this.getCount(this.props.doneData)}
                        </span>
                    </div>
                    <div className="selectAllTodo">
                        <input id="cancelAllFinish" type="checkbox" ref='cancelAllFinish' onChange={this.changeAllStateHandler.bind(this, false)}/>
                        <p>全部取消</p>
                        <input id="deleteAllFinish" type="checkbox" ref='deleteAllFinish' onChange={this.deleteAllHandler.bind(this, false)}/>
                        <p>全部删除</p>
                    </div>
                    <ul className="finishList" id="" >
                    {this.loadDone()}
                    </ul>
                </div>
            </div>  
        )
    }
}

