import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. history文件夹  ReactDOM.render原理实现 去看实现代码
// 2. map数组在render中的渲染
// 3 ReactDOM.render渲染的过程
// 4.组件定义的2种方式（1函数定义）

// 组件的两种定义方式，以及他们之前的区别

// 计时器 Clock
// 函数方式声明的组件是静态的，是不能改变的
// let Clock = function () {
//     return (
//         <h1><span>wjk</span><span>{new Date().toLocaleString()}</span></h1>
//     )
// }
// setInterval(function () {
//     ReactDOM.render(<Clock/>,document.querySelector('#root'))
// },1000)
// 2. 通过类来声明组件  类需要继承自Component
class Clock extends React.Component{
    constructor(){
        super();
        // 自定义组件状态对象
        // 状态可以用来存放组件内部一些变化的值，状态只能由组件内部初始化，组件内部来改变
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    // 生命周期函数 组件挂载完成
    componentDidMount () {
        // 每隔一秒钟会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法进行重新渲染
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    // render 方法指的是改组件将要如何渲染，一定要返回一个
    // React元素， 而且只能返回一个React元素
    render() {
        return <h1><span>wjk</span><span>{this.state.time}</span></h1>
    }
}
ReactDOM.render(<Clock/>,document.querySelector('#root'))