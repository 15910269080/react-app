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
// 7. 受控组件 受状态控制 Input Sum
class Sum extends React.Component{
    constructor(){
        super()
        this.state = {
            a:0,
            b:0,
            result:0
        }
    }
    handleChangeA = (event) => {
        this.setState({
            a:parseInt(event.target.value),
            result: parseInt(event.target.value) + this.state.b
        })
    }
    handleChangeB = (event) => {
        console.log(event.target);
        this.setState({
            b:parseInt(event.target.value),
            result: parseInt(event.target.value) + this.state.a
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.a} onChange={this.handleChangeA}/>+
                <input type="text" value={this.state.b} onChange={this.handleChangeB}/>=
                <input type="text" value={this.state.result}/>
            </div>
        )
    }
}
ReactDOM.render(<Sum/>,document.querySelector('#root'))