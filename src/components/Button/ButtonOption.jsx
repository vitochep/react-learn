import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Wrapper = styled(Button)`
    background-color: grey;

    &:hover{
     box-shadow: 0 2px 10px grey;
    transition: 0.4s ease;
    }
`;


export default class ButtonOption extends React.Component {

    render = () => {
        return <Wrapper>

        </Wrapper>;
    };
}