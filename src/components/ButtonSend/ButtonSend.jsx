import React from 'react';
import styled from 'styled-components';


const Button = styled.div`
    max-width:        300px;
    height:           40px;
    font-size:        16px;

    font-weight:      bold;
    line-height:      20px;
    color:            #fff;

    border-radius:    5px;
    background-color: #4bd3ef;

    padding:          10px 0;
    margin:           0 auto;
    cursor:           pointer;
    text-align:       center;
    
    &:hover{
     box-shadow: 0 2px 10px #4bd3ef;
    transition: 0.4s ease;
    }
`;


export default class ButtonSend extends React.Component {

    render = () => {
        return <Button>
            Отправить
        </Button>;
    };
}