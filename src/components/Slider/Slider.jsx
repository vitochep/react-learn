import React from "react";
import Slide from './Slide.jsx'
import ButtonSlider from './../../components/Button/ButtonSlider';
import Wrapper from './Wrapper'
import Row from './Row.jsx';

class Slider extends React.PureComponent {
    state = {
        x: 0,
    };

    onPrev = (e) => {
        const currentTarget = e.currentTarget;

        this.setState(({x}) => ({
            x: x + currentTarget.nextSibling.clientWidth
        }))
    };

    onNext = (e) => {
        const currentTarget = e.currentTarget;

        this.setState(({x}) => ({
            x: x - (currentTarget.previousSibling.clientWidth)
        }))
        
        console.log('currentTarget.previousSibling.clientWidth', currentTarget.previousSibling.clientWidth)
        console.log('currentTarget.previousSibling', currentTarget.previousSibling)
        console.log('currentTarget', currentTarget)
    };

    render = () => {
        const {x} = this.state;

        return <React.Fragment>
            <ButtonSlider onClick={this.onPrev}>
                prev
            </ButtonSlider>
            <Wrapper>
                <Row propX={x}>
                    <Slide color='red'></Slide>
                    <Slide color='green'></Slide>
                    <Slide color='blue'></Slide>
                </Row>
            </Wrapper>
            <ButtonSlider onClick={this.onNext}>
                next
            </ButtonSlider>
        </React.Fragment>

    }
}

export default Slider


//    componentDidMount =()=>{
//         const sliderNode = document.getElementById('slider');
//         console.log('sliderNode', sliderNode.clientWidth);
//     }
//Таким образом можно получать и смотреть  свойства компонента, которыми потом нужно манипулдировать

//      x: x + currentTarget.nextSibling.clientWidth
//Изменение state x, прибавлением к нему currentTarget.nextSibling.clientWidth
//передаётся в виде пропса в  propX={x}

//{this.onNext} {this.onPrev}
//указывает на кастомный метод, который срабатывает по клику




//Если копки-клики за Wrapper`ом, то
//        this.setState(({x}) => ({
//             x: x - (currentTarget.previousSibling.clientWidth)
//         }))


//Если копки-клики во Wrapper, то
// this.setState(({x}) => ({
//     x: x - (currentTarget.previousSibling.childNodes[0].clientWidth)
// }))


// return <React.Fragment>
//     <ButtonSlider onClick={this.onPrev}>
//         prev
//     </ButtonSlider>
//     <Wrapper>
//         <Row propX={x}>
//             <Slide color='red'></Slide>
//             <Slide color='green'></Slide>
//             <Slide color='blue'></Slide>
//         </Row>
//     </Wrapper>
//     <ButtonSlider onClick={this.onNext}>
//         next
//     </ButtonSlider>
// </React.Fragment>