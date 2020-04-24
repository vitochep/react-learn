import React from 'react';
import styled from 'styled-components'


const InputWrapper = styled.div`
    width: 100%;
    
    //&.mod-name {
    //margin-right: 30px;
    //} 
    margin-right: ${(props)=> props.name ? '0': '30px'};
    
`;


export default class Wrap extends React.Component {
    render = () => {
        return <InputWrapper>

        </InputWrapper>;
    };
}