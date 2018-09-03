import React, {Component} from 'react'
import jsonp from 'jsonp'
export default class Suggest extends Component {
    constructor(){
        super()
        this.state = {
            words: [],
            index: -1 // 当前选中的索引
        }
    }
    handleChange= (event) =>{
        let wd = event.target.value;
        this.wd = wd
        jsonp('http://www.baidu.com/su?wd='+wd,{
            param: 'cb'
        }, (err,data) => {
            console.log(data);
            this.setState({words:data.s})
        });
    }
    handleKeyDown = (event) => {
        let code = event.keyCode
        console.log(code);
        if (code == 38 || code == 40) {
            let index = this.state.index
            if (code == 38) {
                index--
                if (index==-2){
                    index = this.state.words.length -1
                }
            } else if (code ==40) {
                index++
                if (index==this.state.words.length){
                    index = -1
                }
            }
            this.setState({
                index:index
            })
        }else if (code == 13) {
            window.location.href = 'http://www.baidu.com/s?wd=' + event.target.value
        }
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" value={this.state.index==-1?this.wd:this.state.words[this.state.index]} className='form-control' onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((item,index)=>(
                                            <li  className={'list-group-item '+ (index===this.state.index?'active':'')} key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // constructor(){
    //     super()
    //     this.state = {
    //         words: [],
    //         index: -1
    //     }
    // }
    // handleChange = (event) => {
    //     let wd = event.target.value
    //     // 缓存wd
    //     this.wd = wd
    //     jsonp('http://www.baidu.com/su?wd='+wd,{
    //         param: 'cb'
    //     },(error,data) => {
    //         console.log(data)
    //         this.setState({
    //             words:data.s
    //         })
    //     })
    // }
    // handleKeyDown = (event) => {
    //     let keyCode = event.keyCode
    //     let index = this.state.index
    //     console.log(keyCode)
    //     if (keyCode==38||keyCode==40){
    //         if(keyCode==38){
    //             index--
    //             if(index==-2){
    //                 index=this.state.words.length-1
    //             }
    //         } else if(keyCode == 40){
    //             index++
    //             if (index==this.state.words.length){
    //                 index=-1
    //             }
    //         }
    //         this.setState({
    //             index:index
    //         })
    //     } else if (keyCode == 13) {
    //         window.location.href = 'http://www.baidu.com/s?wd=' + event.target.value
    //     }
    // }
    // render() {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-sm-8 col-sm-offset-2">
    //                     <div className="panel panel-default">
    //                         <div className="panel-heading">
    //                             <input type="text" className='form-control' value={this.state.index==-1?this.wd:this.state.words[this.state.index]} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
    //                         </div>
    //                         <div className="panel-body">
    //                             <ul className='list-group'>
    //                                 {
    //                                     this.state.words.map((word,index)=>(
    //                                         <li className={'list-group-item '+(index===this.state.index?'active':'') } key={index}>{word}</li>
    //                                     ))
    //                                 }
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}