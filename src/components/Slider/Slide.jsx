import React from "react";
import styled from 'styled-components'
import Block from './Block';

const Wrapper = styled(Block)`
	width: 100%;
	height: 100%;
	float: left;
	${({ color = 'grey' }) => 'background-color: '+ color};
`;


class Slide extends React.PureComponent {

    nodeRef=null;

componentDidMount=()=>{

const width=this.nodeRef
             .parentNode
             .parentNode
            .clientWidth;

            this.nodeRef.style.width= width + 'px';
};

    render = () => {
        const { color, children } = this.props;


        return <Wrapper ref={(node)=>node && (this.nodeRef=node)}
                        color={color}>
            {children}
        </Wrapper>;
    };
};

export default Slide

//        return <Wrapper ref={(node)=>console.log(node)}>
//             {this.props.children}
//         </Wrapper>;

//Использование ref - в аргументе функции (node) Wrapper'a.
//В данном случае Wrapper  и есть один слайд. Он для того, чтобы использовать
// реальный DOM узел Slide, и произвести с ним какие-то манипуляции. Показывает себя и своё содержимое
//в виде this.props.children
// Можно использовать только с реальными компонентами. С React.Frgment работать не будет

//    return <Wrapper ref={(node)=>node && (this.nodeRef=node)}>
//Запись условия, в котором нет else или :(тернарно)
//Если node существует, в в nodeRef присваиваем node

//const width=this.nodeRef.parentNode.parentNode.clientWidth;
//У nodeRef так можно посмотреть родителей вверх по дереву DOM и вызвать необходимы параметры.
//В данном сдучае записано в переменную width
//this.nodeRef - это один слайд

//const { color, children } = this.props; - деструктуризация объекта Slide.
//Вычленяет ключи color и children. Тогда во Wrapper можно передавать только children
//Смысл в отктрывающем теге Wrapper color={color} такой же, как
//в FormWrapper name={true}react, только здесь ещё и условие для стиля.
//	${({ color = 'grey' }) => 'background-color: '+ color}; Здесь grey по умолчанию, если не передаёт
//родитель никакого цвета