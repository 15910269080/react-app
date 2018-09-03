import React, {Component} from 'react'
export default class MessageForm extends Component{
    handleSubmit = (event) => {
        event.preventDefault()
        let username = this.username.value
        let content = this.content.value
        this.props.addMessage({username,content,createAt:new Date()})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className='control-label' htmlFor='username'>
                        用户名:
                    </label>
                    <input type="text" className='form-control' ref={ref=>this.username = ref}/>
                </div>
                <div className="form-group">
                    <label className='control-label' htmlFor='content'>
                        内容:
                    </label>
                    <input type="text" className='form-control' ref={ref=>this.content = ref}/>
                </div>
                <div className="form-group">
                   <button className='btn btn-primary'>
                       发表
                   </button>
                </div>
            </form>
        )
    }
}