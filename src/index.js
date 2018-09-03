import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import Suggest from './components/Suggest'
import MessageBox from './components/MessageBox'
import Slider from './components/Slider'
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
// 11 百度搜索框demo 组件components/Suggest
// ReactDOM.render(<Suggest/>,document.getElementById('root'))
// 12 留言板demo 组件components/MessageBox
// ReactDOM.render(<MessageBox/>,document.querySelector('#root'))
// 13 轮播图 无缝轮播 组件compnents/Silder

/*
* items图片资源  数组里面装对象
* speed 图片的轮播速度
* delay 延时时间，多长时间轮播一次
* pause 暂停，如果它为true ，则当鼠标划过的时候自动停止轮播
* autoplay 当页面加载完成后自动开始轮播
* dots 是显示点状导航
* arrows 是否显示左右的剪头导航
* */
let IMAGE_DATA = [
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
]
ReactDOM.render(<Slider
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dota={true}
        arrows={true}
        />,
    document.querySelector('#root'))


