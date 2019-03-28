import React, { Component } from 'react';
import './App.css';
import './css/main.css';
import TodoMain from './components/TodoMain.js';
class App extends Component {

  render() {
    return (
    <div>
      <TodoMain />
      {/* {this.props.children}    */}
    </div>
      
    );
  }
}

export default App;
