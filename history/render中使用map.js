import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 2. map数组在render中的渲染
let names = ['wjk','','react']
let style = {backgroundColor:'pink'}
ReactDOM.render(<div>
    {
        names.map(function (item,index) {
            return item.length>0?<span style={style} key={index}>{item}</span>:null
        })
    }
</div>,document.getElementById('root'))