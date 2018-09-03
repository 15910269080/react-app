import React from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. history文件夹  ReactDOM.render原理实现 去看实现代码
// 2. map数组在render中的渲染
// 3 ReactDOM.render渲染的过程
// 4.组件定义的2种方式（1函数定义）

// 组件的两种定义方式，以及他们之前的区别

// 1. 组件定义的第一种方法是函数，参数是属性对象
// {msg:'hello',id:'5'}
//组件的首字母一定是大5写
//组件定义完后可以向React元素一样使用
// 组件的渲染过程
    // （1）封装props对象
    //  (2)调用组件函数，得到返回的React元素
   // （3）ReactDOM把React元素转换成真实的DOM元素并且插入到目标容器内部
let Message = (props) => {
    return (
        <div>
            <h1 style={props.style}>{props.msg}</h1>
            <h1>{props.id}</h1>
        </div>
    )
}
// 或者是结构赋值的方法
// let Message = ({msg,id}) => {
//     return (
//         <div>
//             <h1>{msg}</h1>
//             <h1>{id}</h1>
//         </div>
//     )
// }
render(<Message msg='Hello' id='5' style={{color:'red'}}/>,document.querySelector('#root'))