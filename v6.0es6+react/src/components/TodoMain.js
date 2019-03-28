import React from 'react'
import {TodoList} from './TodoList.js'
import {Header} from './Header.js'
// import * as utils from '../utils/utils.js'
import { getTodoData, getDoneData, loadData, saveData } from '../utils/utils'

export class TodoMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data:loadData()}
        this.handleEnterPress = this.handleEnterPress.bind(this)
        this.setPropsData = this.setPropsData.bind(this)
    }
    /**
     * 键盘输入数据
     * @param {Object} value 
     */
    handleEnterPress(value) {
        const data = this.state.data
        data.push(value)
        this.setPropsData(data)
    }
    /**
     * 保存数据到localStorage, 并更新state
     * @param {Array} data 
     */
    setPropsData(data) {
        saveData(data)
        this.setState({data:data})
    }

    render() {
        let todoData = getTodoData(this.state.data)
        let doneData = getDoneData(this.state.data)
        return (
            <div className='content'>
                <Header 
                    onEnterPress={this.handleEnterPress}  
                    setPropsData={this.setPropsData} 
                    data={this.state.data} 
                    todoData={todoData} 
                    doneData={doneData}
                />
                <TodoList 
                    data={this.state.data}   
                    setPropsData={this.setPropsData}
                    todoData={todoData} 
                    doneData={doneData}
                />
            </div>
        )
    }
}