import React, {Component} from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './MessageBox.css'
export default class MessageBox extends Component{
    constructor () {
        super();
        this.state = {
            // 设置了默认值
            messages:[
                {username:'wjk',content:'sadf',createAt:new Date()}
            ]
        }
    }
    addMessage = (message) => {
        let messages = [...this.state.messages,message]
        this.setState({
            messages
        })
    }
    removeMessage = (index) => {
        // 删除数组元素，返回值是被删除的元素
        // this.state.messages.splice(index,1)
        // this.setState({
        //     messages:this.state.messages
        // })
        //解构解析处理
        this.state.messages.splice(index,1)
        this.setState({
            messages:[...this.state.messages]
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className='text-center'>欢迎来到wjk留言板</h2>
                            </div>
                            <div className="panel-body">
                                <MessageList messages={this.state.messages} removeMessage={this.removeMessage}/>
                            </div>
                            <div className="panel-footer">
                                <MessageForm addMessage={this.addMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
