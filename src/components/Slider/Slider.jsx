import React from "react";
import Slide from './Slide.jsx'
import ButtonSlider from './../../components/Button/ButtonSlider';
import Wrapper from './Wrapper'
import Row from './Row.jsx';

class Slider extends React.PureComponent {
    state = {
        x: 0,
    };

    onClick = (e) => {
        const currentTarget = e.currentTarget;

        this.setState(({x}) => ({
            x: x - currentTarget.previousSibling.clientWidth
        }))
    }

    render = () => {
        const {x} = this.state;

        return <React.Fragment>
            <Wrapper>
                <ButtonSlider onClick={this.onClick}>
                    prev
                </ButtonSlider>
                <Row x={x}>
                    <Slide color='red'></Slide>
                    <Slide color={'green'}></Slide>
                    <Slide color={'blue'}></Slide>
                </Row>
                <ButtonSlider onClick={this.onClick}>
                    next
                </ButtonSlider>
            </Wrapper>
        </React.Fragment>

    }
}

export default Slider


//    componentDidMount =()=>{
//         const sliderNode = document.getElementById('slider');
//         console.log('sliderNode', sliderNode.clientWidth);
//     }
//Таким образом можно получать и смотреть  свойства компонента, которыми потом нужно манипулдировать