import React, {Component} from 'react'
let item1 = null;
let item2 = null;
let index1 = 0;
export default class TodoAdd extends React.Component{
    constructor(props){
        super(props)
        this.state = {IsEdit:false}
        this.removeHandle = this.removeHandle.bind(this)
        this.changeHandle = this.changeHandle.bind(this)
        this.editHandle = this.editHandle.bind(this, this.props.index)
    }
    // componentWillMount() {
    //     setTimeout(()=> {
    //       this.setState({
    //         IsEdit: false
    //       })
    //     }, 0)
    //   }
    /**
     * 单项删除事件
     * @param {} e 
     */
    removeHandle(e) {
        this.props.remove(this.props.index, this.props.type)
    }

    /**
     * 单项改变完成或未完成状态
     * @param {} e 
     */
    changeHandle(e) {
        this.props.changeState(this.props.index, this.props.type)
    }

    /**
     * 编辑事件
     * @param {} e 
     */
    editHandle(i, e) { 
        let data = this.props.data
        let todoData = this.props.todoData
        let doneData = this.props.doneData
        const p = e.target.innerHTML
        // const edit = this.refs.edit
        // const edit = this.refs[`edit`+i]
        const edit = this.refs.input
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
                const newData = todoData.splice(i, 1)[0]
                newData.value = edit.value
                todoData.splice(i, 0, newData)
                data = [...todoData, ...doneData]
                this.props.setPropsData(data)
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
        item1 = event.target;
        index1 = index;
        event.dataTransfer.setData('Text/html', item1);
    }
    // item1变成li对象
    drop = (index,  event) => {
        event.preventDefault();
        let data = this.props.data
        let todoData = this.props.todoData
        let doneData = this.props.doneData
        let tempData = '';
        item2 = event.target
        tempData = todoData[index1].value;
        todoData[index1].value = todoData[index].value;
        todoData[index].value = tempData;
        item1 = item2;
        item2 = event.dataTransfer.getData('Text/html');
        data = [...todoData, ...doneData]
        this.props.setPropsData(data)
    }
    
    render() {
        let inputStyle = {
            display: this.state.IsEdit ? 'block' : 'none' 
        }
        let pStyle = {
            display: this.state.IsEdit ? 'none' : 'block' 
        }
        if(this.props.loadTodo) {
            return (
                <li id={`t${this.props.index}`} draggable='true' onDragStart={(e)=>this.drag(this.props.index, e)} onDrop={(e)=>this.drop(this.props.index, e)} onDragOver={this.ondrapstart.bind(this)}> 
                    <div className='bind'>
                        <input  type='checkbox' ref={`done${this.props.index}`} defaultChecked={false}  onChange={this.changeHandle} />
                        <p id={`t${this.props.index}`} onClick={this.editHandle} style={pStyle} ref='p'>{this.props.value}</p>
                    </div>
                    <input id={`t${this.props.index}` } style={inputStyle} ref='input' />
                    <button onClick={this.removeHandle} title='删除' >-</button>
                </li>
            )
        }
        else {
            return (
                <li id={`d${this.props.index}`}> 
                    <div className='bind'>
                        <input  type='checkbox'  defaultChecked={true}  onChange={this.changeHandle} />
                        <p id={`d${this.props.index}`}  >{this.props.value}</p>
                    </div>
                    <button onClick={this.removeHandle} title='删除' >-</button>
                </li>
            )
        }
    }
}
