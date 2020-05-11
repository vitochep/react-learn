import React from 'react';
import styled from 'styled-components';
import Button from './Button';

//Добавляем функцию, которая возвращает isMobile
import {checkMobile} from 'components/Events';


const Wrapper = styled(Button)`
    background-color: #4bd3ef;
    margin-bottom: 40px;
    
    //Темы, записанные в функцию.
    //Записываем в переменную условие и передаём в темы
    //Из объекта можно передать через точку или [].
    //Так, как type это переменная, передаётся через [].
    //Если бы type был ключ, то было бы .type или ['type'] -  
    //Пример -  {theme.buttons.primaryDesktop.fontSize};
    ${({theme}) => {
        
        //Проверка на isMobile через функцию checkMobile(), которая isMobile возвращает
    const type = checkMobile()
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
export default class ButtonSend extends React.PureComponent {


    //Добавляем кастомное событие, по которому делается обновление resize
    componentDidMount = () => {
        window.addEventListener('onChangeResolution', (e) => {
            console.log('e.detail', e.detail)
            this.forceUpdate();
        });
    };
    render = () => {
        return <Wrapper>
            Отправить
        </Wrapper>;
    };
}