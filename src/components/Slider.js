import React,{Component} from 'react'
import './Slider.css'
import SliderItems from './SliderItems'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'
export default class Slider extends Component {
    constructor(){
        super()
        this.state = {
            index:0
        }
    }
    // 传入步长，得到新的index值
    turn = (step) => {
        let index =  this.state.index + step
        // 判断向右移动
        if(index<0){
            this.$slider.style.left = -500 * this.props.items.length + 'px'
            this.$slider.style.transitionDuration = '0s'
            setTimeout(()=>{
                index = this.props.items.length-1
                this.$slider.style.transitionDuration = this.props.speed + 's'
                this.setState({index})
            })
            return
        }
        // 判断向左移动
        if (index>this.props.items.length){
            this.$slider.style.left = 0
            this.$slider.style.transitionDuration =  '0s'
            // 设置setTimeout防止动画合并
            setTimeout(()=>{
                index = 1
                this.$slider.style.transitionDuration = this.props.speed + 's'
                this.setState({index})
            })
            return
        }
        this.setState({
            index
        })
    }
    go = () => {
        this.timeID = setInterval(()=>{
            this.turn(1)
        },this.props.delay*1000)
    }
    componentDidMount () {
        this.$slider = document.querySelector('.sliders')
        if (this.props.autoplay){
            this.go()
        }
    }
    render(){
        return (
            <div className='slider-wrapper'
                 onMouseOver={()=>{clearInterval(this.timeID)}}
                 onMouseOut={()=>{this.go()}}>
                <SliderItems items={this.props.items} speed={this.props.speed} index={this.state.index} />
                <SliderArrows turn={this.turn}/>
                <SliderDots items={this.props.items} turn={this.turn} index={this.state.index}/>
            </div>
        )
    }
}