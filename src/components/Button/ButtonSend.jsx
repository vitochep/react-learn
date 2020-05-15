import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {connect} from 'react-redux'


const Wrapper = styled(Button)`
    background-color: #4bd3ef;
    margin-bottom: 40px;
    
//Передаём во Wrapper tablet и mobile и делаем проверку 
    ${({tablet, mobile, theme}) => {
    const type = tablet
        ? 'primaryMobile'
        : mobile
        ? 'primaryMobile'
        : 'primaryDesktop'
    return `
       width: ${theme.buttons[type].width}; 
    	font-size: ${theme.buttons[type].fontSize};
    	line-height: ${theme.buttons[type].lineHeight};
    	height: ${theme.buttons[type].height};
    `
}}

    &:hover{
     box-shadow: 0 2px 10px #4bd3ef;
     transition: 0.4s ease;
    }
`;

//Здесь PureComponent для того, чтобы когда происходил resize
//экрана в пределах, например, мобилки, то render не отрисовывал true на true
 class ButtonSend extends React.PureComponent {

    render = () => {
        const {tablet, mobile} = this.props;
        console.log('this.props у ButtonSend', this.props);
        return <Wrapper
        mobile={mobile}
        tablet={tablet}>
            Отправить
        </Wrapper>;
    };
}

//Подключили компонент ButtonSend к хранилищу
// и пробрасываем в ButtonSend всё, что хранится в state - mobile и tablet
//их потом использовать в рендере в качестве параметров const {tablet, mobile} = this.props;
//Этот state по технологии redux должен хранится в action
export default connect((state)=>({
...state.resolution
}))(ButtonSend);