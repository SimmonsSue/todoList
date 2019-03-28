import React, { Component } from 'react';
import '../css/main.css'

export  class Header extends Component {
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
    handleClick(data) {
        console.time("添加10000Li");
        const len = data.length
        let newData = []
        const value = {'value':'','update':false}
        for(let i=0;i<=9999;i++) {
            value.value = len+i
            const temp = [value]
            newData = [...newData, ...temp]
        }
        newData = [...data, ...newData]
        this.props.setPropsData(newData)
        // this.forceUpdate()
        console.timeEnd("添加10000Li");
    }
    // getId() {
    //     let id = new Number()
    //     return id++
    // }

    /**
     * 单项添加
     * @param {键盘事件} e 
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
                this.props.onEnterPress(value)  
                this.refs.input.focus()
            } 
            // this.refs.input.value = 'hello'
        }
        // this.props.setNoUpdateHeader()
    }  

    render() {
        return (
            <header>
                <section  className="section">
                    <span className="appName">TodoList</span>
                    <span className="add">
                        {/* <form action=""> */}
                            <input id="inputValue" ref='input' type="text" placeholder="添加todo" onKeyPress={this.handleEnter}  required="required"/>
                        {/* </form> */}
                    </span>
                        <button  className='headerAdd ' id='addMuch' onClick = {this.handleClick.bind(this, this.props.data)}>
                            添加一万条
                        </button>
                </section>
            </header>
        )
    }
}