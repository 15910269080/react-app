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
class Person extends React.Component{
    constructor () {
        super()
        this.state = {
            happy: true
        }
    }
    // 默认属性对象 -- 初始化props中的值
    static defaultProps = {
        name: '无名'
    }
    // 如果定义组件的时候希望传入组件的属性有类型和时候必填的限制 --- 校验
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    handleClick = () => {
        // 修改状态  重新render
        this.setState({
            happy:!this.state.happy
        })
    }
    render () {
        let heart = this.state.happy ? '开心' : '难过'
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{heart}</p>
                <button onClick={this.handleClick}>改变</button>
            </div>
        )
    }
}
ReactDOM.render(<Person name='wjk' age= {12} />,document.querySelector('#root'))