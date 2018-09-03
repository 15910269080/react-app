import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'

// 1. history文件夹  ReactDOM.render原理实现 去看实现代码
// 2. map数组在render中的渲染
// 3 ReactDOM.render渲染的过程
// 4.组件定义的2种方式（1函数定义）
// 5. 组件类继承定义
// 6. React属性状态
// 7. 受控组件 受状态控制
class Input extends React.Component{
    constructor() {
        super()
        this.state = {
            val: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            val: event.target.value
        })
    }
    render () {
        return (
            <div>
                <p>{this.state.val}</p>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
            </div>
        )
    }
}
ReactDOM.render(<Input/>,document.querySelector('#root'))