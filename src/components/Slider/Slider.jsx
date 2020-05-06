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

        this.setState((currentState) => {
            return currentState.x < 0
                ? {
                    x: currentState.x + currentTarget.nextSibling.clientWidth
                }
                : currentState
        })
    };

    onNext = (e) => {
        const currentTarget = e.currentTarget;

        this.setState((currentState) => {
            const newValue =  currentState.x - currentTarget.previousSibling.clientWidth;
            const rowWidth = -currentTarget.previousSibling.childNodes[0].clientWidth;

            console.log('newValue', newValue)
            console.log('rowWidth', rowWidth)

            return newValue > rowWidth
                ? {
                    x: newValue
                }
                : currentState

        })

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

// x: x + currentTarget.nextSibling.clientWidth
//Изменение state x, прибавлением к нему currentTarget.nextSibling.clientWidth
//передаётся в виде пропса в  propX={x}

//{this.onNext} {this.onPrev}
//указывает на кастомный метод, который срабатывает по клику


//Если кнопки-клики за Wrapper`ом, то
//        this.setState(({x}) => ({
//             x: x - (currentTarget.previousSibling.clientWidth)
//         }))
//Потому, что Wrapper имеет ширину экрана равную одному слайду, поэтому
// previousSibling.clientWidth - это соседний (следующий)
// элемент от onPrev, ширина которого  - один слайд, т.е. 100% ширины экрана
//Если при таком расположении компонентов написать previousSibling.clientWidth.childNodes[0],
//то получим Row, равную по ширине 300%, если там 3 слайда.


//Если копки-клики во Wrapper, то
// this.setState(({x}) => ({
//     x: x - (currentTarget.previousSibling.childNodes[0].clientWidth)
// }))


/// x: x - (currentTarget.previousSibling.clientWidth)
// В состояние x записывается новое значение этого же 'x'

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


// Функция с аргументом текущего состояния возвращает условие
//Если текущее состояние x<0, то менять его ширину (x: currentState.x + currentTarget.nextSibling.clientWidth)
//currentState - это объект, в котором ключ x
// onPrev = (e) => {
//     const currentTarget = e.currentTarget;
//
//     this.setState((currentState) => {
//         return currentState.x < 0
//             ? {
//                 x: currentState.x + currentTarget.nextSibling.clientWidth
//             }
//             : currentState
//     })
// };



// this.setState((currentState) => {
//     const newValue =  currentState.x - currentTarget.previousSibling.clientWidth;
//     const rowWidth = -currentTarget.previousSibling.childNodes[0].clientWidth;
//
//     console.log('newValue', newValue)
//     console.log('rowWidth', rowWidth)
//
//     return newValue > rowWidth
//         ? {
//             x: newValue
//         }
//         : currentState
//
// })

//newValue -  слайд смещается влево. currentState становится меньше 0.
//rowWidth - ширина всех 3-х(в данном примере) слайдов. С минусом (например -4266), потому что
// по условию

//     return newValue > rowWidth // если смещённый слайд больше rowWidth,
//                                   т.е. например (-1422)>(-4266)
//         ? {
//             x: newValue            то выводить новое значение
//         }
//         : currentState              в противном случае текущее состояние