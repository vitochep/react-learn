import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Wrapper = styled(Button)`
    background-color: #4bd3ef;
    margin-bottom: 40px;
    
    //Темы, записанные в функцию.
    //Записываем в переменную условие и передаём в темы
    //Из объекта можно передать через точку или [].
    //Так, как type это переменная, передаётся через [].
    //Если бы type был ключ, то было бы .type или ['type'] -  
    //Пример -  {theme.buttons.primaryDesktop.fontSize};
    ${({ isMobile, theme})=>{
        const type = isMobile 
              ? 'primaryMobile'
              : 'primaryDesktop' 
    return`
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


export default class ButtonSend extends React.Component {
    // в состоянии у свойства isMobile
    // записали ширину экрана <780px
state ={
    isMobile: window.innerWidth<780,

}
    render = () => {

    //Это деструктцризация объекта state -
        // в переменную {isMobile} записываем ключ состояния isMobile, т.е
    //    эта переменная становится ключём объекта state
    const {isMobile}=this.state;

//во Wrapper в параметр isMobile передаём ключ isMobile
        return <Wrapper isMobile={isMobile}>
            Отправить
        </Wrapper>;
    };
}


//Так передаются темы через шаблонную строку
//Пример выше - через функцию
// ${({ isMobile, theme})=>`
//     	width: ${theme.buttons.primaryDesktop.width};
//     	font-size: ${theme.buttons.primaryDesktop.fontSize};
//     	line-height: ${theme.buttons.primaryDesktop.lineHeight};
//     	height: ${theme.buttons.primaryDesktop.height};
//
//     `}