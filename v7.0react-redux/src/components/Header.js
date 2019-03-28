import React, { Component } from 'react';
import '../css/main.css'
import PropTypes from 'prop-types'
import {saveData} from '../utils/utils.js'
export  class Header extends Component {
    static propTypes = {
        todoData:PropTypes.array, 
        doneData:PropTypes.array
    }
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)//只执行一次
        this.handleEnter = this.handleEnter.bind(this)
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
    insertNewTodo(newTodo) {
        let data  = {...this.props}
        // const newData = data.todoData
        data = [...data.todoData, newTodo]
        //用push影响到了state
        saveData(data) 
        this.props.addTodo(newTodo)
    }
    insertThousandsNewTodo() {
        let data = {...this.props}
        let todoData = data.todoData
        let doneData = data.doneData
        let newData = []
        // const value = {'value':'','update':false}
        for(let i=0;i<=9999;i++) {
            // value.value = 10000
            const temp = {'value':10000,'update':false}
            todoData = [...todoData, temp]
        }
        newData = [...todoData, ...doneData]
        this.props.updateAllTodo(todoData)
        saveData(newData)
    }

    render() {
        return (
            <header>
                <section  className="section">
                    <span className="appName">TodoList</span>
                    <span className="add">
                        {/* <form action="">导致页面刷新  */}
                        <input id="inputValue" ref='input' type="text" placeholder="添加todo" onKeyPress={this.handleEnter}  required="required"/>
                        {/* </form> */}
                    </span>
                        <button  className='headerAdd ' id='addMuch' onClick = {this.handleClick}>
                            添加一万条
                        </button>
                </section>
            </header>
        )
    }
}
