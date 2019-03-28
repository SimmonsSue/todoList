import React, { Component } from 'react'
import TodoAdd from './TodoAdd.js'
export class TodoList extends Component {
    
    constructor(props){
        super(props)
        this.loadTodo = this.loadTodo.bind(this)
        this.loadDone = this.loadDone.bind(this)
        this.getCount = this.getCount.bind(this)
        this.changeState = this.changeState.bind(this)
        this.remove = this.remove.bind(this)
    }
    
    /**
     * 加载未完成列表
     */
    loadTodo() {
        const data = this.props.todoData
        return data.map((item, index)=>{
            return (
                <TodoAdd 
                    data ={this.props.data}
                    value={item.value} 
                    index={index} 
                    key={`todo`+index} 
                    loadTodo={true}
                    changeState={this.changeState}
                    remove={this.remove}
                    // check={false}
                    type={false}
                    setPropsData={this.props.setPropsData}
                    todoData={this.props.todoData} 
                    doneData={this.props.doneData}
                />
            )
        })
    }
    /**
     * 加载已完成列表
     */
    loadDone() {
        const data = this.props.doneData
        return data.map((item,index)=>{
            return (
                <TodoAdd 
                    data ={this.props.data}
                    value={item.value} 
                    index={index} 
                    key={`done`+index} 
                    // loadTodo={false}
                    changeState={this.changeState}
                    remove={this.remove}
                    // check={true}
                    type={true}
                />
            )
        })
    }
    /**
     * 批量操作， 改变未完成或已完成的状态
     * @param {Boolean} type 
     */
    changeAllStatus(type) {
        const data =this.props.data
        data.map( (item) => {item.update = type})
        this.refs.cancelAllFinish.checked = !type
        this.refs.selectAllTodo.checked = !type
        this.props.setPropsData(data)
    }

    /**
     * 批量操作， 删除未完成或已完成的任务
     * @param {Boolean} type 
     */
    deleteAll(type) {
        const data = type ? this.props.doneData : this.props.todoData
        this.props.setPropsData(data)
        this.refs.deleteAllTodo.checked = false
        this.refs.deleteAllTodo.checked = false
    }

    /**
     * 计算未完成和已完成任务条数
     * @param {Boolean} value 
     */
    getCount(value) {
        return this.props.data.filter(item => item.update === value).length
    }

    /**
     * 单项操作， 改变未完成或已完成的状态
     * @param {Boolean} type 
     */
    changeState(i,  type) {
        let data = this.props.data
        let todoData = this.props.todoData
        let doneData = this.props.doneData
        if(type){
            let newData = doneData.splice(i, 1)
            newData[0].update = false
            todoData = [...todoData, ...newData]
        }else {
            let newData = todoData.splice(i, 1);
            newData[0].update = true
            doneData = [...doneData, ...newData]
        }
        // data = data.concat(newData);
        data = [...todoData,...doneData];
        this.props.setPropsData(data)
    }

    /**
     * 单项操作， 删除未完成或已完成的任务
     * @param {Boolean} type 
     */
    remove(i, type) {
        let data = this.props.data
        let todoData = this.props.todoData
        let doneData = this.props.doneData
        if(type && doneData) {
            doneData.splice(i, 1)
        }
        else if(todoData){
            todoData.splice(i, 1) 
        }
        data = [...todoData, ...doneData];
        this.props.setPropsData(data)
    }

    render() {

        return (
            <div className="doList container">
                <div className="doing">
                    <h2 className="left">正在进行</h2>
                    <span className="todoCount">{this.getCount(false)}</span> 
                </div>
                <div className="selectAllTodo">
                    <input id="selectAllTodo" type="checkbox" ref='selectAllTodo' onChange={this.changeAllStatus.bind(this, true)}/>
                    <p>全部添加</p>
                    <input id="deleteAllTodo" type="checkbox" ref='deleteAllTodo' onChange={this.deleteAll.bind(this, true)}/>
                    <p>全部删除</p>
                </div>
                <ul className="doingList" id=""  >
                {this.loadTodo()}
                </ul>

                <div className="finish">
                    <h2 className="left">已经完成</h2>
                    <span className="finishCount right">{this.getCount(true)}</span>
                </div>
                <div className="selectAllTodo">
                    <input id="cancelAllFinish" type="checkbox" ref='cancelAllFinish' onChange={this.changeAllStatus.bind(this, false)}/>
                    <p>全部取消</p>
                    <input id="deleteAllFinish" type="checkbox" ref='deleteAllFinish' onChange={this.deleteAll.bind(this, false)}/>
                    <p>全部删除</p>
                </div>
                <ul className="finishList" id="" >
                {this.loadDone()}
                </ul>
            </div>
        )
    }
}

