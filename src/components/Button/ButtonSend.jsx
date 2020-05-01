import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Wrapper = styled(Button)`
    background-color: #4bd3ef;
    margin-bottom: 40px;

    &:hover{
     box-shadow: 0 2px 10px #4bd3ef;
     transition: 0.4s ease;
    }
`;


export default class ButtonSend extends React.Component {

    render = () => {
        return <Wrapper>
            Отправить
        </Wrapper>;
    };
}