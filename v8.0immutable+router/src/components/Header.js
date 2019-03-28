import React, { Component } from 'react'
import '../css/main.css'
import PropTypes from 'prop-types'
import { fromJS} from 'immutable'
import {saveData} from '../utils/utils.js'
import { Link, Route } from 'react-router-dom'
import DevTools from '../containers/DevTools';
export  class Header extends Component {
    static propTypes = {
        todoData:PropTypes.object, 
        doneData:PropTypes.object
    }
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)//只执行一次
        this.handleEnter = this.handleEnter.bind(this)
        this.addTodoHandeler = this.addTodoHandeler.bind(this)
        // this.getId = this.getId.bind(this)
    }
  /**
   * 批量添加
   * @param {Array} data 
   */
    handleClick() {
        console.time("添加10000Li");
        this.insertThousandsNewTodo()
        console.timeEnd("添加10000Li");
    }
    // getId() {
    //     let id = new Number()
    //     return id++
    // }

    /**
     * 单项添加
     * @param {} e 
     */
    handleEnter(e) {
       //keyCode无效   charCode
        if(e.charCode === 13){
            let input = e.target.value.trim()
            const value = {value: input, update: false}
            if(input === '') {
                input = ''
                e.target.placeholder = '输入不能为空'
            }else{
                this.insertNewTodo(value)  
                // this.refs.input.focus() 
            }   
            e.target.value = ''
            e.target.focus() 
        }
    }  

    addTodoHandeler() {
        let input = this.refs.input
        let inputValue = this.refs.input.value.trim()
        const value = fromJS({value: inputValue, update: false})
        if(inputValue === '') {
            input.value = ''
            input.placeholder = '输入不能为空'
        }else{
            this.insertNewTodo(value)  
            // this.refs.input.focus() 
        }   
        input.value = ''
        input.focus() 
    }

    insertNewTodo(newTodo) {
        let {todoData, doneData}  = this.props
        // const newData = data.todoData
        const data = [...todoData, newTodo, ...doneData]
        saveData(data) 
        this.props.addTodo(newTodo)
    }

    insertThousandsNewTodo() {
        // let data = {...this.props}
        let {todoData, doneData} = this.props
        // let doneData = data.doneData
        // let newData = []
        // const value = {'value':'','update':false}
        for(let i=0;i<=9999;i++) {
            // value.value = 10000
            const temp = {'value':10000,'update':false}
            todoData = [...todoData, temp]
        }
        const data = [...todoData, ...doneData]
        this.props.updateAllTodo(todoData)
        saveData(data)
    }

    render() {
        return (
            <header>
                <section  className="section">
                    <Link to='/' className="appName">TodoList</Link>
                    <span className="add">
                        {/* <form action="">导致页面刷新  */}
                        <input id="inputValue" ref='input' type="text" placeholder="添加todo" onKeyPress={this.handleEnter}  required="required"/>
                        {/* </form> */}
                    </span>
                    {/* <Link to='/devtools'  className=' DevToolsButton' >
                        DevTools
                    </Link> */}
                    <button  className='headerAdd ' onClick = {this.addTodoHandeler}>
                        添加
                    </button>
                    <button  className='headerAdd ' id='addMuch' onClick = {this.handleClick}>
                        添加一万条
                    </button>
                </section>
            </header>
        )
    }
}
