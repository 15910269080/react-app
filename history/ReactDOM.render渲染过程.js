import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );

// function formatName(user) {
//     return user.firstName + '  ' + user.lastName
// }
// const user = {
//     firstName: 'wjk',
//     lastName: '王俊凯'
// }
// const element = (
//     <h1>
//         Hello,{formatName(user)}
//     </h1>
// )
// ReactDOM.render(element,document.getElementById('root'))

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//
// setInterval(tick, 1000);

// function Welcome(props) {
//     return <h1>Hello,{props.name}</h1>
// }
// const  element = <Welcome name='wjk'/>
// ReactDOM.render(element,document.getElementById('root'))

// function Welcome(props) {
//     return <h1>Hello,{props.name}</h1>
// }
// function Wjk() {
//     return(
//         <div>
//             <Welcome name='wjk'/>
//             <Welcome name='wjk2'/>
//             <Welcome name='wjk3'/>
//         </div>
//     )
// }
// ReactDOM.render(
//     <Wjk/>,
//     document.getElementById('root')
//     )


// class Clock extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             date: new Date(),
//             name: [1,2,3],
//             name2: [4,5,6]
//         }
//     }
//     componentDidMount () {
//         this.timerID = setInterval(
//             () => this.tick()
//         ,1000)
//         this.setState({
//             name: [1,2,3,4]
//         })
//         this.setState({
//             name2: [1,2]
//         })
//     }
//     componentWillUnmount () {
//         clearInterval(this.timerID)
//     }
//     tick () {
//         this.setState({
//             date: new Date()
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello,world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 <h2>It is {this.state.name}.</h2>
//                 <h2>It is {this.state.name2}.</h2>
//             </div>
//         )
//     }
// }
// function Wjk() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <Wjk />,
//     document.getElementById('root')
// );


// 声明一个React元素
// let ele = <div><h1>Hello</h1></div>
// let ele2 = React.createElement('div',null,[React.createElement('h1',null,['Hello'])])
// console.log(ele);
// console.log(ele2);
// ReactDOM.render(ele2,document.querySelector('#root'))

// 1. history文件夹  ReactDOM.render原理实现 去看实现代码
// 2. map数组在render中的渲染
// 3 ReactDOM.render渲染的过程
// 1. React是一个用户界面的库
// 2. React元素 JSX元素 其实就是一个用js来描述界面的对象
// <div><span>hello</span></div>
ReactDOM.render(<div><span>hello</span></div>,
    document.getElementById('root'))
// 经过webpack 转译后变成下列形式
ReactDOM.render(
    React.createElement('div',null,[React.createElement('span',null,['Hello'])]),
    document.querySelector('#root'))
// 通过render方法转换成对象  插入页面中
//
// {
//     type: 'div',
//     props: {
//         children: [
//             {
//                 type: 'span',
//                 props: {
//                     children: [
//                         'hello'
//                     ]
//                 }
//             }
//         ]
//     }
// }

// React 是由 React元素
// 1. 首字母小写 凡是首字母小写的都会被认为是React元素