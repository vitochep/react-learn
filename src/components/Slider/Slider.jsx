import React from "react";
import Slide from './Slide.jsx'
import Wrapper from './Wrapper'
import Row from './Row.jsx';

class Slider extends React.PureComponent {

    componentDidMount =()=>{
        const sliderNode = document.getElementById('slider');
        console.log('sliderNode', sliderNode.clientWidth);
    };
    render = () => {
        return <Wrapper id='slider'>
            <Row >
            <Slide></Slide>
            <Slide></Slide>
            <Slide></Slide>
            </Row>
        </Wrapper>

    }
}

export default Slider


//    componentDidMount =()=>{
//         const sliderNode = document.getElementById('slider');
//         console.log('sliderNode', sliderNode.clientWidth);
//     }
//Таким образом можно получать и смотреть  свойства компонента, которыми потом нужно манипулдировать