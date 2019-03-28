import React from 'react'
import {ShowList} from './ShowList.js'
import {Header} from './Header.js'
// import * as utils from '../utils/utils.js'
import { getTodoData, getDoneData, loadData, saveData } from '../utils/utils'

export class EnterUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data:loadData(), shouldUpdateHeader:true, shouldUpdateList:true}
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
                <ShowList 
                    data={this.state.data}   
                    setPropsData={this.setPropsData}
                    todoData={todoData} 
                    doneData={doneData}
                />
            </div>
        )
    }
}