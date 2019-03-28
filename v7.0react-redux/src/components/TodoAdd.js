import React from 'react'
import PropTypes from 'prop-types'
import { saveData } from '../utils/utils.js';
let _pointer1 = null;
let _pointer2 = null;
let _index = 0;
export  class TodoAdd extends React.Component{
    static propTypes = {
        todoData:PropTypes.array, 
        doneData:PropTypes.array
    }
    constructor(props){
        super(props)
        this.state = {IsEdit:false}
        this.removeHandle = this.removeHandle.bind(this, this.props.index, this.props.isDoneList)
        this.changeHandle = this.changeHandle.bind(this, this.props.index, this.props.isDoneList)
        this.editHandle = this.editHandle.bind(this, this.props.index)
        this.exchange = this.exchange.bind(this)
    }

    /**
     * 单项删除事件
     * @param {} e 
     */
    removeHandle(i, isDoneList) {
        const {todoData, doneData, deleteDoneData, deleteTodoData} = this.props
        let _data = isDoneList ? doneData : todoData
        // 等价const doneData = this.props.doneData
        if (isDoneList) {
            _data && deleteDoneData(i)
        } else {
            _data && deleteTodoData(i)
        }
        const data = [..._data.slice(0, i), ..._data.slice(i+1)] 
        saveData(data)
    }

    /**
     * 单项改变完成或未完成状态
     * @param {} e 
     */
    changeHandle(i, isDoneList) {
        let data = {...this.props}
        const {addDone, addTodo, deleteTodoData, deleteDoneData} = this.props
        let _data = isDoneList ? data.doneData[i] : data.todoData[i]
        if(isDoneList){
            _data.update = false  
            addTodo(_data)
            deleteDoneData(i)
        }else {
            _data.update = true
            addDone(_data)
            deleteTodoData(i)
        }
        saveData([...data.todoData, ...data.doneData])
    }
    

    /**
     * 编辑事件
     * @param {} e 
     */
    editHandle(i, e) { 
        let data = {...this.props}
        let {todoData, doneData} = data
        const {updateTodo} = this.props
        const p = e.target.innerHTML
        const edit = this.refs.input
        // const edit = this.refs.edit
        // const edit = this.refs[`edit`+i]
        
        this.setState({IsEdit:true},()=>{ //解决setState异步
            edit.value = p
            edit.setSelectionRange(0, edit.value.length)
            edit.focus()
        })
    
        edit.onblur = () => {
            if(!edit.value){
                alert('输入不能为空')
                this.setState({IsEdit:false})
            }else {
                todoData[i].value = edit.value
                updateTodo(i,  todoData[i])
                saveData([...todoData, ...doneData])
                // saveData(data)
                this.setState({IsEdit:false})
            }
        }
    }

    /**
     * 拖拽事件
     */
    ondrapstart = (event) => {
        event.preventDefault();
    }
    

    drag = (index,  event) => {
        _pointer1 = event.target;
        _index = index;
        event.dataTransfer.setData('Text/html', _pointer1);
    }
    exchange(content1, content2) {
        let temp
        temp = content1
        content1 = content2
        content2 = temp
    }
    // item1变成li对象
    drop = (index,  event) => {
        const {updateTodo}= this.props
        let data = {...this.props}
        let todoData = data.todoData
        let doneData = data.doneData
        let tempData = '';
        event.preventDefault();
        
        // this.exchange(todoData[_index].value, todoData[index].value)
        tempData = todoData[_index].value;
        todoData[_index].value = todoData[index].value;
        todoData[index].value = tempData;

        _pointer2 = event.target
        _pointer1 = _pointer2;
        _pointer2 = event.dataTransfer.getData('Text/html');

        saveData([...todoData, ...doneData])
        updateTodo(_index, todoData[_index])
        updateTodo(index, todoData[index])
    }
    

    render() {
        let inputStyle = {
            display: this.state.IsEdit ? 'block' : 'none' 
        }
        let pStyle = {
            display: this.state.IsEdit ? 'none' : 'block' 
        }
        if(this.props.isTodo) {
            return (
                <li id={`t${this.props.index}`} draggable='true' onDragStart={(e)=>this.drag(this.props.index, e)} onDrop={(e)=>this.drop(this.props.index, e)} onDragOver={this.ondrapstart.bind(this)}> 
                    <div className='bind'>
                        <input  type='checkbox' ref={`done${this.props.index}`} defaultChecked={false}  onChange={ this.changeHandle} />
                        <p id={`t${this.props.index}`} onClick={this.editHandle} style={pStyle} ref='p'>{this.props.value}</p>
                    </div>
                    <input id={`t${this.props.index}` } style={inputStyle} ref='input' />
                    <button onClick={ this.removeHandle} title='删除' >-</button>
                </li>
            )
        }
        else {
            return (
                <li id={`d${this.props.index}`}> 
                    <div className='bind'>
                        <input  type='checkbox'  defaultChecked={true}  onChange={ this.changeHandle} />
                        <p id={`d${this.props.index}`}  >{this.props.value}</p>
                    </div>
                    <button onClick={this.removeHandle} title='删除' >-</button>
                </li>
            )
        }
    }  
}