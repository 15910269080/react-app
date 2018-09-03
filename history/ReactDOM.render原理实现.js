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

let ele2 = React.createElement('div',{className:'red',id:1},['Hello',React.createElement('span',{className:'blue',id:2},['adsfd'])])
console.log(ele2);
// 最终的React元素是这样的
let eleObj = {
    type: 'div',
    props: {
        className:'red',
        id: 1,
        children: ['Hello',{
            type: 'span',
            props: {
                className:'blue',
                id: 2,
                children:['adsfd']
            }
        }]
    }
}
function render(eleObj, container) {
    let {type, props} = eleObj
    let ele = document.createElement(type)
    for (let attr in props) {
        if (attr == 'children') {
            props[attr].forEach(function (item) {
                if(typeof item == 'string'){
                    let textNode = document.createTextNode(item)
                    ele.appendChild(textNode)
                } else {
                    render(item,ele)
                }
            })

        } else if (attr = 'className') {
            ele.setAttribute('class',props[attr])
        } else {
            ele.setAttribute(attr, props[attr])
        }
    }
    container.appendChild(ele)
}
render(eleObj,document.querySelector('#root'))