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
// 8. 非受控组件 Sum
// class Sum extends React.Component{
//     handleChange = () => {
//         console.log(this.refs)
//         let a = parseInt(this.refs.a.value||0)
//         let b = parseInt(this.refs.b.value||0)
//         this.refs.result.value = a+b
//     }
//     render() {
//         return (
//             <div onChange={this.handleChange}>
//                 <input type="text" ref='a' />+
//                 <input type="text" ref='b' />=
//                 <input type="text" ref='result'/>
//             </div>
//         )
//     }
// }
// 第二种方式写
class Sum extends React.Component{
    handleChange = () => {
        console.log(this.refs)
        let a = parseInt(this.a.value||0)
        let b = parseInt(this.b.value||0)
        this.result.value = a+b
    }
    render() {
        // ref等于一个函数，表示当元素被挂载到页面中之后会调用此函数，并传入渲染后的DOM元素
        return (
            <div onChange={this.handleChange}>
                <input type="text" ref={ref=>this.a=ref} />+
                <input type="text" ref={ref=>this.b=ref} />=
                <input type="text" ref={ref=>this.result=ref}/>
            </div>
        )
    }
}
ReactDOM.render(<Sum/>,document.querySelector('#root'))