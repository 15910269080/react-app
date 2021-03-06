import React, {Component} from 'react'
export default class SliderItems extends Component{
    render() {
        let style = {
            left: this.props.index*-500,
            transitionDuration: this.props.speed + 's'
        }
        return (
            <ul className='sliders' style={style}>
                {
                    this.props.items.map((item,index)=>(
                        <li className='slider'  key={index}>
                            <img src={item.src}/>
                        </li>
                    ))
                }
                <li className='slider'  key={this.props.items.length}>
                    <img src={this.props.items[0].src}/>
                </li>
            </ul>
        )
    }
}