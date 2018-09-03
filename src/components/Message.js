import React, {Component} from 'react'
export default class Message extends Component{
    render() {
        // 结构解析
        let {message,index}=this.props
        return (
            <li className='list-group-item' key={index}>
                {message.username}:{message.content}
                <button className='btn btn-danger btn-sm' onClick={()=>{this.props.removeMessage(index)}}>删除</button>
                <span className='float-right'>{message.createAt.toLocaleString()}</span>
            </li>
        )
    }
}