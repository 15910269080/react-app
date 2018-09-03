import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

// 1. history文件夹  ReactDOM.render原理实现 去看实现代码
// 2. map数组在render中的渲染
// 3 ReactDOM.render渲染的过程
// 4.组件定义的2种方式（1函数定义）
// 5. 组件类继承定义
// 6. React属性状态
// 7. 受控组件 受状态控制 Input Sum
// 8. 非受控组件 Sum
// 9. 复合组件
// 10 组件的生命周期函数

// 1.组件的完整生命周期
// 2.一些代码的编写的顺序
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            num: 0
        }
    }
    // 组件将要挂载
    componentWillMount () {
        console.log('1.componentWillMount 组件将要挂载')
    }
    handleClick = () => {
        // setState是异步的
        this.setState({
            num: this.state.num + 1
        },()=>{
            console.log(this.state);
        })
    }
    shouldComponentUpdate(newPrps,newState){
        console.log('4.shouldComponentUpdate 组件是否要进行更新')
        if (newState.num % 5 ===0) {
            return true
        } else {
            return false
        }
    }
    componentWillUpdate () {
        console.log('5.componentWillUpdate 组件将要更新')
    }
    componentDidUpdate () {
        console.log('6.componentDidUpdate 组件更新完成')
    }
    render () {
        console.log('2.render 组件挂载')
        return (
            <div style={{border:'1px solid red',padding:5}}>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>+</button>
                <SubCounter num={this.state.num}/>
            </div>
        )
    }
    componentDidMount(){
        console.log('3.componentDidMount 组件挂载完成')
    }
}
class SubCounter extends React.Component{
    // 组件将要接受到新的属性对象
    componentWillReceiveProps(newProps){
        console.log('SubCounter componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps,newState) {
        console.log('SubCounter shouldComponentUpdate')
        if (newProps.num%3===0){
            return true
        } else {
            return false
        }
    }
    render() {
        console.log('SubCounter render')
        return (
            <div style={{border:'1px solid blue'}}>
                <p>{this.props.num}</p>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'))