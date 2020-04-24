import React from 'react';
import styled from 'styled-components'
import Name from './Name'


const InputWrapper = styled.div`
    width: 100%;
    
    margin-right: ${(props)=> props.name ? '30px': '0'};
    
`;


export default class Wrap extends React.Component {
    render = () => {
        return <InputWrapper>
<Name></Name>
        </InputWrapper>;
    };
}