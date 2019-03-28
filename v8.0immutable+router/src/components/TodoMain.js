import React, { Component } from 'react'
import  HeaderWrapped from '../containers/HeaderWrapped.js'
import TodoListWrapped from '../containers/TodoListWrapped.js'
export default class TodoMain extends  Component {  
    render() {
        return (
            <div className='content'>
                <HeaderWrapped/>
                <TodoListWrapped/>
                {/* {this.props.children}    */}
            </div>
        )
    }
}

